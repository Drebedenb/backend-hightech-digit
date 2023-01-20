import React, {useState} from "react"
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {OrdersContext} from "./context/OrdersContext";


function App() {
    const [nameState, setName] = useState("fd")
    const [priceState, setPrice] = useState("100")
    const {token, login, logout, userId} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);



    return (
        <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
            <OrdersContext.Provider value={{name: nameState, price: priceState, toggleName: setName, togglePrice: setPrice}}>
                <BrowserRouter>
                    <div className="App">
                        {routes}
                    </div>
                </BrowserRouter>
            </OrdersContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
