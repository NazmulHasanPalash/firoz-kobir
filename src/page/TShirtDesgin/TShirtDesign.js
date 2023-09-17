import React from 'react';
import Contacts from '../../Components/Contacts/Contacts';

const TShirtDesign = () => {
    return (
        <div>
            <div>
                <div className='w-100 mx-auto'>
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="image/t-shirt design/7.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="image/t-shirt design/Leonardo_Diffusion_colourful_tshirt_design_black_back_ground_0.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="image/t-shirt design/8.jpg" class="d-block w-100" alt="..." />
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
                                <h5 class="card-title">Professional Custom T-Shirt Design</h5>
                                <p class="card-text">Welcome to our website for expert 3D product design and rendering! I'll turn your ideas into photorealistic 3D models and renderings for stunning product presentations. Here's what I offer:
                                    <ul>
                                        <li>Custom Designs: Personalized t-shirt designs aligned with your vision.
                                        </li>
                                        <li>Versatile Styles: From modern to playful, I can adapt to any design style.
                                        </li>
                                        <li>High-Quality Graphics: Print-ready, scalable designs.
                                        </li>
                                        <li>Color & Mockups: Visuals for different t-shirt colors and styles.
                                        </li>
                                        <li>Revisions: Multiple revisions for your satisfaction.
                                        </li>
                                        <li>File Formats: Delivery in various formats.
                                        </li>
                                        <li>Prompt Service: Meet your deadlines.
                                        </li>
                                        <li>Commercial & Personal Use: Ideal for businesses, events, or personal wear.
                                        </li>
                                    </ul>

                                </p>
                                <p class="card-text"><small class="text-body-secondary">Let's collaborate to make your t-shirts stand out! Contact me today to discuss your project.




                                </small></p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <img src="image/banner-poster/Absolute_Reality_v16_uniq_one_tshirt_design_only_table_displa_0.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
                <div class="card mb-3 w-75 mx-auto">
                    <img src="image/t-shirt design/3.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h1 class="card-title text-center">T-shirt Pricing details</h1>
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

                                        <li>3 T-Shirt Design</li>
                                        <li>Unlimited Revision</li>
                                        <li>Free Mockup</li>


                                    </td>
                                    <td>30$</td>
                                    <td>3 days</td>
                                </tr>
                                <tr>
                                    <th scope="row">Standard Package</th>
                                    <td>
                                        <li>7 T-Shirt Design</li>
                                        <li>Source File</li>
                                        <li>Unlimited Revision</li>
                                        <li>Free Mockup</li>
                                        <li>PNG</li>
                                        <li>Transparent</li>

                                    </td>
                                    <td>60$</td>
                                    <td>5 days</td>
                                </tr>
                                <tr>
                                    <th scope="row">Premium Package</th>
                                    <li>10 T-Shirt Design</li>
                                    <li>Source File</li>
                                    <li>Unlimited Revision</li>
                                    <li>Free Mockup</li>
                                    <li>PNG</li>
                                    <li>Transparent</li>
                                    <li>Printable file</li>

                                    <td>120$</td>
                                    <td>10 days</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>


            </div>
            <Contacts></Contacts>

        </div>
    );
};

export default TShirtDesign;