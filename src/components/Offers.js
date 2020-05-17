import React from 'react'
import '../css/offers.css'
import Offerscard from './Offerscard'
const Offers = () => {
    return (
        <div className="offers">
            <div className="jumbotron offers-bg">
                <div className="offers-heading ">
                    <div className="offers-h">Offers For you 
                        <img className="offers-img pull-right" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham" alt="offers"/>
                    </div>
                    <div className="offers-text">Explore top deals and offers exclusively for you!</div>
                </div>
            </div>
             <div className="container-fluid offers-container">
				<ul className="nav nav-tabs offers-tab" id="myTab" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" id="payment-offers" data-toggle="tab" href="#payment-offers" role="tab">Payment offers/Coupons</a>
					</li>
                    <li className="nav-item">
						<a className="nav-link" id="location-offers" data-toggle="tab" href="#location-offers" role="tab">Location Offers</a>
					</li>
				</ul>
        	 </div> 

                {/* <div class="tab-content">
                    <div id="home" class="tab-pane fade in active">
                        <h3>HOME</h3>
                        <p>Some content.</p>
                    </div>
                    <div id="menu1" class="tab-pane fade">
                        <h3>Menu 1</h3>
                        <p>Some content in menu 1.</p>                  //Looation offers tab move code
                    </div>
                    <div id="menu2" class="tab-pane fade">
                        <h3>Menu 2</h3>
                        <p>Some content in menu 2.</p>
                    </div>
                    </div> */}
           
            {/*  //need to fetch from an api (as of now default one is given */}
            <Offerscard/>
         </div>

    )
}

export default Offers
