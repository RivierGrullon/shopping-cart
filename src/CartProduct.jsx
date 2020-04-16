import React from 'react'

const CartProduct = ({product, UpdateAmount}) => {
    const {id,name,seller,image,price,mount} = product
    return (
        <div className="Product-container" key={id}>
            <div className="Product-image">
                <img src={image} alt={name} />
            </div>
            <div className="Product-info">
                <p id="name">{name}</p>
                <p id="seller">{seller}</p>
            </div>
            <div className="Product-mount">
                <button onClick={UpdateAmount(id, 'add')}>+</button>
                <p>{mount}</p>
                <button onClick={UpdateAmount(id, 'sub')}>-</button>
            </div>
            <div className="Product-price">
                <p>{(price * mount).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default CartProduct;