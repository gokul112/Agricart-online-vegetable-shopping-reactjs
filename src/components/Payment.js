import React from 'react'

function Payment() {
    return (
            <div class="col-md-8 col-sm-12 well payment-container">
                                <fieldset>

                                  <legend>Payment Details</legend>
                                  <ul class="nav nav-pills bg-light">
                                    <li class="active"><a data-toggle="pill" href="#home"><i class="fa fa-credit-card"></i> Debit/Credit Card</a></li>
                                    <li><a data-toggle="pill" href="#menu1"><i class="fa fa-paypal"></i>  Paypal</a> </li>
                                    <li><a data-toggle="pill" href="#menu2"><i class="fa fa-university"></i>  UPI</a></li>
                                  </ul>
                
                                  <div class="tab-content">
                                    <div id="home" class="tab-pane fade in active tab-payment">

                                                <form className="form-horizontal" role="form" >
                                                    <div className="form-group">
                                                      <label className="col-sm-3 control-label">We Accept <i class="fa fa-cc-visa"></i>   <i class="fa fa-cc-amex"></i>   
                                                    <i class="fa fa-cc-mastercard"></i> </label>
                                                    </div>
                                                    <div class="form-group">
                                                      <label class="col-sm-2 control-label" for="textinput">Name on Card</label>
                                                      <div class="col-sm-9">
                                                        <input type="text" placeholder="Name on Card" class="form-control" required/>
                                                      </div>
                                                    </div>
                                                    
                                                    <div class="form-group">
                                                      <label class="col-sm-2 control-label" for="textinput">Card Number</label>
                                                      <div class="col-sm-9">
                                                        <input type="text" placeholder="Card Number" class="form-control" required/>
                                                      </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="col-sm-2 control-label" for="textinput">Expiry</label>
                                                        <div class="col-sm-2">
                                                                    <input type="number" class="form-control" placeholder="MM" name=""/>
                                                        </div>

                                                        <div class="col-sm-2">
                                                          <input type="text" placeholder="YY" class="form-control" required/>
                                                        </div>

                                                        <label class="col-sm-3 control-label" for="textinput">CVV</label>
                                                        <div class="col-sm-2">
                                                          <input type="text" placeholder="CVV" class="form-control" required/>
                                                        </div>
                                                      </div>
                                              <button class="subscribe btn btn-primary btn-block" type="button"> PAY  </button>
                                              </form>
                                    </div>
                                    
                                        <div id="menu1" class="tab-pane fade tab-payment">

                                          <p>Paypal is easiest way to pay online</p>
                                          <p>
                                          <button type="button" class="btn btn-primary"> <i class="fa fa-paypal"></i> Log in my Paypal </button>
                                          </p>
                                        </div>
                                        <div id="menu2" class="tab-pane fade tab-payment">
                                          <form className="form-horizontal">
                                            <div class="form-group">
                                                      <label class="col-sm-2 control-label" for="textinput">Pay Via New VPA</label>
                                                      <div class="col-sm-9">
                                                        <input type="text" placeholder="Enter VPA" class="form-control" required/>
                                                      </div>
                                                    </div>
                                        <button class="subscribe btn btn-primary btn-block" type="button"> VERIFY AND PAY   </button>
                                        </form>

                                        </div>
                                  </div>


                              </fieldset>

                    </div>
    )
}

export default Payment
