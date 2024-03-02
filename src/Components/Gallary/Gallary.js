import React from 'react'

function Gallary() {
    return (
        <>
            <div class="sigma_subheader style-3 bg-cover bg-center dark-overlay"
                style={{ backgroundImage: "url(assets/img/subheader.jpg)" }} >
                <div class="container">
                    <div class="sigma_subheader-inner">
                        <h1>Gallary</h1>
                        <p>Cloves, ginger, or pepper. Herbs are derived from green leaves and often grow in temperate climates. Common herbs are mint, rosemary.</p>
                    </div>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a class="btn-link" href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Gallary</li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Gallary