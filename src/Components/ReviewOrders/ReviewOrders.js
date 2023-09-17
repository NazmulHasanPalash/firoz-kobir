import React from 'react';

const ReviewOrders = (props) => {
    const { name, price, _id, userName, image, email, mobileNumber, address } = props.order;

    const order = props.order;




    return (
        <div>
            <div className="row g-0 m-3">
                <div className="col-md-7 order-style  ">
                    <img src={image} className="img-fluid rounded-start w-100" alt="..." />
                </div>
                <div className="col-md-5 body-style">
                    <div className="card-body text-center  ">

                        <h3 className="card-title name-style">Security:{name}</h3>
                        <h5 className="card-title name-style">Cost:{price}</h5>
                        <p className="card-text title-style">Client: {userName}</p>
                        <p className="card-text title-style">Email{email}</p>
                        <p className="card-text title-style">Contact:{mobileNumber}</p>
                        <p className="card-text title-style">Address:{address}</p>

                        <button className="btn btn-danger m-2" onClick={() => props.handleDeleteOrder(order._id)}>Delete</button>



                    </div>
                </div>

            </div>

        </div>
    );
};

export default ReviewOrders;