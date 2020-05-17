import React from 'react'
import '../css/help.css'


const Help = () => {
    return (
        <div className="help-background">
            <div className="jumbotron help-bg">
              <div className="help-text">
               <div className="help-header">help & support</div>
               <div className="help-header-text">Let's take a step ahead and help you better.</div>
               </div>
            </div>
 <div className="container help-container">
    <div className="row">
        <div className="col-lg-4 faq-menu">
            <div className="nav nav-pills faq-nav" id="faq-tabs" role="tablist" aria-orientation="vertical">
                <a href="#tab1" className="nav-link active" data-toggle="pill" role="tab" aria-controls="tab1" aria-selected="true">
                    <i className="mdi mdi-help-circle"></i> Legal 
                </a>
                <a href="#tab2" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab2" aria-selected="false">
                    <i className="mdi mdi-account"></i> Frequently Asked Questions
                </a>
            </div>
        </div>
        <div className="col-lg-8 faq-content">
            <div className="tab-content" id="faq-tab-content">
                <div className="tab-pane show active" id="tab1" role="tabpanel" aria-labelledby="tab1">
                    <div className="accordion" id="accordion-tab-1">
                        <div className="card">
                            <div className="card-header" id="accordion-tab-1-heading-1">
                                <h5>
                                    <button className="btn btn-link faq-content-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-1" aria-expanded="false" aria-controls="accordion-tab-1-content-1">Terms of Use</button>
                                </h5>
                            </div>
                            <div className="collapse show" id="accordion-tab-1-content-1" aria-labelledby="accordion-tab-1-heading-1" data-parent="#accordion-tab-1">
                                <div className="card-body">
                                    <p>These terms of use (the " Terms of Use") govern your use of our website www.agricart.com (the " Website") and our "Agricart" application for mobile and handheld devices (the " App"). The Website and the App are jointly referred to as the " Platform". Please read these Terms of Use carefully before you use the services. If you do not agree to these Terms of Use, you may not use the services on the Platform, and we request you to uninstall the App. By installing, downloading or even merely using the Platform, you shall be contracting with Agricart and you signify your acceptance to the Terms of Use and other Agricart policies (including but not limited to the Cancellation & Refund Policy, Privacy Policy and Take Down Policy) as posted on the Platform from time to time, which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="accordion-tab-1-heading-2">
                                <h5>
                                    <button className="btn btn-link faq-content-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-2" aria-expanded="false" aria-controls="accordion-tab-1-content-2">Privacy Policy</button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-1-content-2" aria-labelledby="accordion-tab-1-heading-2" data-parent="#accordion-tab-1">
                                <div className="card-body">
                                    <p>We ( Natural Technologies Private Limited, alias "Agricart" ) are fully committed to respecting your privacy and shall ensure that your personal information is safe with us. This privacy policy sets out the information practices of www.agricart.com ("Website") including the type of information is collected, how the information is collected, how the information is used and with whom it is shared. Reference to "you" in this Privacy Policy refers to the users of this Website whether or not you access the services available on the Website or consummate a transaction on the Website. By using or accessing this Website, you agree to the terms and conditions of this Privacy Policy. You also expressly consent to our use and disclosure of your Personal Information (as defined below) in any manner as described in this Privacy Policy and further signify your agreement to this Privacy Policy and the Terms of Use (being incorporated by reference herein). If you do not agree with the terms and conditions of this Privacy Policy, please do not proceed further or use or access this Website. </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="accordion-tab-1-heading-3">
                                <h5>
                                    <button className="btn btn-link faq-content-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-3" aria-expanded="false" aria-controls="accordion-tab-1-content-3">Cancellation and Refunds</button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-1-content-3" aria-labelledby="accordion-tab-1-heading-3" data-parent="#accordion-tab-1">
                                <div className="card-body">
                                    <p>As a general rule you shall not be entitled to cancel your order once you have received confirmation of the same. If you cancel your order after it has been confirmed, Agricart shall have a right to charge you cancellation fee of a minimum INR 75 upto the order value, with a right to either not to refund the order value or recover from your subsequent order, the complete/ deficit cancellation fee, as applicable, to compensate our restaurant and delivery partners. Agricart shall also have right to charge you cancellation fee for the orders cancelled by Agricart for the reasons specified under clause 1(iii) of this cancellation and refunds policy. In case of cancellations for the reasons attributable to Agricart or its restaurant and delivery partners, Agricart shall not charge you any cancellation fee. (b) However, in the unlikely event of an item on your order being unavailable, we will contact you on the phone number provided to us at the time of placing the order and inform you of such unavailability. In such an event you will be entitled to cancel the entire order and shall be entitled to a refund in accordance with our refund policy. (c) We reserve the sole right to cancel your order in the following circumstance: (i) in the event of the designated address following outside the delivery zone offered by us; (ii) failure to contact you by phone or email at the time of confirming the order booking; (iii) failure to deliver your order due to lack of information, direction or authorization from you at the time of delivery; or (iv) unavailability of all the items ordered by you at the time of booking the order; or (v) failure due to reasons beyond our control or attributable to the Vendor. </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="accordion-tab-1-heading-4">
                                <h5>
                                    <button className="btn btn-link faq-content-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-4" aria-expanded="false" aria-controls="accordion-tab-1-content-4">Agricart On-time Delivery</button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-1-content-4" aria-labelledby="accordion-tab-1-heading-4" data-parent="#accordion-tab-1">
                                <div className="card-body">
                                    <p>These terms of use (the "Terms of Use") that govern your use of our service Agricart ON-TIME / Assured  ("ON-TIME" / "Assured") on our website www.agricart.com (the "Website") and our Agricart application for mobile and handheld devices (the "App"). The services on ON-TIME / Assured  available on our Website and the App are jointly referred to as the "On-Time Delivery". Please read these Terms of Use carefully before you use the Services. If you do not agree to these Terms of Use, you may not use the Services. By using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (incorporated by reference herein) and creates a legally binding arrangement to abide by the same. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="tab2" role="tabpanel" aria-labelledby="tab2">
                    <div className="accordion" id="accordion-tab-2">
                        <div className="card">
                            <div className="card-header" id="accordion-tab-2-heading-1">
                                <h5>
                                    <button className="btn btn-link faq-content-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-1" aria-expanded="false" aria-controls="accordion-tab-2-content-1">What is Agricart Customer Care Number</button>
                                </h5>
                            </div>
                            <div className="collapse show" id="accordion-tab-2-content-1" aria-labelledby="accordion-tab-2-heading-1" data-parent="#accordion-tab-2">
                                <div className="card-body">
                                    <p>We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@agricart.com
Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Agricart compresentative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="accordion-tab-2-heading-2">
                                <h5>
                                    <button className="btn btn-link faq-content-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-2" aria-expanded="false" aria-controls="accordion-tab-2-content-2">I Want to Sell Vegetables/Fruits From My Farm</button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-2-content-2" aria-labelledby="accordion-tab-2-heading-2" data-parent="#accordion-tab-2">
                                <div className="card-body">
                                    <p><a href="/sell">Sell with us</a> please send us mail at support@agricart.com </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="accordion-tab-2-heading-3">
                                <h5>
                                    <button className="btn btn-link faq-content-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-3" aria-expanded="false" aria-controls="accordion-tab-2-content-3">I Want to Cancel My Order</button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-2-content-3" aria-labelledby="accordion-tab-2-heading-3" data-parent="#accordion-tab-2">
                                <div className="card-body">
                                    <p>We will do our best to accommodate your request if the order is not placed to the center (Customer service number:  081-67464532). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="accordion-tab-2-heading-4">
                                <h5>
                                    <button className="btn btn-link faq-content-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-4" aria-expanded="false" aria-controls="accordion-tab-2-content-4">I want to provide feedback </button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-2-content-4" aria-labelledby="accordion-tab-2-heading-4" data-parent="#accordion-tab-2">
                                <div className="card-body">
                                    <p>please send us mail at support@agricart.com </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
    )
}

export default Help
