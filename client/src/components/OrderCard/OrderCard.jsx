import React from 'react';

const OrderCard = ({order}) => {
    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="true" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <h5 className="card-title">Your order</h5>
                <p className="card-text">{order.name}</p>
                <p className="card-text">{order.price}</p>
                <p className="card-text">{order.address}</p>
                <p className="card-text">{order.readiness}</p>
                <p className="card-text">{new Date(order.date).toLocaleDateString()}</p>
                <p className="card-text">{order.addition}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default OrderCard;