import React from 'react';
import Contacts from '../../Components/Contacts/Contacts';

const SEO = () => {
    return (
        <div>
            <div className='w-100 mx-auto'>
                <div class="card text-bg-dark w=100 mx-auto ">
                    <img src="image/banner-poster/naz-7 (1).jpg" class="card-img" alt="..." />

                </div>
                <div class="card m-3 w-75 mx-auto p-3 shadow-lg">
                    <div class="row g-0">

                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">"Professional Website SEO & SEM Services"</h5>
                                <p class="card-text">Looking to improve your website's search engine visibility? I provide top-notch SEO services to boost your online presence. With years of experience, I'll optimize your site, research keywords, build quality backlinks, and track your progress. Let's elevate your website's ranking and drive more organic traffic. Contact me to get started today!
                                    <ul>
                                        <li>Technical SEO</li>
                                        <li>On-page SEO</li>
                                        <li>Off-page SEO</li>

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
                    <img src="image/banner-poster/seo.jpg" class="card-img-top" alt="..." />
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
                                        <li>Home Page SEO Optimization-2 Page</li>
                                        <li>Keywords Research, Meta Title, Meta Description setup for 3 page according to checklist.</li>
                                        <li>3 pages optimized</li>
                                        <li>Title optimization</li>
                                        <li>H1, H2, H3 tags</li>
                                        <li>Meta description</li>
                                        <li>Image alt tags</li>
                                        <li>5 keywords researched</li>
                                        <li>Page audit</li>




                                    </td>
                                    <td>60$</td>
                                    <td>3 days</td>
                                </tr>
                                <tr>
                                    <th scope="row">Standard Package</th>
                                    <td>
                                        <li>Home Page SEO Optimization-2 Page</li>
                                        <li>Keywords Research, Meta Title, Meta Description setup for 8 page according to checklist.</li>
                                        <li>8 pages optimized</li>
                                        <li>Title optimization</li>
                                        <li>H1, H2, H3 tags</li>
                                        <li>Meta description</li>
                                        <li>Image alt tags</li>
                                        <li>15 keywords researched</li>
                                        <li>Page audit</li>

                                    </td>
                                    <td>100$</td>
                                    <td>5 days</td>
                                </tr>
                                <tr>
                                    <th scope="row">Premium Package</th>
                                    <li>Home Page SEO Optimization-2 Page</li>
                                    <li>Keywords Research, Meta Title, Meta Description setup for 15 page according to checklist.</li>
                                    <li>15 pages optimized</li>
                                    <li>Title optimization</li>
                                    <li>H1, H2, H3 tags</li>
                                    <li>Meta description</li>
                                    <li>Image alt tags</li>
                                    <li>30 keywords researched</li>
                                    <li>Page audit</li>
                                    <td>160$</td>
                                    <td>7 days</td>
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

export default SEO;