import React from 'react';
import '../css/baskets.css';
import utils from '../utils';

function Subtotal(props) {
    return (
        <div>
              <div className="subTotal">
                        Subtotal <span className="total-charges">
                        {utils.formatCurrency(props.cartItems.reduce((a,c) => a + c.price * c.count,0))}
                    </span>
                    </div>
                    <p className="extra">Extra charges may apply</p>
                    <div className="checkout">
                        <button type="submit" value="Checkout" onClick={(e)=>props.onCheckout(e)} className="check">Checkout →</button>
                    </div>
            
        </div>
    )
}

export default Subtotal
