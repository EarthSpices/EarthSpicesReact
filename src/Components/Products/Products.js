import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function Products() {
    const location = useLocation();
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category')
    const [data, setData] = useState([])
    const [showModal, setShowModal] = useState(false); 
    const [subData, setSubData] = useState(false); 
    const [category, setCategory] = useState(categoryParam || '');

  

    
    const getData =() =>{
        axios.get(`http://localhost:8000/viewall?category=${category}`).then((val)=>{
            console.log('val :>> ', val?.data?.spices);
            setData(val?.data?.spices)
        }).catch((err)=>{
            console.log('err :>> ', err);
        })
    }

    const openModal = () => {
        setShowModal(true);
    };

    // Function to handle closing modal
    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(()=>{
        getData()
    },[category,location.pathname])
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when URL changes
      }, []);
    return (
        <>
            <div class="sigma_subheader style-3 bg-cover bg-center dark-overlay" style={{ backgroundImage: "url(assets/img/subheader.jpg)" }}>
                <div class="container">
                    <div class="sigma_subheader-inner">
                        <h1>Shop</h1>
                        <p>Cloves, ginger, or pepper. Herbs are derived from green leaves and often grow in temperate climates. Common herbs are mint, rosemary.</p>
                    </div>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a class="btn-link" href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Products</li>
                    </ol>
                </div>
            </div>
            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="sigma_shop-global">
                                <p>Showing <b>20</b> of <b>320</b> products</p>
                                <a href="#" class="custom-secondary fw-600">Filter <i class="custom-primary far fa-filter ml-2"></i> </a>
                            </div>
                            <div class="row masonry">
                                {data?.map((val)=>{
                                    return(
<div class="col-md-4 col-sm-6 masonry-item">
                                    <div class="sigma_product style-5">
                                        <div class="sigma_product-thumb">
                                            <img loading="lazy" src={val?.imageUrl} alt="product" />
                                            <a href="#" data-toggle="modal" data-target="#quickViewModal" onClick={()=>{openModal(true);setSubData(val)}}>Quick View</a>
                                        </div>
                                        <div class="sigma_product-body">
                                            <h5 class="sigma_product-title"> <a href="product-details.html">{val?.spicesName} </a> </h5>
                                            {/* <div class="sigma_product-price">
                                                <span>29$</span>
                                                <span>49$</span>
                                            </div> */}
                                            <div class="sigma_rating">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <p>{val?.status ? "In Stock" : "Out of Stock"}</p>
                                        </div>
                                    </div>
                                </div>
                                    )
                                })}
                                
                                
                            </div>
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#"><i class="fal fa-chevron-left"></i></a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">1</a>
                                </li>
                                <li class="page-item active">
                                    <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">3</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#"><i class="fal fa-chevron-right"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-4">
                            <div class="sidebar">
                                <div class="widget widget-search">
                                    <h5 class="widget-title">Search</h5>
                                    <div class="input-group">
                                        <input type="text" name="search" placeholder="Search" />
                                        <div class="input-group-append">
                                            <button type="button">
                                                <i class="fal fa-search mr-0"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="widget">
                                    <h5 class="widget-title"> Price </h5>
                                    <input type="text" class="js-range-slider" name="freshness_range" value="" data-type="double" data-min="0" data-max="500" data-from="10" data-to="100" data-grid="true" data-postfix=" $" />
                                </div> */}
                                <div class="widget widget-categories">
                                    <h5 class="widget-title">Cumin Seed</h5>
                                    <ul>
                                        <li>
                                            <a href="#">

                                                Garlic & Onion

                                                <span>12</span>

                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">

                                                Salt & Pepper

                                                <span>9</span>

                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">

                                                News

                                                <span>7</span>

                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">

                                                Chiles & Paprika

                                                <span>5</span>

                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">

                                                BBQ & Grilling

                                                <span>3</span>

                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div class="widget widget-sigma-recent-posts">
                                    <h5 class="widget-title">Most Commented</h5>
                                    <div class="sigma_recent-post">
                                        <a href="blog-details.html" class="recent-post-image">
                                            <img loading="lazy" src="assets/img/shop/80x80.jpg" alt="img" />
                                            <span>12</span>
                                        </a>
                                        <div class="recent-post-descr">
                                            <h6>

                                                <a href="blog-details.html">Red Rocks Hickory Smoke Seasoning</a>

                                            </h6>
                                            <a href="blog-details.html" class="date">
                                                <i class="far fa-clock mr-2"></i>
                                                June 4, 2022
                                            </a>
                                        </div>
                                    </div>
                                    <div class="sigma_recent-post">
                                        <a href="blog-details.html" class="recent-post-image">
                                            <img loading="lazy" src="assets/img/shop/80x80-0.jpg" alt="img" />
                                            <span>6</span>
                                        </a>
                                        <div class="recent-post-descr">
                                            <h6>

                                                <a href="blog-details.html">Onion & Garlic Tableside Sprinkle</a>

                                            </h6>
                                            <a href="blog-details.html" class="date">
                                                <i class="far fa-clock mr-2"></i>
                                                June 4, 2022
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget widget-newsletter">
                                    <h5 class="widget-title">Join Newsletter</h5>
                                    <form method="post">
                                        <input type="email" name="email" placeholder="Enter your email" />
                                        <button type="button" class="btn-block mt-4">Subscribe</button>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="modal" id="quickViewModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
          {/* <div class="sigma_close" data-dismiss="modal">
            <span></span>
            <span></span>
          </div> */}
          <div class="row sigma_product-single">
            <div class="col-md-6">
              <div class="sigma_product-single-thumb">
                <img src={subData?.imageUrl} loading="lazy" alt="product"/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="sigma_product-single-content">
                <div class="sigma_rating-wrapper">
                  <div class="sigma_rating">
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <hr/>
                <p class="sigma_product-excerpt">
                  {/* {subData?.description} */}
                  While social media offers numerous benefits, its detrimental effects on mental health cannot be overlooked. By raising awareness, promoting digital literacy, and implementing responsible usage habits, we can mitigate these negative impacts and harness the positive potential of social media for mental well-being.
                  While social media offers numerous benefits, its detrimental effects on mental health cannot be overlooked. By raising awareness, promoting digital literacy, and implementing responsible usage habits, we can mitigate these negative impacts and harness the positive potential of social media for mental well-being.
                </p>
                <div class="sigma_product-meta">
                  <p><strong>Product :<span>{subData?.spicesName}</span></strong>
                  </p>
                  <p><strong>Availablity: <span>{subData?.status ? "In Stock" : "Out of Stock"}</span></strong>
                  </p>
                  <p><strong>Category: <span>{subData?.category}</span></strong>
                  </p>
                </div>
                <hr/>
                {/* <form class="sigma_product-atc-form">
                  <div class="sigma_product-buttons d-block">
                    <a href="product-details.html" class="ml-0 btn-block sigma_btn">Buy Now <i class="far fa-shopping-basket"></i> </a>
                    <a href="product-details.html" class="ml-0 btn-block sigma_btn light">Wishlist <i class="far fa-heart"></i> </a>
                    <a href="product-details.html" class="ml-0 btn-block sigma_btn light">Compare <i class="far fa-compress"></i> </a>
                  </div>
                </form> */}
                <div class="sigma_post-single-meta">
                  <div class="sigma_post-single-meta-item sigma_post-share">
                    <h5>Share</h5>
                    <ul class="sigma_sm">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Products