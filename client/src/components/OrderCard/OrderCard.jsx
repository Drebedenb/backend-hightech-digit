import React from 'react';

const OrderCard = ({order}) => {
    return (
        <div className="card container text-bg-dark border-white">
            <div className="card-body">
                <h5 className="card-title">{order.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{order.price}$</h6>
                <p className="card-text">Address: {order.address}</p>
                <p className="card-text">Readiness: {order.readiness}</p>
                <p className="card-text">Date of order: {new Date(order.date).toLocaleDateString()}</p>
                <p className="card-text">Your addition to order: {order.addition}</p>
            </div>
        </div>
    );
};

export default OrderCard;