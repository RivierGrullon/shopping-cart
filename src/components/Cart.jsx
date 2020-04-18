import React, { useState, useEffect, useContext } from 'react'
import '../static/Cart.css'
import CartProduct from './CartProduct'
import ShippingPriceMenu from './ShippingPriceMenu'
import {CartContext} from './ui'

export const ShippingContext = React.createContext();

export const Cart = () => {
    const {cartProducts, setCartProducts} = useContext(CartContext)
    console.log(cartProducts);
    const [subTotalPrice, setSubTotalPrice] = useState(0)
    const [shippingPrice, setShippingPrice] = useState(subTotalPrice)
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        var total = 0
        cartProducts.forEach(({ price, mount }) => {
            total += price * mount;
        })
        setSubTotalPrice(total)
    }, [cartProducts])

    useEffect(() => {
        setTotalPrice(subTotalPrice + shippingPrice)
    }, [shippingPrice])

    useEffect(() => {
        setTotalPrice(subTotalPrice + shippingPrice)
    }, [subTotalPrice])
    const updateAmount = (id, type) => {
        const mountToAdd = type === 'add' ? 1 : -1
        return () => {
            let newCartProducts = cartProducts.map(product =>
                product.id === id ?
                    { ...product, mount: product.mount + mountToAdd }
                    : product
            )
            newCartProducts = newCartProducts.filter((product) => product.mount > 0)
            setCartProducts(newCartProducts)
        }
    }
    return (
        <div className="Cart-container">
            <img src="/images/shopping-cart.svg" alt="Shopping cart icon" id="shopping-cart-icon" />
            {cartProducts.length > 0 ?
                (
                    <div className="No-empty-cart">
                        <div className="Products-list">
                            {cartProducts.map((product) =>
                                <CartProduct product={product} updateAmount={updateAmount} key={product.id} />
                            )}
                        </div>
                        <div className="Price Sub-total-price">
                            <p>SUBTOTAL: ${subTotalPrice.toFixed(2)}</p>
                        </div>
                        <ShippingContext.Provider value={{ setShippingPrice }}>
                            <ShippingPriceMenu />
                        </ShippingContext.Provider>
                        <div className="Price Total-price">
                            <h1>TOTAL: <span>${totalPrice}</span></h1>
                        </div>
                    </div>
                )
                :
                <div className="Empty-cart">
                    <h1>Lo siento parece que tu carrito esta vacio</h1>
                    <img src="/images/sad.svg" alt="Sad face" />
                </div>
            }
        </div>
    )
}

