import React from 'react'
import Baskets from './Baskets';
import utils from '../utils'
import '../css/checkout.css';
import useProducts from './useProducts';
import Paypal from './Paypal';


function Checkout(props) {

  const {transcationSuccess,transcationError,transcationCancelled,env,currency,client} = useProducts();

    return (
        <div className="container-fluid checkout-container">
             <div className="row">
                    <div className="col-md-8 col-sm-12 well address-container">
                        <img src="/Agricart-online-vegetable-shopping-reactjs/truck.gif" alt="truck" className="truck"/> 
                    </div>
                   
                    <div className="col-md-4 sticky basket">
                      <Baskets cartItems={props.cartItems} onAddCart={props.onAddCart} onRemoveCart={props.onRemoveCart} onClass="checkout-cart" onPayment="payment-table" />
                      
                      {props.cartItems.length>0 ? <div>
                      <div className="row bill-details">
                        <div className="col-md-3">
                        Subtotal </div>
                        <div className="col-md-1 total-charges">
                        {utils.formatCurrency(props.cartItems.reduce((a,c) => a + c.price * c.count,0))}
                    </div>
                    </div>
                    <div className="row bill-details">
                    <div className="col-md-3"> 
                        Tax 
                        </div>
                        <div className="col-md-1 total-charges">
                        {utils.formatCurrency(props.cartItems.reduce((a,c) => a + c.price * c.count,0)* 0.18) }
                    </div>
                    </div>
                    <hr className="to-pay"/>
                    <div className="row  bill-details">
                    <div className="col-md-3">
                        Total </div>
                        <div className="col-md-1 total-charges">
                        {utils.formatCurrency(props.cartItems.reduce((a,c) => a + c.price * c.count,0) + props.cartItems.reduce((a,c) => a + c.price * c.count,0)* 0.18) }
                    </div>
                        </div>
                        <div className="checkout-payment">
                       <Paypal env={env} currency={currency} client={client} toPay={props.cartItems.reduce((a,c) => a + c.price * c.count,0) + props.cartItems.reduce((a,c) => a + c.price * c.count,0)* 0.18} onSuccess={transcationSuccess} transcationError={transcationError} transcationCancelled={transcationCancelled} cartItems={props.cartItems}/>
                    </div>
                    </div>:""}
                   </div>
                   </div>
        </div>
    )
}

export default Checkout
