import React, { useState, useEffect } from 'react'
import dataFake from '../FakeApi.json'
import '../static/Cart.css'
import CartProduct from './CartProduct'

export const Cart = () => {
    const data = dataFake.map((item) => { return { ...item, mount: 1 } })
    const [products, setProducts] = useState(data)
    const [totalPrice, setTotalPrice] = useState(0.00)

    useEffect(() => {
        var total = 0
        products.forEach(({ price, mount }) => {
            total += price * mount;
        })
        setTotalPrice(total)
    }, [products])

    const UpdateAmount = (id, type) => {
        const mountToAdd = type === 'add' ? 1 : -1
        return () => {
            let newProducts = products.map(product =>
                product.id === id ?
                    { ...product, mount: product.mount + mountToAdd }
                    : product
            )
            newProducts = newProducts.filter((product) => product.mount > 0)
            setProducts(newProducts)
        }
    }
    return (
        <div className="Cart-container">
            <img src="/images/shopping-cart.svg" alt="Shopping cart icon" id="shopping-cart-icon" />
            {products.length > 0 ?
                (
                    <div className="No-empty-cart">
                        <div className="Products-list">
                            {products.map((product) =>
                                <CartProduct product={product} UpdateAmount={UpdateAmount} key={product.id} />
                            )}
                        </div>
                        <div className="Total-price">
                            <h1>Total: {totalPrice.toFixed(2)}</h1>
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

