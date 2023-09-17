import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import Banner from '../Banner/Banner';
import './SecondBanner.css';


const SecondBanner = () => {

    const [count, setCount] = useState(1);

    useEffect(() => {
        // document.title = `You clicked ${count} times`;
        console.log("Count: " + count);
        setCount(1);
    }, [count]);
    return (

        <div className="second-banner-style">


            <div class="container w-100 mx-auto  " id="particles-js">

                <div class="row  align-items-center">
                    <div class=" col-lg-6 col-sm-12 col-md-6">
                        <div className="banner-text-style">
                            <div className="m-5 body-dtyle">
                                <h5 className="card-title tag-style">Crafting SEO-Optimized 3D Designs for Digital Dominance</h5>
                                <h1 className="card-title">SEO & 3D Graphics design </h1>
                                <h3>working for
                                    {count ? (
                                        <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                                            <span className="type-style">SEO & SEM marketing</span>
                                            <Typist.Backspace count={50} delay={800} />
                                            <span className="type-style">3D Graphics design & Modeling</span>
                                            <Typist.Backspace count={50} delay={800} />
                                            <span className="type-style">3D product Design & Rendering</span>
                                            <Typist.Backspace count={50} delay={800} />
                                            <span className="type-style"> Logo Design</span>
                                        </Typist>
                                    ) : (
                                        ""
                                    )}
                                </h3>
                                <button className="btn  btn-style my-3  contact-style"><a className="mx-5" href="#contact">Contact
                                </a></button>

                            </div>


                        </div>
                    </div>
                    <div class=" col-lg-6 col-sm-12 col-md-6">
                        <Banner></Banner>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SecondBanner;