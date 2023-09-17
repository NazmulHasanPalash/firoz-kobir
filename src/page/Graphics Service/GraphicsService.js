import React from 'react';
import "./GraphicsService.css";
import GraphicsDesignContent from './GraphicsDesignContent/GraphicsDesignContent';

const GraphicsService = () => {
    return (
        <div >
            <dir className="w-100 mx-auto" id='graphics' >
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active poster-style pe-4">
                            <img src="image/banner-poster/naz-6.jpg" className="d-block w-100 mx-auto img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item pe-4">
                            <img src="image/banner-poster/naz-7.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item pe-4">
                            <img src="image/banner-poster/Default_3D_futuristic_sneakers_in_crimson_color_with_white_0_ce136cd3-fefe-4b96-a1ca-2c7647898663_1.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </dir>

            <GraphicsDesignContent></GraphicsDesignContent>

        </div>
    );
};

export default GraphicsService;