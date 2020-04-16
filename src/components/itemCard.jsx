import React, { useState } from 'react'
import dataFake from '../FakeApi.json'
import '../static/itemCard.css'
export const ItemCard = ({id}) => {
    const data = dataFake
    const [products, setProducts] = useState(data[id]);
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
                <img className="image" src ={products.image}/>
            </div>
            
            <div class="card-footer">

                <div class="action">
                    <button type="button">Add to cart</button>
                </div>
             </div>
        </div>
    )
}