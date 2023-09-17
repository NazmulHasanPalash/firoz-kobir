import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../Components/Hooks/useAuth';

const ReviewComments = () => {
    const history = useHistory();


    const { user } = useAuth();
    const userNameRef = useRef();
    const imgRef = useRef();
    const emailRef = useRef();
    const reviewRef = useRef();
    const ratingRef = useRef();
    const handleAddReview = e => {
        const userName = userNameRef.current.value;
        const email = emailRef.current.value;
        const image = imgRef.current.value;
        const review = reviewRef.current.value;
        const rating = ratingRef.current.value;


        const newUser = { email, userName, image, review, rating };

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    e.target.reset();
                    history.push(`/home`);

                }
            })
        e.preventDefault();

    }
    return (
        <div onSubmit={handleAddReview} className="text-center">
            <div className="card bg-dark text-white  mx-auto">
                <img src="https://wallpaperaccess.com/full/656693.jpg" className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h1>Re<span className="span-style text-primary">views</span></h1>
                </div>
            </div>

            <h2 className="text-primary">Add your review</h2>
            <form className="appointment-form w-50 mx-auto my-auto" >
                <input className="mx-auto text-white" disabled type="text" defaultValue={user.displayName} ref={userNameRef} />
                <input className="mx-auto text-white" disabled type="email" defaultValue={user.email} name="" id="" ref={emailRef} />
                <input className="mx-auto text-white" disabled type="url" defaultValue={user?.photoURL} name="" id="" ref={imgRef} />

                <div className="input-group mx-auto overflow-scroll w-50 mt-5" >
                    <textarea className="form-control" placeholder="Review" aria-label="With textarea" ref={reviewRef}></textarea>
                </div>

                <input className="mx-auto" type="number" placeholder="Rating (0-5)" ref={ratingRef} />

                <input className="mx-auto btn-primary" type="submit" value="Submit" />
            </form>



        </div>
    );
};

export default ReviewComments;