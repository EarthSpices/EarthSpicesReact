import React, { useEffect } from 'react'
import img from '../../assets/img/home-1/540x400.jpg'
import { useNavigate } from 'react-router-dom'
import oilseed from "../../assets/img/home-1/oilseed.jpg"
import PowderSpices from "../../assets/img/home-1/powderSpices.jpg"
import spice from "../../assets/img/home-1/spices.webp"
import Dehydrated from "../../assets/img/home-1/dehydrated.webp"



function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when URL changes
      }, []);
    return (
        <>
            <div class="sigma_banner light-bg">
                <div class="sigma_banner-slider">
                    <div class="banner-slider-inner">
                        <div class="sigma_banner-text">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <h5>All Spice Sets are here</h5>
                                        <h1 class="title">

                                            Garlic, Black Pepper & Chile Powder

                                        </h1>
                                        <p>For the most part, chefs use the terms "spices and herbs" interchangeably, but there are differences.  Spices that .</p>
                                        <div class="banner-links">
                                            <div onClick={()=>navigate('/Products')} class="sigma_btn">Get Started</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="sigma_banner-image mt-5 mt-lg-0">
                                            <img src={img} alt="img" />
                                            <a href="https://youtu.be/wCSycljWC1w?feature=shared" class="sigma_video-btn popup-video">
                                                <i class="far fa-play"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container sigma_banner-social d-none d-sm-block">
                    <ul class="sigma_social-icons justify-content-start">
                        <li>
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="section section-padding pt-0">
                <div class="container-fluid">
                    <div class="section-title centered has-element">
                        <h3 class="title">Our Category</h3>
                        <div class="d-flex align-items-center justify-content-center">
                            <span></span>
                            <i class="flaticon-savory"></i>
                            <span></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="sigma_category">
                                <div onClick={()=> navigate("/Products?category=Spices")}>
                                    <img src={spice} style={{height:'310px'}} alt="category" />
                                </div>
                                <div class="sigma_category-content">
                                    <span>Spices</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="sigma_category">
                                <div onClick={()=> navigate("/Products?category=PowderSpices")}>
                                    <img src={PowderSpices} style={{height:'310px'}} alt="category" />
                                </div>
                                <div class="sigma_category-content">
                                    <span>Powder Spices</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="sigma_category">
                                <div onClick={()=> navigate("/Products?category=OilSeeds")}>
                                    <img src={oilseed} alt="category" style={{height:'310px'}} />
                                </div>
                                <div class="sigma_category-content">
                                    <span>Oil Seeds</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="sigma_category">
                                <div onClick={()=> navigate("/Products?category=Dehydrated")}>
                                    <img src={Dehydrated} alt="category" style={{height:'310px'}} />
                                </div>
                                <div class="sigma_category-content">
                                    <span>Dehydrated</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section section-padding pt-0">
                <div class="container">
                    <div class="section-title centered has-element">
                        <h3 class="title">Fun Facts</h3>
                        <div class="d-flex align-items-center justify-content-center">
                            <span></span>
                            <i class="flaticon-savory"></i>
                            <span></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="sigma_counter text-center text-sm-start">
                                <span class="justify-content-center justify-content-sma-start">

                                    <b class="counter" data-from="0" data-to="25">25</b>

                                    <span class="plus">+</span>
                                </span>
                                <p>Selling Per Day</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="sigma_counter text-center text-sm-start">
                                <span class="justify-content-center justify-content-sma-start">

                                    <b class="counter" data-from="0" data-to="58">2</b>

                                    <span class="plus">+</span>
                                </span>
                                <p>Years Practical Experience</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="sigma_counter text-center text-sm-start">
                                <span class="justify-content-center justify-content-sma-start">

                                    <b class="counter" data-from="0" data-to="96">96</b>

                                    <span class="plus">+</span>
                                </span>
                                <p>Awesome Team Members</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section pt-0">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="sigma_cta">
                                <span class="sigma_cta-icon-box">

                                    <i class="flaticon-saffron is_flaticon"></i>

                                </span>
                                <div class="section-title centered">
                                    <h3 class="title">You Provide <span class="primary-color">The Time,</span> We Provide The Taste.</h3>
                                    <p>For the most part, chefs use the terms "spices and herbs" interchangeably, but there are differences.  Spices that .</p>
                                </div>
                                {/* <div class="sigma_cta-buttons justify-content-center align-items-center">
                                    <button type="button" class="secondary">Download App</button>
                                    <button type="button">Subscribe</button>
                                </div> */}
                                <div class="sigma_cta-image mt-5">
                                    <img src="assets/img/home-1/920x500.jpg" class="w-100" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="section section-padding pt-0">
                <div class="container">
                    <div class="section-title centered has-element">
                        <h3 class="title">Our Blog</h3>
                        <div class="d-flex align-items-center justify-content-center">
                            <span></span>
                            <i class="flaticon-savory"></i>
                            <span></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <article class="sigma_post style-11">
                                <img src="assets/img/home-1/350x400.jpg" alt="blog" />
                                <div class="sigma_post-body">
                                    <div class="sigma_post-content">
                                        <div class="sigma_post-meta">
                                            <a href="blog-details.html" class="sigma_post-date">
                                                <i class="fal fa-calendar-alt"></i>
                                                28 January, 2022
                                            </a>
                                        </div>
                                        <h5>

                                            <a href="blog-details.html">A Mixture of All Whole Spice </a>

                                        </h5>
                                        <div class="sigma_post-meta">
                                            <ul class="mt-0">
                                                <li>
                                                    <a href="#">
                                                        <i class="fal fa-user"></i>
                                                        By Admin
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fal fa-folder-open"></i>
                                                        Whole Spices
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <article class="sigma_post style-11">
                                <img src="assets/img/home-1/350x400-0.jpg" alt="blog" />
                                <div class="sigma_post-body">
                                    <div class="sigma_post-content">
                                        <div class="sigma_post-meta">
                                            <a href="blog-details.html" class="sigma_post-date">
                                                <i class="fal fa-calendar-alt"></i>
                                                12 August, 2022
                                            </a>
                                        </div>
                                        <h5>

                                            <a href="blog-details.html">Cassia Cinnamon Bark</a>

                                        </h5>
                                        <div class="sigma_post-meta">
                                            <ul class="mt-0">
                                                <li>
                                                    <a href="#">
                                                        <i class="fal fa-user"></i>
                                                        By Admin
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fal fa-folder-open"></i>
                                                        Cassia Cinnamon
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <article class="sigma_post style-11">
                                <img src="assets/img/home-1/350x400-1.jpg" alt="blog" />
                                <div class="sigma_post-body">
                                    <div class="sigma_post-content">
                                        <div class="sigma_post-meta">
                                            <a href="blog-details.html" class="sigma_post-date">
                                                <i class="fal fa-calendar-alt"></i>
                                                28 April, 2022
                                            </a>
                                        </div>
                                        <h5>

                                            <a href="blog-details.html">Chinese Star Anise Whole</a>

                                        </h5>
                                        <div class="sigma_post-meta">
                                            <ul class="mt-0">
                                                <li>
                                                    <a href="#">
                                                        <i class="fal fa-user"></i>
                                                        By Admin
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i class="fal fa-folder-open"></i>
                                                        Star Anise
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Home