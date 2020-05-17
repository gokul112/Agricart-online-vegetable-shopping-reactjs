 import React from 'react';
 import utils from '../utils';
 
 
 function ProductCard(props) {

     return (
        <div className="row product">
                            {
                            props.products.map(product => (
                            <div className="col-md-4 car" key = {product.id}>
                                <figure className="card card-product">
                                    <div className="img-wrap"><img src={`${product.src}`} loading="lazy" alt={product.title}/></div>
                                    <figcaption className="info-wrap">
                                            <h4 className="title">{product.title}</h4>
                                            <p className="desc">{product.description}</p>
                                    </figcaption>
                                    <div className="bottom-wrap">
                                        <button onClick={()=> props.onAddCart(product)} className="cart btn pull-right">Add to Cart</button>
                                        <div className="price-wrap h5">
                                            <span className="price-new">{utils.formatCurrency(product.price)}</span> 
                                        </div> 
                                    </div> 
                                </figure>
                            </div> 
                            ))
                            }
        </div>
     )
 }
 
 export default ProductCard;
 
 
 
 