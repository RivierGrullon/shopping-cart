import React from 'react'

const CartProduct = ({product, updateAmount}) => {
    const {id,name,seller,image,price,mount} = product
    return (
        <div className="Product-container" key={id}>
            <div className="Product-image">
                <img src={image} alt={name} className="images"/>
            </div>
            <div className="Product-info">
                <p id="name">{name}</p>
                <p id="seller">{seller}</p>
            </div>
            <div className="Product-mount">
                <input type="image" src="/images/add.svg" alt="add" onClick={updateAmount(id, 'add')} className="icons-buttons"/>
                <p>{mount}</p>
                <input type="image" src="/images/delete.svg" alt="sub" onClick={updateAmount(id, 'sub')} className="icons-buttons"/>
            </div>
            <div className="Product-price">
                <p>$ {(price * mount).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default CartProduct;