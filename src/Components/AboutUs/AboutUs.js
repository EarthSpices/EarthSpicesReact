import React from 'react'
import { useNavigate } from 'react-router-dom'

function AboutUs() {
    const navigate = useNavigate()
    return (
        <>
            <div class="sigma_subheader style-3 bg-cover bg-center dark-overlay" style={{ backgroundImage: 'url(assets/img/subheader.jpg)' }} >
                <div class="container">
                    <div class="sigma_subheader-inner">
                        <h1>About Us</h1>
                        <p>Cloves, ginger, or pepper. Herbs are derived from green leaves and often grow in temperate climates. Common herbs are mint, rosemary.</p>
                    </div>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a class="btn-link" href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </div>
            </div>
            <div class="section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-7 col-lg-6">
                            <div class="sigma_about style-9 w-100 h-100">
                                <div class="sigma_about-image-1 has-no-content">
                                    <img src="assets/img/about-us/635x450.jpg" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-6">
                            <div class="sigma_about style-9 mt-5 mt-lg-0">
                                <div class="section-title">
                                    <h3 class="title mb-5">Onion & Garlic Tableside Sprinkle</h3>
                                </div>
                                <div class="sigma_about-content">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="sigma_info style-15">
                                                <div class="sigma_info-description">
                                                    <h5>

                                                        Whole Spices

                                                    </h5>
                                                    <p>No matter the spices and herbs you are looking for be distracted.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="sigma_info style-15">
                                                <div class="sigma_info-description">
                                                    <h5>

                                                        Professional Staff

                                                    </h5>
                                                    <p>No matter the spices and herbs you are looking for be distracted.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={()=> navigate('/Contact-us')} class="sigma_btn">

                                        Get A Quote

                                        <i class="fal fa-arrow-right ml-3"></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section pt-0">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="sigma_about style-6 mb-5 mb-lg-0">
                                <div class="section-title">
                                    <h3 class="title">Why Us</h3>
                                </div>
                                <p>
                                    Step into our Great Indian  <b>Spice store and </b>. It began with the pureley functional need for a controlls environment to moderate the effects of climate. <b>Spice store </b> shelters were one means by which human beings were ableto adapt
                                </p>
                                <div class="sigma_general-list style-2 mt-4 mb-0">
                                    <ul>
                                        <li>
                                            <i class="far fa-check"></i>
                                            <span>Cardamom Pods Black</span>
                                        </li>
                                        <li>
                                            <i class="far fa-check"></i>
                                            <span>Black Pepper Shaker</span>
                                        </li>
                                        <li>
                                            <i class="far fa-check"></i>
                                            <span>Cinnamon 2% Oil Ground</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="row no-gutters">
                                <div class="col-lg-4 col-sm-3">
                                    <div class="sigma_counter text-center style-2 border-0">
                                        <i class="flaticon-spicies is_flaticon text-white"></i>
                                        <span class="justify-content-center">

                                            <b class="counter text-white" data-from="0" data-to="520">30</b>

                                            <span class="plus text-white">+</span>
                                        </span>
                                        <p class="text-white mb-0">Spices</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-3">
                                    <div class="sigma_counter text-center style-2">
                                        <i class="flaticon-team is_flaticon text-white"></i>
                                        <span class="justify-content-center">

                                            <b class="counter text-white" data-from="0" data-to="250">50</b>

                                        </span>
                                        <p class="text-white mb-0">Members</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-3">
                                    <div class="sigma_counter text-center style-2">
                                        <i class="flaticon-award is_flaticon text-white"></i>
                                        <span class="justify-content-center">

                                            <b class="counter text-white" data-from="0" data-to="520">20</b>

                                            <span class="plus text-white">+</span>
                                        </span>
                                        <p class="text-white mb-0">Awards</p>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-3 mb-0">
                                Step into our Great Indian  <b>Spice store and </b>. It began with the pureley functional need for a controlls environment to moderate the effects of climate. <b>Spice store </b> shelters were one means by which human beings were ableto adapt pureley functional need for a controlls environment to moderate the effects of climate. It is a long established fact that a reader
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="section section-padding pt-0">
                <div class="container">
                    <div class="section-title centered has-element">
                        <h3 class="title">Cumin Seed Team</h3>
                        <div class="d-flex align-items-center justify-content-center">
                            <span></span>
                            <i class="flaticon-savory"></i>
                            <span></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="sigma_team style-12">
                                <div class="sigma_team-thumb">
                                    <img src="assets/img/about-us/253x253.jpg" alt="team" />
                                </div>
                                <div class="sigma_team-body">
                                    <ul class="sigma_social-icons">
                                        <li>
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" class="trigger-team-socials">
                                                <i class="fal fa-plus"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="sigma_team-categories">
                                        <a href="#" class="sigma_team-category">Coock</a>
                                    </div>
                                    <h5>

                                        <a href="#">Joseph Thompson</a>

                                    </h5>
                                    <p>Try different spice mixes and food seasonings to add a delicious .</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="sigma_team style-12">
                                <div class="sigma_team-thumb">
                                    <img src="assets/img/about-us/253x253-0.jpg" alt="team" />
                                </div>
                                <div class="sigma_team-body">
                                    <ul class="sigma_social-icons">
                                        <li>
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" class="trigger-team-socials">
                                                <i class="fal fa-plus"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="sigma_team-categories">
                                        <a href="#" class="sigma_team-category">Waiter</a>
                                    </div>
                                    <h5>

                                        <a href="#">Maria Jhonson</a>

                                    </h5>
                                    <p>Try different spice mixes and food seasonings to add a delicious .</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="sigma_team style-12">
                                <div class="sigma_team-thumb">
                                    <img src="assets/img/about-us/253x253-1.jpg" alt="team" />
                                </div>
                                <div class="sigma_team-body">
                                    <ul class="sigma_social-icons">
                                        <li>
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" class="trigger-team-socials">
                                                <i class="fal fa-plus"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="sigma_team-categories">
                                        <a href="#" class="sigma_team-category">Female Coock</a>
                                    </div>
                                    <h5>

                                        <a href="#">Mark Otto</a>

                                    </h5>
                                    <p>Try different spice mixes and food seasonings to add a delicious .</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="sigma_team style-12">
                                <div class="sigma_team-thumb">
                                    <img src="assets/img/about-us/253x253-2.jpg" alt="team" />
                                </div>
                                <div class="sigma_team-body">
                                    <ul class="sigma_social-icons">
                                        <li>
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" class="trigger-team-socials">
                                                <i class="fal fa-plus"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="sigma_team-categories">
                                        <a href="#" class="sigma_team-category">Coock</a>
                                    </div>
                                    <h5>

                                        <a href="#">Tom Hardy</a>

                                    </h5>
                                    <p>Try different spice mixes and food seasonings to add a delicious .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
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
                            <article class="sigma_post style-5">
                                <div class="sigma_post-body">
                                    <div class="sigma_post-meta">
                                        <a href="blog-details.html">
                                            <i class="far fa-clock"></i>
                                            7 March, 2022
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i class="far fa-comment"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="far fa-share-alt"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sigma_post-content">
                                        <h5>

                                            <a href="blog-details.html">A Mixture of All Whole Spice </a>

                                        </h5>
                                        <p class="m-0">For the most part, chefs use the terms "spices and herbs" interchangeably, but there are differences.  Spices that .
                                        </p>
                                    </div>
                                </div>
                                <div class="sigma_post-thumb">
                                    <a href="blog-details.html">
                                        <img src="assets/img/about-us/350x200.jpg" alt="img" />
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <article class="sigma_post style-5">
                                <div class="sigma_post-body">
                                    <div class="sigma_post-meta">
                                        <a href="blog-details.html">
                                            <i class="far fa-clock"></i>
                                            12 August, 2022
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i class="far fa-comment"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="far fa-share-alt"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sigma_post-content">
                                        <h5>

                                            <a href="blog-details.html">Cassia Cinnamon Bark</a>

                                        </h5>
                                        <p class="m-0">For the most part, chefs use the terms "spices and herbs" interchangeably, but there are differences.  Spices that .
                                        </p>
                                    </div>
                                </div>
                                <div class="sigma_post-thumb">
                                    <a href="blog-details.html">
                                        <img src="assets/img/about-us/350x200-0.jpg" alt="img" />
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <article class="sigma_post style-5">
                                <div class="sigma_post-body">
                                    <div class="sigma_post-meta">
                                        <a href="blog-details.html">
                                            <i class="far fa-clock"></i>
                                            3 June, 2022
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i class="far fa-comment"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="far fa-share-alt"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="sigma_post-content">
                                        <h5>

                                            <a href="blog-details.html">Chinese Star Anise Whole</a>

                                        </h5>
                                        <p class="m-0">For the most part, chefs use the terms "spices and herbs" interchangeably, but there are differences.  Spices that .
                                        </p>
                                    </div>
                                </div>
                                <div class="sigma_post-thumb">
                                    <a href="blog-details.html">
                                        <img src="assets/img/about-us/350x200-1.jpg" alt="img" />
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default AboutUs