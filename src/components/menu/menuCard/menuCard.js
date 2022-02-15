import React, {useState} from "react";
import MenuCardStyles from "./menuCard.styled";
import BrandLogoBanner from "../../global_component/BrandLogoBanner/BrandLogoBanner";
import TypeBanner from "../../global_component/StrainTypeBanner/TypeBanner";
import Img from "react-cool-img";
import Dropdown from "./menuDropdown";

const MenuCard = ({ product, addToCart }) => {
    const [index, setIndex] = useState(0);
    const [styles, setStyles] = useState({
        opacity: 0,
        height: 0
    });

    function detailDisplay (product) {
        if (typeof product.potencyThc === 'undefined' && typeof product.potencyCbd === 'undefined') {
            return "          ";
        }
        else {
            if (typeof product.potencyThc !== 'undefined' && typeof product.potencyCbd !== 'undefined') {
                if (product.potencyThc.formatted !== "" && product.potencyCbd.formatted !== "") {
                    return `THC: ${product.potencyThc.formatted } \u00A0 | \u00A0 CBD: ${product.potencyCbd.formatted}`;
                }
                else if (product.potencyThc.formatted === "" && product.potencyCbd.formatted === "") {
                    return "          ";
                }
                else if (product.potencyThc.formatted === "") {
                    return `THC: 0% \u00A0 | \u00A0 CBD: ${product.potencyCbd.formatted}`;
                }
                else {
                    return `THC: ${product.potencyThc.formatted} \u00A0 | \u00A0 CBD: 0%`;
                }
            }
            else if (typeof product.potencyThc !== 'undefined') {
                if (product.potencyThc.formatted === "") {
                    return "          ";
                }
                return `THC: ${product.potencyThc.formatted} \u00A0 | \u00A0 CBD: 0%`;
            }
            else {
                if (product.potencyCbd.formatted === "") {
                    return "          ";
                }
                return `THC: 0% \u00A0 | \u00A0 CBD: ${product.potencyCbd.formatted}`;
            }
        }
    }

    function nameDisplay (product) {
        let result = "";
        if (product.name) {
            if (product.name.length > 49) {
                result = `${product.name.substring(0,45)}...`;
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
                <a href={`/product/`+product.slug}>
                    <div className="imgDiv"
                        onMouseEnter={()=>{setStyles({opacity: 1, height: 60})}} 
                        onMouseLeave={()=>{setStyles({opacity: 0, height: 0})}}
                        >
                        <div className="brand"><BrandLogoBanner brand={product.brand}/></div>
                        <div className="strain"><TypeBanner text={product.strainType} size={"14px"}/></div>
                        <div className="image"><Img className="realImage" src={product.image} alt={product.name}/></div>
                        <div className="cartBanner" onClick={addToCart} style={{opacity: styles.opacity, height: styles.height}}>
                            ADD TO CART
                        </div>
                    </div>
                </a>
                <div className="detail">
                    <p>{detailDisplay(product)}</p>
                </div>
                <div className="title">
                    <a href={`/product/`+product.slug}>
                        <h4>{nameDisplay(product)}</h4>
                    </a>
                </div>
                <div className="price">
                    <h5>{product.variants[index].specialPriceRec === null ? `$ ${product.variants[index].priceRec.toFixed(2)}` : `$ ${product.variants[index].specialPriceRec.toFixed(2)}`}</h5>
                    <Dropdown index={index} setIndex={setIndex} variant={product.variants}/>
                </div>
                <div className="cartBannerBottom" onClick={addToCart}>
                    ADD TO CART
                </div>
            </div>
        </MenuCardStyles>
    )
}

export default MenuCard;