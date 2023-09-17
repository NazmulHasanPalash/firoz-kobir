import React from 'react';
import Contacts from '../../Components/Contacts/Contacts';
import ProductDesign3D from '../Product-design-3D/ProductDesign3D';

const ProductModelingRendering3D = () => {
    return (
        <div>
            <div className='w-100 mx-auto'>
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <video loop autoPlay={"autoplay"} preLoad="auto" controls type='video/mp4' className='w-100 mx-auto' src="video/covex R50 animation.mp4"></video>
                        </div>
                        <div class="carousel-item">
                            <img src="image/banner-poster/Leonardo_Diffusion_fountainpen_futuristic_mockup_0.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="image/banner-poster/Leonardo_Diffusion_3D_single_luxury_watch_design_0.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="card m-3 w-75 mx-auto p-3 shadow-lg">
                <div class="row g-0">

                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">Professional 3D Product Design and Rendering Services </h5>
                            <p class="card-text">Welcome to our website for expert 3D product design and rendering! I'll turn your ideas into photorealistic 3D models and renderings for stunning product presentations. Here's what I offer:
                                <ul>
                                    <li>Custom 3D Design: Create precise 3D models from your concepts or existing files.
                                    </li>
                                    <li>Photorealistic Renderings: Showcase your product's details with lifelike visuals.
                                    </li>
                                    <li>Collaboration: Work closely with you, offer revisions, and ensure your vision is realized.
                                    </li>
                                    <li>File Formats: Deliver files ready for websites, presentations, or 3D printing.
                                    </li>
                                    <li>Confidentiality: Handle your project with utmost professionalism and discretion.
                                    </li>
                                </ul>

                            </p>
                            <p class="card-text"><small class="text-body-secondary">Elevate your product's image and stand out in the market – contact me to discuss your project today!</small></p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img src="image/banner-poster/Leonardo_Diffusion_Imagine_a_canvas_suspended_in_the_air_fille_0.jpg" class="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
            <h1 className='text-center'> 3D<span className='text-primary'> Products</span></h1>
            <ProductDesign3D></ProductDesign3D>
            <div class="card mb-3 w-75 mx-auto">
                <img src="image/banner-poster/Leonardo_Diffusion_animation_fountainpen_0.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h1 class="card-title text-center">3D product design and rendering Pricing details</h1>
                    <table class="table w-50 mx-auto">
                        <thead>
                            <tr>
                                <th scope="col">Package</th>
                                <th scope="col">Services</th>
                                <th scope="col">Pricing</th>
                                <th scope="col">Delivery Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Basic Package</th>
                                <td>

                                    <li>3D Modeling</li>
                                    <li>One 3D Render</li>
                                    <li>Texturing & Lighting</li>


                                </td>
                                <td>40$</td>
                                <td>2 days</td>
                            </tr>
                            <tr>
                                <th scope="row">Standard Package</th>
                                <td>
                                    <li>3D Modeling</li>
                                    <li>Three 3D Render</li>
                                    <li>Texturing & Lighting</li>
                                    <li>Source File</li>

                                </td>
                                <td>80$</td>
                                <td>4 days</td>
                            </tr>
                            <tr>
                                <th scope="row">Premium Package</th>
                                <li>3D Modeling</li>
                                <li>Five 3D Render</li>
                                <li>Texturing & Lighting</li>
                                <li>Source File</li>

                                <td>130$</td>
                                <td>5 days</td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
            <Contacts></Contacts>


        </div>
    );
};

export default ProductModelingRendering3D;