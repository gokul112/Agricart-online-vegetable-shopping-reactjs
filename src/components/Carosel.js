import React from 'react'
import '../css/carosel.css'

function Carosel(props) {
    return (
        <div className="container-fluid" >
                <div id="myCarousel" className="carousel slide carousel-bg" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">

                        <div className="item active">
                            <img src="https://firebasestorage.googleapis.com/v0/b/agricart-c7914.appspot.com/o/banners%2Fslider2-min.png?alt=media&token=20d5c1b4-2168-4b8e-a0f9-f496db47894b" className="pull-right" alt="Los Angeles" />
                            <div className="carousel-caption">
                                <h3>Fruits</h3>
                            <p>Fruits delivered directly from farmers!</p>
                          <button type="submit" className="btn btn-cust" onClick={()=>props.buy("products")} >Buy With us</button>

                            
                            </div>
                        </div>

                        <div className="item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/agricart-c7914.appspot.com/o/banners%2Fslider12-min.png?alt=media&token=b849e8db-b975-4781-85d8-2677dac10522" className="pull-right" alt="Chicago"/>
                            <div className="carousel-caption">
                            <h3>Vegetables</h3>
                            <p>Fresh from the farm and Hygenic!</p>
                          <button type="submit" className="btn btn-cust" onClick={()=>props.buy("products")} >Buy With us</button>
                            </div>
                        </div>
            
                    </div>

                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                     </a>
                     <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                     </a>
            </div>
   </div>
    )
}

export default Carosel
