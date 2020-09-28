import React, { useState } from 'react';


const circle = (quantity) => {
    return (
        <span className="circle">{quantity}</span>
    )
}

// MAKING A SIMPLE MENU
function Menu({ quantity, addToCart }) {
    return (

        <ul className="item-2">
            <li><a href="#"><strong>CART</strong>
                <img src="../icon/shopping-cart.svg" width="20px" alt="" />
                {addToCart == true ? circle(quantity) : null}
            </a></li>
            <li><a href="#"> <strong>ENGLISH</strong> / বাংলা</a></li>
        </ul>

    )
}
const ShoppingCart = () => {

    // GENERAL PRICE
    let defaultGeneralPrice = 13;
    const [generalPrice, setGeneralPrice] = useState(defaultGeneralPrice);

    // QUANTITY
    const [quantity, setQuantity] = useState(1);

    // DISCOUNT
    let defaultDiscount = 5;
    // let defaultCouponDiscount = quantity * defaultDiscount ;
    const [couponDiscount, setCouponDiscount] = useState(defaultDiscount);
    console.log(couponDiscount);

    // TOTAL PRICE
    // let defaultTotalPrice = generalPrice * quantity - couponDiscount ;
    // console.log(defaultTotalPrice);
    const [totalPrice, setTotalPrice] = useState(generalPrice);

    const [addToCart, setAddToCart] = useState(false);
    console.log(`Add to cart button click ? ${addToCart}`);




    function incrementQuantity() {
        // EVERY TIME WHEN CLICK PLUS BUTTON IT WILL INCREMENT BY ONE
        // AND TOTAL PRICE WILL BE CHANGE
        // PRICE * QUANtITY = TOTAL 
        setQuantity(prevQuantity => prevQuantity + 1);
        setTotalPrice(prevPrice => prevPrice + generalPrice);
    }
    function decrementQuantity() {
        setQuantity(prevQuantity => prevQuantity - 1);
        setTotalPrice(prevPrice => prevPrice - generalPrice);
    }
    function usingCouponDiscount(e) {
        e.preventDefault();
        console.log(e.target.value);
        if (e.target.value == 123) {
            console.log('set total price and coupon discount');
            setCouponDiscount(prevDiscount => prevDiscount);
            setTotalPrice(prevPrice => prevPrice - couponDiscount * quantity);
        }
    }




    function handleClick(e) {
        e.preventDefault();
        setAddToCart(prevAddToCart => prevAddToCart = true);
    }



    const products = [4, 3, 2, 6, 4, 3, 2, 4, 6, 5]


    return(
        
           ( products.map(() => {
                return (
                    <div>
                        <div>
                            <div>
                                <img width={200} src="https://www.univers-du-foot.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/i/ai0049_app_virtual_standard_transparent.png" alt="" />
                            </div>
                            <div>
                                <div>FC Bayern München</div>
                                <div>
                                    FC Bayern Munich First team squad First team squad Women's team The FC Bayern Women represent the club in the Bundesliga and Women's Champions League.
                    </div>
                            </div>
                            <div>
                                <div>Quantity {quantity}</div>
                                <div>
                                    <button onClick={incrementQuantity}>+</button>
                                    <button onClick={decrementQuantity}>-</button>
                                </div>
                            </div>
                            <div>
                                <div>General price {generalPrice}$</div>
                                <div>Total Price {totalPrice}$</div>
                            </div>
                            <div>
                                <button onClick={handleClick} >Add to Cart</button>
                            </div>
                        </div>
                    </div>
                );
            })
           )

    )
}

export default ShoppingCart;