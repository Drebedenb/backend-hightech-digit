import React from 'react';
import {NavLink} from "react-router-dom";

const OrdersList = ({orders}) => {
    if (!orders.length) {
        return (
            <div>
                Нет заказов!
            </div>
        )
    }
    return (
        <div className="container">
            {orders.map(order =>
                <div className="card border-white text-bg-dark mb-4" key={order._id}>
                    <div className="card-header border-white">
                        {order.name}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{order.address}</h5>
                        <p className="card-text">{new Date(order.date).toString().split(" ").slice(1,5).join(" ")}</p>
                        <NavLink to={`/order/${order._id}`} className="btn btn-outline-light me-2">To order</NavLink>
                    </div>
                </div>
               )}
        </div>
    );
};

export default OrdersList;