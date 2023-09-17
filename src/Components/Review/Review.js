import React from 'react';
import Rating from 'react-rating';
import './Review.css'
const Review = (props) => {
    const { email, userName, image, rating, review } = props.review;





    return (
        <div className="shadow-lg review-style m-5" id="review">

            <div className="col-md-12 body-style bg-dark text-white rounded-3 ">
                <div className="card-body text-center ">
                    <div className="review-style"><img src={image} alt="" /></div>
                    <h6 className="card-title name-style">{userName}</h6>
                    <h6 className="card-title name-style">{email}</h6>
                    <Rating className="text-warning"
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating>
                    <p>User Review:{review}</p>

                </div>
            </div>


        </div>
    );
};

export default Review;