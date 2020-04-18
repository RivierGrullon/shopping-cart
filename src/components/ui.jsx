import React, {useState} from 'react';
import '../static/ui.css';
import dataFake from '../FakeApi.json';
import {ItemCard} from './itemCard';
import {Cart} from './Cart';



export const UI = () =>{
    const data = dataFake
    const [products] = useState(data);
    const [template, setTemplate] = useState(0);

    return(
        <div className="Layout-container">
            <div className="Header">
                <nav>
                     <ul>
                        <li onClick={()=>setTemplate(0)}><span>Home</span></li>
                        <li onClick={()=>setTemplate(1)}><span>Products</span></li>
                    </ul>
                </nav>
            </div>

            {template === 0 ?
            (
                <div className="items-container">
                    {products.map(product=>{
                        return(
                            <ItemCard products={product} key={product.id}/>
                        )
                    })}
                </div>
            )
            :
            (
                <Cart />
            )
            }

            <div className="footer-container">
            <footer>&copy; Copyright 2020</footer>

            </div>
        </div>
    )
}
