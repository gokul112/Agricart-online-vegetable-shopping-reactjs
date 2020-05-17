import React from 'react';

const Header = (props) => {
  return(
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/Agricart-online-vegetable-shopping-reactjs">{props.title}</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li className="active"><a onClick={()=>props.buy("products")}> <i className="glyphicon glyphicon-search icon"></i>Products</a></li>
          <li ><a onClick={()=>props.buy("offers")}><i className="fa fa-percent icon"></i>Offers</a></li>
          <li><a onClick={()=>props.buy("help")}><i className="fa fa-life-ring icon"></i> Help</a></li>
          
          {props.user.userId!=null?(<li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-user icon"></span>{props.user.email!==null? props.user.email:"Hello, Sign in"}</a>
            <ul className="dropdown-menu">
              <li align="center" className="well">
              {props.user.email===null?(<a onClick={()=>props.buy("signin")}><span className="glyphicon glyphicon-user icon"></span>Sign In</a>):''}
                  <a onClick={()=>props.buy("profile")} > Profile</a>
                  <a onClick={()=>props.buy("orders")} > Orders</a>
                  <a onClick={()=>props.buy("favourites")} > Favourites</a>
                  {props.user.email!==null?(<a onClick={props.logout} ><span className="glyphicon glyphicon-log-out"></span> Logout</a>):''}
              </li>
              </ul>
            </li>):''}
          <li><a onClick={()=>props.buy("checkout")}><i className="fa fa-cart-plus icon"></i>Cart <span>{props.count.length}</span> </a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;