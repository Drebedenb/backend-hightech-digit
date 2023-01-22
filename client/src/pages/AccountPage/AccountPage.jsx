import React, {useCallback, useContext, useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import Loader from "../../components/Loader/Loader";
import OrdersList from "../../components/OrdersList/OrdersList";

const Account = () => {
    const [orders, setOrders] = useState([]);
    const {loading, request} = useHttp();
    const {token} = useContext(AuthContext);

    const fetchOrders = useCallback(async () => {
        try {
            const data = await request("/api/order", "GET", null, {
                Authorization: `Bearer ${token}`
            })
            setOrders(data);
        } catch (e) {
            console.log(e);
        }
    }, [token, request])

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders])

    if (loading) {
        return <Loader/>
    }

    return (
        <div className="text-bg-dark border-bottom border-dark">
            <Header/>
            {!loading && <OrdersList orders={orders} />}
        </div>
    );
};

export default Account;