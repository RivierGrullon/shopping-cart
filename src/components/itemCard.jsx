import React, { useContext } from 'react'
import '../static/itemCard.css'
import { CartContext } from './ui'

export const ItemCard = ({ products }) => {
    const { cartProducts, setCartProducts } = useContext(CartContext)

    const addProductsToCart = () => {

        let newProduct = cartProducts.find((product) => {
            return product.id === products.id
        })
        let newCartsProducts;
        if (!newProduct) {
            newProduct = { ...products, mount: 1 }
            newCartsProducts = [...cartProducts, newProduct]
        }
        else {
            newProduct = { ...newProduct, mount: newProduct.mount + 1 }
            newCartsProducts = cartProducts.map((cartProduct) => {
                if (newProduct.id === cartProduct.id) {
                    return newProduct
                }
                else {
                    return cartProduct
                }
            });
        }
        setCartProducts(newCartsProducts);
        console.log(cartProducts);
    }
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
                <img className="image" src={products.image} alt="imgproduct" />
            </div>

            <div className="card-footer">

                <div className="action">
                    <button type="button" onClick={addProductsToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}