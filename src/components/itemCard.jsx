import React from 'react'
import '../static/itemCard.css'


export const ItemCard = ({products}) => {

    console.log(products)
    return (
        <div className="itemCard-container">
            <div className="header">
                <h3>{products.name}</h3>
            </div>
            <div className="description">
            <p>{products.description}</p>
            <div className="product-price"><h2>${products.price}</h2>
            <div className="stock">
                    <h4>In stock</h4>
                </div>
            </div>
            </div>
            <div>
                <img className="image" src ={products.image} alt="imgproduct"/>
            </div>

            <div className="card-footer">

                <div className="action">
                    <button type="button" onClick={(e)=>console.log(products)}>Add to cart</button>
                </div>
             </div>
        </div>
    )
}