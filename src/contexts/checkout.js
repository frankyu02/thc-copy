import React, { createContext } from "react"
import useDutchieCheckout from '../hooks/useDutchieCheckout';

export const CheckoutContext = createContext({
    checkout: undefined,
    loading: false
})


const CheckoutProvider = ({ children }) => {
    const {
        checkoutId,
        checkout,
        checkoutLoading,
        checkoutError,
        setOrderType,
        setPricingType,
        pricingType,
        orderType,
        addToCart,
        removeFromCart,
        updateQuantity,
        currentRetailer,
        setCurrentRetailer,
    } = useDutchieCheckout(OrderTypes.Delivery, PricingTypes.Recreational);
    return( 
        <CheckoutContext.Provider 
            value={{
                pricingType,
                orderType,
                checkoutId,
                checkout,
                checkoutError,
                loading: checkoutLoading,
                setOrderType,
                setPricingType,
                addToCart,
                removeFromCart,
                updateQuantity,
                currentRetailer,
                setCurrentRetailer
            }}
        >
                {children}
        </CheckoutContext.Provider>
    )
};

export const OrderTypes = {
    Delivery: 'DELIVERY',
    Pickup: 'PICKUP',
};

export const PricingTypes = {
    Medical: 'MEDICAL',
    Recreational: 'RECREATIONAL',
}

export default CheckoutProvider;