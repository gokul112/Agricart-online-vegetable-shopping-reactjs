import React from 'react';
import '../css/productBox.css';
import Filter from './Filter';
import Baskets from './Baskets';
import Menu from './Menu';
import ProductCard from './ProductCard';
import Subtotal from './Subtotal';



const Products = (props) => {


    return (
        <div className="container">
             <div className="row">
                  <Menu/>
                    <div className="col-md-8">
                        <Filter count={props.products.length} handleChangeSort={props.handleChangeSort} handleSearch = {props.handleSearch} search={props.search} />
                        <ProductCard products={props.products} onAddCart={props.onAddCart}/>
                   </div>
                   <div className="col-md-4 sticky basket">
                      <Baskets cartItems={props.cartItems} onAddCart={props.onAddCart} onRemoveCart={props.onRemoveCart} onClass="Cart-Wrapper" onPayment="table"/>
                      {props.cartItems.length>0 ? <Subtotal cartItems={props.cartItems} onCheckout = {props.onCheckout}/>:''}
                   </div>
            </div>
        </div>


        
    )
}




export default Products;