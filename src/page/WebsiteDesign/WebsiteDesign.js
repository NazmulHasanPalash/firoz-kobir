import React from 'react';
import Contacts from '../../Components/Contacts/Contacts';

const WebsiteDesign = () => {
    return (
        <div>
            <div className='w-100 mx-auto'>
                <div className='w-100 mx-auto'>
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="image/website design/project-01.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="image/website design/project-02.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="image/website design/project-03.png" class="d-block w-100" alt="..." />
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
                                <h5 class="card-title">"Professional Website Design Services"</h5>
                                <p class="card-text">Elevate your online presence with a custom-designed website. I specialize in creating visually stunning, user-friendly websites that are fully responsive across all devices. Whether you need a new website, an e-commerce platform, or a website redesign, I've got you covered. Let's collaborate to make your online vision a reality. Contact me today to get started. What we Offer:
                                    <ul>
                                        <li>Custom Design</li>
                                        <li>Responsive Design</li>
                                        <li>User Experience (UX) Optimization</li>
                                        <li>E-commerce Solutions</li>
                                        <li>Content Management</li>
                                        <li>SEO Integration</li>
                                    </ul>

                                </p>
                                <p class="card-text"><small class="text-body-secondary">Let's collaborate to make your website stand out! Contact me today to discuss your project.




                                </small></p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <img src="image/website design/all-devices-black (1).png" class="img-fluid rounded-start" alt="..." />
                            <h5 className='text-center m-5'><a target='blank' href="https://www.nazmulhasanpalash.com/">Naazmul Hasan Palash Portfolio</a></h5>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 w-75 mx-auto">
                    <img src="image/website design/Leonardo_Diffusion_responsive_website_design_laptop_mobile_and_0.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h1 class="card-title text-center">Website Design & Hosting Pricing details</h1>
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
                                        <li>One page responsive website with slider</li>
                                        <li>4 Sections</li>
                                        <li>Contact form</li>
                                        <li>Map</li>
                                        <li>Social Media integration</li>
                                        <li>Functional website</li>
                                        <li>1 page</li>
                                        <li>Content upload</li>




                                    </td>
                                    <td>150$</td>
                                    <td>5 days</td>
                                </tr>
                                <tr>
                                    <th scope="row">Standard Package</th>
                                    <td>
                                        <li>One page responsive website with slider</li>
                                        <li>4 Sections</li>
                                        <li>Contact form</li>
                                        <li>Map</li>
                                        <li>Social Media integration</li>
                                        <li> 4 informational pages with security</li>
                                        <li>Functional website</li>
                                        <li>4 pages</li>
                                        <li>Content upload</li>

                                    </td>
                                    <td>375$</td>
                                    <td>7 days</td>
                                </tr>
                                <tr>
                                    <th scope="row">Premium Package</th>
                                    <li>One page responsive website with slider</li>
                                    <li>4 Sections</li>
                                    <li>Contact form</li>
                                    <li>Map</li>
                                    <li>Social Media integration</li>
                                    <li> 4 informational pages with security</li>
                                    <li>E-commerce</li>
                                    <li>Payment gateway integration</li>
                                    <li>SEO optimized code Custom functionality</li>
                                    <li>Functional website</li>
                                    <li>8 pages</li>
                                    <li>Content upload</li>
                                    <li>E-commerce functionality</li>
                                    <li>8 products</li>
                                    <td>650$</td>
                                    <td>14 days</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
                <Contacts></Contacts>
            </div>

        </div>
    );
};

export default WebsiteDesign;