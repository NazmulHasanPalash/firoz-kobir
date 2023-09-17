import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-style">
            <div id="carouselExampleFade" className="carousel slide carousel-fade m-5   w-100 mx-auto " data-bs-ride="carousel ">
                <div className="carousel-inner c-image-style ">
                    <div className="carousel-item active">
                        <img src="image/banner-poster/Leonardo_Diffusion_single_beauty_product_Packaging_Design_wi_1.jpg" className="d-block w-100  display-style" alt="..." />
                    </div>
                    <div className="carousel-item  ">
                        <img src="image/banner-poster/Absolute_Reality_v16_uniq_one_tshirt_design_only_table_displa_0.jpg" className="d-block w-100 display-style" alt="..." />
                    </div>
                    <div className="carousel-item ">
                        <img src="image/banner-poster/Default_mobile_case_futuristic_3D_design_in_crimson_and_black_0_18dce280-52b3-4be2-9ec0-88ae53ac45ea_1.jpg" className="d-block w-100 display-style" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    );
};

export default Banner;