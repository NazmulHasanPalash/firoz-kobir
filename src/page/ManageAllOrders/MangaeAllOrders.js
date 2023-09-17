import React, { useEffect, useState } from 'react';
import ReviewOrders from '../../Components/ReviewOrders/ReviewOrders';

const MangaeAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/myOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])
    // DELETE AN USER
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/myOrders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = allOrders.filter(order => order._id !== id);
                        setAllOrders(remainingOrders);
                    }
                });
        }
    }


    return (
        <div className="text-center">
            <h2 className=" mt-5">All <span className="heading-style text-primary">Orders</span> </h2>
            <div className="card mb-3 appointment-style w-75 mx-auto my-3">
                {
                    allOrders.map(order => <ReviewOrders
                        key={order._id}
                        order={order}
                        handleDeleteOrder={handleDeleteOrder}

                    ></ReviewOrders>
                    )
                }
            </div>

        </div>
    );
};

export default MangaeAllOrders;