import React from 'react';
import './GraphicsDesignPricing.css'

const GraphicsDesignPricing = () => {
    return (
        <div>
            <div class="card mb-3 w-75 mx-auto">
                <img src="image/banner-poster/graphics pricing.png" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h1 class="card-title text-center">Graphics Design Pricing details</h1>
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

                                    <li>2 Custom logo</li>
                                    <li>High Quality JPG File</li>
                                    <li>Transparent File</li>


                                </td>
                                <td>30$</td>
                                <td>2 days</td>
                            </tr>
                            <tr>
                                <th scope="row">Standard Package</th>
                                <td>
                                    <li>3 Custom logo</li>
                                    <li>High Quality JPG File</li>
                                    <li>Transparent File</li>
                                    <li>Vector file</li>
                                    <li>Source File</li>
                                    <li>Printible File.</li>
                                </td>
                                <td>70$</td>
                                <td>4 days</td>
                            </tr>
                            <tr>
                                <th scope="row">Premium Package</th>
                                <td>
                                    <li>5 Custom logo</li>
                                    <li>High Quality JPG File</li>
                                    <li>Transparent File</li>
                                    <li>Vector file</li>
                                    <li>Source File</li>
                                    <li>Printible File</li>
                                    <li>3D Mockup</li>
                                    <li>Stationary Design</li>
                                    <li>Social Media Kit for(Facebook, Instagram and LinkedIn)</li>
                                </td>
                                <td>130$</td>
                                <td>5 days</td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    );
};

export default GraphicsDesignPricing;