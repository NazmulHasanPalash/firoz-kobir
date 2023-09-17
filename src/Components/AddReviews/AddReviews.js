import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const AddReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])



    return (
        <div className="text-center">
            <h2 className=" mt-5">All <span className="heading-style text-primary">reviews</span> </h2>
            <div className="card mb-3 appointment-style w-50 mx-auto my-3">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}

                    ></Review>
                    )
                }
            </div>

        </div>
    );
};

export default AddReviews;