
import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import useLocalStorage from './useLocalStorage';

import CHECKOUT_QUERY from '../apollo/queries/checkout.graphql';
import CREATE_CHECKOUT from '../apollo/mutations/create-checkout.graphql';
import ADD_ITEM_TO_CHECKOUT from '../apollo/mutations/add-item-to-checkout.graphql';
import REMOVE_ITEM_FROM_CHECKOUT from '../apollo/mutations/remove-item-from-checkout.graphql';
import UPDATE_CHECKOUT_ITEM_QUANTITY from '../apollo/mutations/update-checkout-item-quantity.graphql';
import UPDATE_CHECKOUT from '../apollo/mutations/update-checkout.graphql';


const useCheckout = (initialOrderType, initialPricingType) => {

    //Local Storage States
    const [checkoutId, setCheckoutId] = useLocalStorage('dutchie-plus--checkout-id');
    //const [currentRetailer, setCurrentRetailer] = useLocalStorage('dutchie-plus--retailer-id');
    const [currentRetailer, setCurrentRetailer] = useState('4c9422c5-d248-415b-8a88-0a75822c50e6')

    //Query
    const {
        data: checkoutData,
        loading: checkoutLoading,
        error: checkoutError,
        refetch: refetchCheckout,
        } = useQuery(CHECKOUT_QUERY, {
        variables: { id: checkoutId, retailerId: currentRetailer },
        fetchPolicy: "network-only" // Used for subsequent executions
    });

    //Mutations
    const [
        createCheckout,
        { data: createCheckoutData, loading: createCheckoutLoading, error: createCheckoutError },
    ] = useMutation(CREATE_CHECKOUT);
    const [
        updateCheckout,
        { data: updateCheckoutData, loading: updateCheckoutLoading, error: updateCheckoutError },
    ] = useMutation(UPDATE_CHECKOUT);
    const [
        addItemToCheckout,
        { data: addToCartData, loading: addToCartLoading, error: addToCartError },
    ] = useMutation(ADD_ITEM_TO_CHECKOUT);
    const [
        removeItemFromCheckout,
        { data: removeFromCartData, loading: removeFromCartLoading, error: removeFromCartError },
    ] = useMutation(REMOVE_ITEM_FROM_CHECKOUT);
    const [
        updateCheckoutItemQuantity,
        { data: updateQuantityData, loading: updateQuantityLoading, error: updateQuantityError },
    ] = useMutation(UPDATE_CHECKOUT_ITEM_QUANTITY);

    // States
    const [checkout, setCheckout] = useState();
    const [orderType, setOrderType] = useState(initialOrderType);
    const [pricingType, setPricingType] = useState(initialPricingType);



    // Set checkout data
    useEffect(() => {
        console.log("setCheckout useEffect")
        if(currentRetailer){
        if (!checkoutLoading && checkoutData) {
            setCheckout(checkoutData.checkout);
            setPricingType(checkoutData.checkout.pricingType);
            setOrderType(checkoutData.checkout.orderType);
        }
        }
    }, [checkoutLoading, checkoutData, currentRetailer]);

    // If loading the checkout failed, create a new checkout
    useEffect(() => {
        console.log("CheckoutError UseEffect")
        if (checkoutError){
        console.log(" checkoutError-->"+checkoutError)
        createCheckoutAsync(orderType, pricingType, currentRetailer);
        refetchCheckout();
        }
    }, [checkoutError]);

    // Update checkout if Order or Pricing Type changes
    useEffect(() => {
        console.log("UseEffect  [Update checkout if Order or Pricing Type changes]")
        if (checkout && (checkout.orderType !== orderType || checkout.pricingType !== pricingType))
        updateCheckoutAsync(orderType, pricingType);
    }, [orderType, pricingType])


    const updateStateFromCheckout = (checkout) => {
        setCheckoutId(checkout.id);
        setCheckout(checkout);
        setPricingType(checkout.pricingType);
        setOrderType(checkout.orderType);
    };

    // Create a checkout asynchronously
    const createCheckoutAsync = async (orderType, pricingType, currentRetailer) => {
        try {
        const result = await createCheckout({
            variables: { orderType, pricingType, retailerId: currentRetailer },
        });
        updateStateFromCheckout(result.data.createCheckout);
        } catch (e) {
        console.error(e);
        return undefined;
        }
    };

    const updateCheckoutAsync = async (orderType, pricingType) => {
        try {
        const result = await updateCheckout({
            variables: { checkoutId, orderType, pricingType, retailerId: currentRetailer },
        });

        setCheckoutId(result.data.updateCheckout.id);
        setCheckout(result.data.updateCheckout);

        return result.data.updateCheckout;
        } catch (e) {
        // console.log(e);
        return undefined;
        }
    };
    
    // Wrapper Functions for Error Handling
    const addToCart = async (productId, quantity, option) => {
        try {
        console.log(checkoutId, productId, quantity, option)
        const result = await addItemToCheckout({
            variables: {  retailerId: currentRetailer, checkoutId, productId, quantity, option },
        });

        updateStateFromCheckout(result.data.addItem);
        
        return checkout;
        } catch (e) {
        console.error(e);
        return undefined;
        }
    };

    const removeFromCart = async (itemId) => {
        try {
        const result = await removeItemFromCheckout({
            variables: { checkoutId, itemId, retailerId: currentRetailer },
        });

        updateStateFromCheckout(result.data.removeItem);
        return checkout;
        } catch (e) {
        console.error(e);
        return undefined;
        }
    };

    const updateQuantity = async (itemId, quantity) => {
        try {
        const result = await updateCheckoutItemQuantity({
            variables: { checkoutId, itemId, quantity, retailerId: currentRetailer },
        });
        updateStateFromCheckout(result.data.updateQuantity);
        return checkout;
        } catch (e) {
        console.error(e);
        return undefined;
        }
    };

    return {
        setOrderType,
        setPricingType,
        setCurrentRetailer,
        orderType,
        pricingType,
        checkoutId,
        checkout,
        checkoutLoading,
        checkoutError,
        currentRetailer,
    
        // Functions
        createCheckoutAsync,
        updateCheckoutAsync,
        addToCart,
        removeFromCart,
        updateQuantity,
    };
}
export default useCheckout;