import React, {useState} from 'react';
import '../static/ui.css';
import dataFake from '../FakeApi.json';
import {ItemCard} from './itemCard';
import {Cart} from './Cart';

export const CartContext = React.createContext();

export const UI = () =>{
    const data = dataFake
    const [products] = useState(data);
    const [template, setTemplate] = useState(false);
    const [cartProducts, setCartProducts] = useState([])

    return(
        <div className="Layout-container">
            <div className="Header">
                <nav>
                    <ul>
                        <li onClick={()=>setTemplate(false)}><span>Home</span></li>
                        <li onClick={()=>setTemplate(true)}><span>Products</span></li>
                    </ul>
                </nav>
            </div>
            <CartContext.Provider value={{cartProducts, setCartProducts, setTemplate}}>
                <div className="items-container">
                    {products.map(product=>{
                        return(
                            <ItemCard products={product} key={product.id}/>
                        )
                    })}
                </div>

                {template && <Cart/>}

            </CartContext.Provider>

            <div className="footer-container">
            <footer>&copy; Copyright 2020</footer>

            </div>
        </div>
    )
}
