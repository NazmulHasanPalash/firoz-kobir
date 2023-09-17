import React from 'react';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
// import useAuth from '../../Components/Hooks/useAuth';

const Header = () => {
    // const { user, logOut } = useAuth();
    // console.log(user);

    return (
        <div>
            <div className="w-100 mx-auto">

                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid ">
                            <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                                <a className="navbar-brand" href="/home"><span className="span-style text-primary"> <img className='second-icon' src="image/Icon/3.png" alt="" /> <img className='icon-style' src="image/Icon/FK-icon.png" alt="" /></span></a>
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 link-style d-flex align-item-center">
                                    <li className="nav-item">
                                        <HashLink className="nav-link active" aria-current="page" to="/home#home">Home</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link active" to="/home#gallery">Gallery</HashLink>
                                    </li>

                                    <li className="nav-item">
                                        <HashLink className="nav-link active" to="/about">About</HashLink>
                                    </li>


                                    <li>
                                        <div className="btn-group mx-5">
                                            <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                Services
                                            </button>
                                            <ul className="dropdown-menu text-color">
                                                <li className="nav-item">
                                                    <HashLink className="nav-link active " to="/graphics">Graphics service</HashLink>
                                                </li>
                                                <li className="nav-item">
                                                    <HashLink className="nav-link active " to="/seo">SEO service</HashLink>
                                                </li>

                                                <li className="nav-item">
                                                    <HashLink className="nav-link active " to="/rendering">3D Product Modeling & Rendering</HashLink>
                                                </li>
                                                <li className="nav-item">
                                                    <HashLink className="nav-link active " to="/video">Video editing</HashLink>
                                                </li>
                                                <li className="nav-item">
                                                    <HashLink className="nav-link active " to="/shirt">T-shirt design</HashLink>
                                                </li>
                                                <li className="nav-item">
                                                    <HashLink className="nav-link active " to="/website">Website Design</HashLink>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>








                                    {/* {user?.email ? <ul className="navbar-nav ">

                                        <li className="nav-item">
                                            <HashLink className="nav-link active" to="/myOrders">my Order</HashLink>
                                        </li>
                                        <li className="nav-item">
                                            <HashLink className="nav-link active" to="/manageOrders">Manage all Order</HashLink>
                                        </li>
                                        <li className="nav-item">
                                            <HashLink className="nav-link active" to="/reviews">Add Reviews</HashLink>
                                        </li>
                                        <li className="nav-item">
                                            <HashLink className="nav-link active" to="/addServices">Add A new Service</HashLink>
                                        </li>
                                        <li className="nav-item ">
                                            <button onClick={logOut} type="button" className="btn btn-light mx-5">Log out</button>

                                        </li>
                                    </ul> :
                                        <li className="nav-item">
                                            <HashLink className="nav-link active" aria-current="page" to="/login">Login</HashLink>

                                        </li>}
                                    <li className="nav-item ms-5">
                                        <a className="nav-link" href="#login"> Sign in as {user?.displayName}</a>
                                    </li>
                                    <li className="nav-item nav-img">
                                        <a className="nav-link photo-style" href="#login"> <img src={user?.photoURL} alt="" /></a>
                                    </li> */}

                                </ul>

                            </div>
                        </div>
                    </nav>

                </div>



            </div >
        </div >
    );
};

export default Header;