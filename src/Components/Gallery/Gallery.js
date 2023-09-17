import React from 'react';
import './Gallery.css'
import Mockup3D from '../Mockup3D/Mockup3D';
import ProductDesign3D from '../../page/Product-design-3D/ProductDesign3D';

const Gallery = () => {
    return (
        <div>
            <div className='w-100 mx-auto' id='gallery'>
                <h2 className=" mt-5 text-center">Our <span className="heading-style text-primary">Gallery</span> </h2>
                <Mockup3D></Mockup3D>
                <h1 className='text-center'> 3D<span className='text-primary'> Products</span></h1>
                <ProductDesign3D></ProductDesign3D>


            </div>

        </div>
    );
};

export default Gallery;