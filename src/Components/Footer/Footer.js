import React from 'react'
import img1 from "../../assets/img/logo.jpg"
import img2 from "../../assets/img/home-1/80x80-0.jpg"
import img3 from "../../assets/img/home-1/80x80-1.jpg"
import img4 from "../../assets/img/home-1/300x250.png"


function Footer() {
    return (
        <footer class="sigma_footer style-5 sigma_footer-dark pb-0">
            <div class="sigma_footer-middle">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="sigma_footer-widget">
                                <div class="row">
                                <div class="sigma_footer-logo mb-4 col-sm-4" style={{ maxWidth: '100px' }}>
                                    <img src={img1} alt="logo" />
                                </div>
                                    <div class="col-sm-4">
                                        <p class="mb-0">No matter the spices and herbs you are looking for be distracted by the readable.</p>
                                    </div>
                                    <div className='col-sm-4'>
                                    <ul class="sigma_social-icons mt-4 justify-content-start">
                                    <li>
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                    </li>
                                    {/* <li>
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fab fa-google"></i></a>
                                    </li> */}
                                </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        {/* <div class="col-lg-3 col-sm-3">
                            <div class="sigma_footer-widget">
                                <h5 class="widget-title">Solutions</h5>
                                <ul class="sigma_footer-links">
                                    <li>
                                        <a href="shop.html">Ecommerce</a>
                                    </li>
                                    <li>
                                        <a href="login.html">Account</a>
                                    </li>
                                    <li>
                                        <a href="wishlist.html">Wishist</a>
                                    </li>
                                    <li>
                                        <a href="signup.html">Register</a>
                                    </li>
                                    <li>
                                        <a href="cart.html">Cart</a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        
                        <div class="col-12">
                            <div class="sigma_info-wrapper style-18">
                                <div class="sigma_info style-18">
                                    <div class="sigma_info-title">
                                        <span class="sigma_info-icon">

                                            <i class="fal fa-map-marker-alt"></i>

                                        </span>
                                    </div>
                                    <div class="sigma_info-description">
                                        <p>2416 Mapleview Drive</p>
                                        <p>Tampa, FL 33634</p>
                                    </div>
                                </div>
                                <div class="sigma_info style-18" style={{alignItems:'center'}}> 
                                    <div class="sigma_info-title">
                                        <span class="sigma_info-icon">

                                            <i class="fal fa-envelope-open-text"></i>

                                        </span>
                                    </div>
                                    <div class="sigma_info-description">
                                        <p>Email : earthspice9@gmail.com</p>
                                        {/* <p>Inquiries : earthspice9@gmail.com</p> */}
                                    </div>
                                </div>
                                <div class="sigma_info style-18" style={{alignItems:'center'}}>
                                    <div class="sigma_info-title">
                                        <span class="sigma_info-icon">

                                            <i class="fal fa-phone"></i>

                                        </span>
                                    </div>
                                    <div class="sigma_info-description">
                                        {/* <p>Telephone : +91 9879522534</p> */}
                                        <p>Mobile : +91 9898001852</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="sigma_footer-bottom d-block d-sm-flex align-items-center justify-content-between">
                    <div class="sigma_footer-copyright mt-0 mb-3 mb-sm-0">
                        <p class="mb-0">©  Earth Spice - 
                            <a href="#"> &nbsp;2024</a>
                        </p>
                    </div>
                    {/* <ul class="sigma_footer-links">
                        <li>
                            <a href="login.html">Login</a>
                        </li>
                        <li>
                            <a href="signup.html">Signup</a>
                        </li>
                        <li>
                            <a href="about-us.html">Privacy</a>
                        </li>
                        <li>
                            <a href="contact-us.html">Help</a>
                        </li>
                    </ul> */}
                </div>
            </div>
            <div class="sigma_footer-image d-none d-xl-block">
                <img src={img4} alt="img" />
            </div>
        </footer>
    )
}

export default Footer