import React from 'react';
import '../css/baskets.css';
import utils from '../utils'

const Baskets = (props) => {
    

    return(
        <div className={props.onClass}>
            <div className="Cart-Heading">Cart</div>
            <div className="Cart-Items">{props.cartItems.length} Items</div>
            {props.cartItems.length>0?
                <div className="cart-container">
                    <div className={props.onPayment}>
                    {props.cartItems.map(item => (
                        <div className="layout-inline row" key={item.id}>
                    <div className="col col-pro layout-inline">
                        <p>{item.title}</p>
                    </div>
                    
                    <div className="col col-qty layout-inline">
                    <div className="quantity buttons_added">
                        <input type="button" value="-" onClick={()=>props.onRemoveCart(item)} className="minus"/>
                        <input type="number"  name="quantity" value={item.count} title="Qty" className="input-text qty text" size="4" readOnly/>
                        <input type="button" value="+" onClick={()=>props.onAddCart(item)} className="plus"/>
                    </div>
                    </div>
                    
                    
                    <div className="col col-total col-numeric">               
                        <p> {utils.formatCurrency(item.price * item.count)}</p>
                    </div>
                    </div>

                    ))
                    }
                    </div>
                  
                </div>:''}

      </div>
    )



    


}

export default Baskets;