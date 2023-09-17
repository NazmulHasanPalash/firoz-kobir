import React from 'react';
import './GraphicsDesignContent.css'
import TypesOfGraphics from '../TypeOfGraphics/TypesOfGraphics';
import GraphicsDesignPricing from '../GraphicsDesignPricing/GraphicsDesignPricing';
import Contacts from '../../../Components/Contacts/Contacts';

const GraphicsDesignContent = () => {
    return (
        <div>
            <div className="container text-left shadow-lg">
                <div className="card mb-3 w-100 mx-auto p-3">
                    <div className="row g-0 p-3 align-items-center">

                        <div className="col-md-6">
                            <div className="card-body">
                                <h1 className="card-title">Graphics Design</h1>
                                <p className="card-text">Welcome to a Visual Journey: Unveiling the Power of Design on Our Website!
                                    At the heart of our digital realm, we're seeking a passionate and creative Graphics Designer who understands the magic that lies within captivating visuals. As the virtuoso of our visual storytelling, you'll fuse imagination with innovation, breathing life into our website's content through your artistic prowess.
                                </p>
                                <p className="card-text">We're not just a agency; we're a canvas where ideas come to life. Our website isn't merely a collection of pages; it's a dynamic stage where words and images dance together, telling stories that resonate. If you're a design trailblazer with a penchant for weaving narratives through visuals, this is your stage to shine.</p>
                                <p className="card-text">Prepare to embark on a journey where pixels become poetry and graphics, the chords of symphony. As our Graphics Designer for Website Content, your mission is clear: transform the ordinary into the extraordinary. You'll be the alchemist of aesthetics, transmuting concepts into eye-catching graphics that transcend the screen.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="image/card-image/graphic.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>



            </div>
            <TypesOfGraphics></TypesOfGraphics>
            <GraphicsDesignPricing></GraphicsDesignPricing>
            <div className="card mb-3 w-75 mx-auto">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src="image/mobile site.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h1 className="card-title text-center">FAQ</h1>
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            What services do you offer as a graphics design company?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">We offer a wide range of design services, including logo design, branding, web design, print materials, packaging design, and more. Our team is skilled in creating visually appealing and effective design solutions for various needs.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            How experienced is your design team?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Our design team consists of highly experienced professionals with diverse backgrounds in graphic design, illustration, and visual communication. Each designer brings a unique perspective and expertise to the table.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            What is the typical process for working with your design team?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Our process begins with a detailed consultation to understand your design goals and requirements. We then create initial design concepts for your review. Based on your feedback, we refine and revise the chosen concept until we achieve the perfect design that aligns with your vision.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            How do I request a quote for a design project?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">You can request a quote by visiting our "Request a Quote" page and providing information about your project, such as the type of design you need, your preferences, and any specific details. Our team will promptly provide you with a customized quote based on your requirements.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Can you accommodate rush orders or tight deadlines?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Yes, we understand that sometimes projects require urgent attention. We offer rush order options to meet tight deadlines. Please note that there might be an additional fee for expedited services.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            What is your design revision policy?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">We offer a set number of revisions included in each package to ensure your satisfaction. Additional revisions can be accommodated for a nominal fee. We value your feedback and work closely with you to make sure the design meets your expectations.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            What is the expected timeline for design project completion?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Project timelines vary depending on the complexity of the project. We provide estimated timelines during the initial consultation and work diligently to meet agreed-upon deadlines.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            What are your accepted payment methods?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">We accept payments through credit cards, PayPal, and bank transfers. Payment details will be provided upon acceptance of the quote.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Do you offer design packages for startups or small businesses?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Yes, we offer tailored design packages designed specifically for startups and small businesses. These packages are budget-friendly and cater to the specific needs of smaller enterprises.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Can I see examples of your previous design work?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Certainly! Please visit our portfolio page to explore a diverse collection of our past design projects across different industries.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Do you provide design consultations for clients who are unsure about their project needs?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Absolutely! We offer design consultations to help you define your project's scope and requirements. Our team will guide you through the process and suggest suitable design solutions.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card mb-3 w-50 mx-auto shadow-lg p-3">
                    <img src="image/banner-poster/firoz-banner.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">Firoz Kobir</h3>
                        <h5 className="card-title">Graphics designer</h5>
                        <h6 className="card-text">Working experience</h6>
                        <ul>
                            <li>Mirpur Ceramics Works Ltd, Bangladesh.</li>
                            <li>Modhumoti Ceramics Industries Ltd, Bangladesh</li>
                            <li>Bangladesh Institute of Glass & Ceramics, Bangladesh</li>
                            <li>Deng Kai Sdn.Bhd (Malaysia) (June – August 2022)</li>
                        </ul>
                        <h6>Freelancing</h6>
                        <ul>
                            <li><a href="https://www.fiverr.com/s/lz2dgb" target="_blank" rel="noopener noreferrer">Fiverr Profile: 3D Graphics</a></li>
                            <li><a href="https://www.fiverr.com/s/Bagdld" target="_blank" rel="noopener noreferrer">Fiverr Profile: Logo desgin</a></li>
                        </ul>

                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>

            </div>
            <Contacts></Contacts>
        </div>


    );
};

export default GraphicsDesignContent;