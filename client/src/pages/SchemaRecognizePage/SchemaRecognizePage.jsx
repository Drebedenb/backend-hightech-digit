import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SchemaRecognizePage = () => {
    return (
        <div className="main">
            <Header/>
            <div className="container">
                <div>
                    <div>
                        <label htmlFor="avatar">Choose a schema of your room:</label>
                    </div>
                    <input type="file"
                           id="avatar" name="avatar"
                           accept="image/png, image/jpeg"
                           multiple="multiple"/>
                </div>
                <table className="table ">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Area</th>
                        <th scope="col">Length of cable (0.56$ per item)</th>
                        <th scope="col">Amount of patch-cords (0.1$ per item)</th>
                        <th scope="col">Wi-Fi routers (7$ per router)</th>
                        <th className="bg-success-subtle" scope="col">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1 picture</th>
                        <td>53,5 m²</td>
                        <td>160,4 m</td>
                        <td>38</td>
                        <td>2</td>
                        <td className="bg-success-subtle">104,2$ (1 day of work)</td>
                    </tr>
                    <tr>
                        <th scope="row">2 picture</th>
                        <td>42,5 m²</td>
                        <td>94,5 m</td>
                        <td>24</td>
                        <td>1</td>
                        <td className="bg-success-subtle">62,04$ (1 day of work)</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    );
};

export default SchemaRecognizePage;