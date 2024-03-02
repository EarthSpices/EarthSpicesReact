import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

function ContactUs() {
    const [data,setData] = useState({
        name:'',
        email:'',
        subject:'',
        message:''
    })

    const sendData = () =>{
        axios.post('https://earthspices.onrender.com/contact-us',data).then((val)=>{
            console.log('val :>> ', val);
            toast.success(val?.data?.message)
            setData({
                name:'',
                email:'',
                subject:'',
                message:''
            })
        }).catch((err)=>{
            console.log('err :>> ', err);
            toast.error(err?.message)
        })
    }

    return (
        <>
        <div><Toaster
  position="top-center"
  reverseOrder={false}
/></div>
            <div class="sigma_subheader style-3 bg-cover bg-center dark-overlay"
                style={{ backgroundImage: "url(assets/img/subheader.jpg)" }} >
                <div class="container">
                    <div class="sigma_subheader-inner">
                        <h1>Contact Us</h1>
                        <p>Cloves, ginger, or pepper. Herbs are derived from green leaves and often grow in temperate climates. Common herbs are mint, rosemary.</p>
                    </div>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a class="btn-link" href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </div>
            </div>
            <div class="section">
                <div class="container">
                    <div class="section-title centered has-element">
                        <h3 class="title">Get in Touch</h3>
                        <div class="d-flex align-items-center justify-content-center">
                            <span></span>
                            <i class="flaticon-savory"></i>
                            <span></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="sigma_contact-wrapper">
                                <div class="sigma_contact-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081493!2d2.292292615201654!3d48.85837360866272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1571115084828!5m2!1sen!2sin" height="600" allowfullscreen="">
                                    </iframe>
                                </div>
                                {/* <div class="sigma_contact-blocks">
                                    <h5>Hospital Address</h5>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="sigma_contact-block style-3">
                                                <i class="fal fa-map-marker-alt icon"></i>
                                                <div class="contact-block-inner">
                                                    <p>2416 Mapleview</p>
                                                    <p class="mb-0">Tampa, FL 33634</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="sigma_contact-block style-3 mt-3 mt-md-0">
                                                <i class="fal fa-phone icon"></i>
                                                <div class="contact-block-inner">
                                                    <p>0029129129129</p>
                                                    <p class="mb-0">0029129129129</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="sigma_contact-block style-3 mt-3 mt-md-0">
                                                <i class="fal fa-globe icon"></i>
                                                <div class="contact-block-inner">
                                                    <p>info@example.com</p>
                                                    <p class="mb-0">www.docpoint.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div class="col-lg-4 mt-5 mt-lg-0">
                            {/* <form class="mf_form_validate ajax_submit"> */}
                                <div class="form-group">
                                    <i class="fal fa-user"></i>
                                    <input type="text" name="name" value={data?.name} placeholder="Full Name" onChange={(val)=>setData({...data,name:val?.target.value})}/>
                                </div>
                                <div class="form-group">
                                    <i class="fal fa-envelope"></i>
                                    <input type="email" name="email" value={data?.email} placeholder="Email" onChange={(val)=>setData({...data,email:val?.target.value})} />
                                </div>
                                <div class="form-group">
                                    {/* <i class="fal fa-envelope"></i> */}
                                    <input type="text" name="subject" value={data?.subject} placeholder="Subject" onChange={(val)=>setData({...data,subject:val?.target.value})}/>
                                </div>
                                <div class="form-group">
                                    <textarea name="message" rows="5" value={data?.message} placeholder="Leave Your Message" onChange={(val)=>setData({...data,message:val?.target.value})}></textarea>
                                </div>
                                <button  class="btn-block" onClick={()=> sendData()}>Send</button>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs