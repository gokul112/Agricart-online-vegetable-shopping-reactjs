import React from 'react'
import '../css/orderConfirmation.css'

function OrderConfirmation() {
    return (
        <div>
              <div class="swal2-icon swal2-success swal2-animate-success-icon" style={{display: 'flex'}}>
                        <div class="swal2-success-circular-line-left" style={{backgroundColor: 'rgb(255, 255, 255)'}}></div>
                        <span class="swal2-success-line-tip"></span>
                        <span class="swal2-success-line-long"></span>
                        <div class="swal2-success-ring"></div> 
                        <div class="swal2-success-fix" style={{backgroundColor: 'rgb(255, 255, 255)'}}></div>
                        <div class="swal2-success-circular-line-right" style={{backgroundColor: 'rgb(255, 255, 255)'}}></div>
                      
                </div>
                
                <div className="order-conf-text">
                    Your Order is Confirmed!
                    <p>Order will be delivered within 24 hours</p>
                    <p>Continue Shopping....</p>
                </div>
            </div>
    )
}

export default OrderConfirmation
