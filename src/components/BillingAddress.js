import React from 'react'

function BillingAddress(props) {

    return (

        <div>
            <form className="form-horizontal">
                 <fieldset>

                    <legend>Billing Address</legend>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">Full Name</label>
                        <div className="col-sm-9">
                        <input type="text" placeholder="Enter Full Name" className="form-control" value={props.billAddress.fullName} onChange={(e) => {props.saveAddress(e.target.value,"fullName")}} required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">Line 1</label>
                        <div className="col-sm-9">
                        <input type="text" placeholder="Address Line 1" className="form-control" value={props.billAddress.address1} onChange={(e) => {props.saveAddress(e.target.value,"address1")}} required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">Line 2</label>
                        <div className="col-sm-9">
                        <input type="text" placeholder="Address Line 2" className="form-control" value={props.billAddress.address2} onChange={(e) => {props.saveAddress(e.target.value,"address2")}} required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">City</label>
                        <div className="col-sm-9">
                        <input type="text" placeholder="City" className="form-control" value={props.billAddress.city} onChange={(e) => {props.saveAddress(e.target.value,"city")}}  required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">State</label>
                        <div className="col-sm-3">
                        <input type="text" placeholder="State" className="form-control" value={props.billAddress.state} onChange={(e) => {props.saveAddress(e.target.value,"cityState")}}  required/>
                        </div>

                        <label className="col-sm-2 control-label" for="textinput">Postcode</label>
                        <div className="col-sm-4">
                        <input type="text" placeholder="Post Code" className="form-control" value={props.billAddress.pincode} onChange={(e) => {props.saveAddress(e.target.value,"pincode")}} required/>
                        </div>
                    </div>



                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">Country</label>
                        <div className="col-sm-9">
                        <input type="text" placeholder="Country" className="form-control" value={props.billAddress.country} onChange={(e) => {props.saveAddress(e.target.value,"country")}} required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-8">
                        <div className="pull-right">
                            <button type="submit" className="btn btn-primary" onClick={(e)=>props.submitAddress(e)}>Save Address</button>
                        </div>
                        
                        </div>
                    </div>

                 </fieldset>
             </form>
        </div>
    )
}

export default BillingAddress
