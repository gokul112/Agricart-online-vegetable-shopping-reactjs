

import React from 'react';
import '../css/Signin.css'

const Signin = (props) => {

    console.log(props.user,"user")

  return(
    <div className="login-form">
    <form action="/examples/actions/confirmation.php" method="post">
        <p className="text-center heading">AGRI-CART</p>
        <h2 className="pull-left">Welcome Back</h2>     
        <p className="pull-left">Sign in with your email address or mobile number.</p>

        <div className="form-group">
            <input type="text" className="form-control" placeholder="Email or mobile number" onChange={(e)=>props.userLoginChange(e.target.value)} required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" onChange={(e)=>props.pwdLoginChange(e.target.value)} required="required"/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-block btn-cust" onClick={(e) => props.login(e)}>Log in</button>
        </div>
        {/* <div className="clearfix">
            <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
            <a href="#" className="pull-right">Forgot Password?</a> 
        </div>         */}
    <p className="text-center">New to Agri-Cart? <a onClick={()=>props.buy("signup")}>Create an Account</a></p>
    </form>
</div>

  )
}

export default Signin;