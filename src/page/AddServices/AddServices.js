import React, { useRef } from 'react';
import { useHistory } from 'react-router';

const AddServices = () => {
    const history = useHistory();



    const nameRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const durationRef = useRef();
    const descriptionRef = useRef();

    const handleAddUser = e => {

        const name = nameRef.current.value;
        const image = imgRef.current.value;
        const price = priceRef.current.value;
        const duration = durationRef.current.value;
        const description = descriptionRef.current.value;


        const newUser = { name, image, price, duration, description };

        fetch('http://localhost:5000/services', {
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
                    history.push(`/home#serviceId`);

                }
            })
        e.preventDefault();

    }
    return (
        <div onSubmit={handleAddUser} className="text-center">
            <div className="card bg-dark text-white  mx-auto text-center">
                <img src="https://teamciso.com/wp-content/uploads/banner-01-1024x341.jpg" className="card-img" alt="..." />
                <div className="card-img-overlay text-center">
                    <h1>Force <span className="span-style text-primary">Security</span></h1>
                </div>
            </div>

            <h2 className="text-primary">Please Add New Protection service</h2>
            <form className="appointment-form w-50 mx-auto my-auto" >
                <input className="mx-auto" type="text" placeholder="Destination" ref={nameRef} />
                <input className="mx-auto" type="url" placeholder="Image-URL" ref={imgRef} />
                <input className="mx-auto" type="text" placeholder="Price" ref={priceRef} />
                <input className="mx-auto" type="text" placeholder="Duration" ref={durationRef} />
                <input className="mx-auto" type="text" placeholder="Description" ref={descriptionRef} />

                <input className="mx-auto btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    )

};

export default AddServices;