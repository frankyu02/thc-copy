import React, {useState} from "react";
import MenuCardStyles from "./menuCard.styled";
import BrandLogoBanner from "../../global_component/BrandLogoBanner/BrandLogoBanner";
import TypeBanner from "../../global_component/StrainTypeBanner/TypeBanner";
import Img from "react-cool-img";
import Dropdown from "./menuDropdown";
import { animated, useSpring } from '@react-spring/web';

const MenuCard = ({ product }) => {
    const [index, setIndex] = useState(0);
    const [styles, set] = useSpring(() => ({ y: 20, opacity: 0 }));

    function detailDisplay (product) {
        if (typeof product.potencyThc === 'undefined' && typeof product.potencyCbd === 'undefined') {
            return "          ";
        }
        else {
            if (typeof product.potencyThc !== 'undefined' && typeof product.potencyCbd !== 'undefined') {
                if (product.potencyThc.formatted !== "" && product.potencyCbd.formatted !== "") {
                    return `THC: ${product.potencyThc.formatted}  |  CBD: ${product.potencyCbd.formatted}`;
                }
                else if (product.potencyThc.formatted === "" && product.potencyCbd.formatted === "") {
                    return "          ";
                }
                else if (product.potencyThc.formatted === "") {
                    return `THC: 0%  |  CBD: ${product.potencyCbd.formatted}`;
                }
                else {
                    return `THC: ${product.potencyThc.formatted}  |  CBD: 0%`;
                }
            }
            else if (typeof product.potencyThc !== 'undefined') {
                if (product.potencyThc.formatted === "") {
                    return "          ";
                }
                return `THC: ${product.potencyThc.formatted}  |  CBD: 0%`;
            }
            else {
                if (product.potencyCbd.formatted === "") {
                    return "          ";
                }
                return `THC: 0%  |  CBD: ${product.potencyCbd.formatted}`;
            }
        }
    }

    function nameDisplay (product) {
        let result = "";
        if (product.name) {
            if (product.name.length > 50) {
                result = `${product.name.substring(0,46)}...`;
            }
            else {
                result = product.name;
            }
        }
        return result;
    }

    return (
        <MenuCardStyles>
            <div className="card">
                <div className="imgDiv" 
                    onMouseEnter={() => set({ y: 0, opacity: 1 })}
                    onMouseLeave={() => set({ y: 20, opacity: 0 })}>
                    <div className="brand"><BrandLogoBanner brand={product.brand}/></div>
                    <div className="strain"><TypeBanner text={product.strainType} size={"14px"}/></div>
                    <div className="image"><Img className="realImage" src={product.image} alt={product.name}/></div>
                    <animated.div className="cartBanner" style={styles}>
                        <button><p className="buttonText">ADD TO CART</p></button>
                    </animated.div>
                </div>
                <div className="detail">
                    <p>{detailDisplay(product)}</p>
                </div>
                <div className="title">
                    <h4>{nameDisplay(product)}</h4>
                </div>
                <div className="price">
                    <h5>{product.variants[index].specialPriceRec === null ? `$${product.variants[index].priceRec}` : `$${product.variants[index].specialPriceRec}`}</h5>
                    <h5 className="slash"> &nbsp;/&nbsp; </h5>
                    <Dropdown index={index} setIndex={setIndex} variant={product.variants}/>
                </div>
            </div>
        </MenuCardStyles>
    )
}

export default MenuCard;