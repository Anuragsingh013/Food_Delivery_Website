import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../contexts/StoreContext'
const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext)
    return (
        <form className='place-order'>
            <div className="place-order-left">
                <div className="title">Delivery Information</div>
                <div className="multi-fields">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <div className='multi-fields'>
                    <input type="email" placeholder='Emial Address' />
                    <input type="text" placeholder='Street' />
                </div>
                <div className='multi-fields'>
                    <input type="text" placeholder='Zip code' />
                    <input type="text" placeholder='Country' />
                </div>
                <input type="text" placeholder='phone' />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>PROCEED TO Payment</button>
                </div>
            </div>

        </form>
    )
}

export default PlaceOrder