

import React from 'react';
import '../css/Signin.css'

const Signup = (props) => {


  return(
    <div className="login-form">
    <form action="/examples/actions/confirmation.php" method="post">
        <p className="text-center heading">AGRI-CART</p>
        <h2 className="pull-left">Let's Get Started</h2>     
        <p className="pull-left">Enter your email address or mobile number.</p>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Email or mobile number" onChange={(e)=>props.userLoginChange(e.target.value)}  required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" onChange={(e)=>props.pwdLoginChange(e.target.value)}  required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e)=>props.cnfPwdLoginChange(e.target.value)} required="required"/>
        </div>
       
        <div className="form-group">
          <label className="pull-left checkbox-inline"><input type="checkbox"/> Accept Terms & Conditions</label>

            <button type="submit" className="btn btn-block btn-cust" onClick={(e)=>props.signUp(e)}>Signup</button>
        </div>
        {/* <div className="clearfix">
            <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
            <a href="#" className="pull-right">Forgot Password?</a> 
        </div>         */}
    <p className="text-center">Already a Member? <a onClick={()=>props.buy("signin")}>Sign in</a></p>
    </form>
</div>

  )
}

export default Signup;