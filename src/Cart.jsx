import React, { useState } from 'react'
import dataFake from './FakeApi.json'
import './Cart.css'

export const Cart = () => {
    const data = dataFake.map((item) => { return { ...item, mount: 0 } })
    const [products, setProducts] = useState(data)
    console.log(data)
    return (
        <div className="Cart-container">
            {products.map(({ id, name, seller, image, price, mount }) =>
                <div className="Product-container" key={id}>
                    <div className="Product-image">
                        <img src={image} />
                    </div>
                    <div className="Product-info">
                        <p>{name}</p>
                        <p>{seller}</p>
                    </div>
                    <div className="Product-mount">
                        <button>+</button>
                        <p>{mount}</p>
                        <button>-</button>
                    </div>
                    <div className="Product-price">
                        <p>{price}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

