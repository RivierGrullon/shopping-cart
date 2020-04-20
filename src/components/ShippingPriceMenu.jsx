import React, { useContext } from 'react'
import { ShippingContext } from './Cart'


const ShippingPriceMenu = () => {

    const { setShippingPrice } = useContext(ShippingContext)

    const handleChange = (event) => {
        setShippingPrice(+event.target.value)
    }

    return (
        <div className="Shipping-options">
            <p>SHIPPING:</p>
            <form className="Shipping-options-form">
                <div className="Free-Shipping">
                    <input
                        type="radio"
                        name="Shipping-option"
                        id="Free-Shipping"
                        defaultChecked
                        value={0}
                        onChange={handleChange}
                    /><label htmlFor="Free-Shipping">Free Shipping <b>Free</b></label>
                </div>
                <div className="International">
                    <input
                        type="radio"
                        name="Shipping-option"
                        id="International"
                        value={60}
                        onChange={handleChange}
                    /><label htmlFor="International">International: <b>$60.00</b></label>
                </div>
                <div className="Local-Delivery">
                    <input
                        type="radio"
                        name="Shipping-option"
                        id="Local-Delivery"
                        value={5}
                        onChange={handleChange}
                    /><label htmlFor="Free-Shipping">Local Delivery: <b>$5.00</b></label>
                </div>
            </form>
        </div>
    )
}

export default ShippingPriceMenu
