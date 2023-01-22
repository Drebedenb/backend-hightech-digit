import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import Loader from "../../components/Loader/Loader";
import OrderCard from "../../components/OrderCard/OrderCard";
import Header from "../../components/Header/Header";

const DetailPage = () => {
    const {token} = useContext(AuthContext);
    const {request, loading} = useHttp();
    const [order, setOrder] = useState(null)
    const orderId = useParams().id;

    const getOrder = useCallback(async () => {
        try {
            const data = await request(`/api/order/${orderId}`, "GET", null, {
                authorization: `Bearer ${token}`
            })
            setOrder(data);
        } catch (e) {
            console.log(e)
        }
    }, [token, orderId, request])

    useEffect(() => {
        getOrder();
    }, [getOrder])

    if (loading) {
        return <Loader/>
    }

    return (
        <div className="text-bg-dark vh-100">
            <Header/>
            { !loading && order && <OrderCard order={order}/>}
        </div>
    );
};

export default DetailPage;