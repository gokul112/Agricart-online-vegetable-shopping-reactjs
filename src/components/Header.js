import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return(
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">{props.title}</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li className="active"><Link to="/Agricart-online-vegetable-shopping-reactjs/products"> <i className="glyphicon glyphicon-search icon"></i>Products</Link></li>
          <li ><Link to="/Agricart-online-vegetable-shopping-reactjs/offers"><i className="fa fa-percent icon"></i>Offers</Link></li>
          <li><Link to="/Agricart-online-vegetable-shopping-reactjs/help"><i className="fa fa-life-ring icon"></i> Help</Link></li>
          
          {props.user.userId!=null?(<li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-user icon"></span>{props.user.email!==null? props.user.email:"Hello, Sign in"}</a>
            <ul className="dropdown-menu">
              <li align="center" className="well">
              {props.user.email===null?(<Link to="/Agricart-online-vegetable-shopping-reactjs/signin"><span className="glyphicon glyphicon-user icon"></span>Sign In</Link>):''}
                  <Link to="/Agricart-online-vegetable-shopping-reactjs/profile" > Profile</Link>
                  <Link to="/Agricart-online-vegetable-shopping-reactjs/orders" > Orders</Link>
                  <Link to="/Agricart-online-vegetable-shopping-reactjs/favourites" > Favourites</Link>
                  {props.user.email!==null?(<a onClick={props.logout} ><span className="glyphicon glyphicon-log-out"></span> Logout</a>):''}
              </li>
              </ul>
            </li>):''}
          <li><Link to="/checkout"><i className="fa fa-cart-plus icon"></i>Cart <span>{props.count.length}</span> </Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;