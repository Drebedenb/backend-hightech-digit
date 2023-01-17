import React, {createContext, useState} from "react"
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";

let data = [{id: 1, name: "phone", price: 500},
    {id: 2, name: "notebook", price: 1000},
    {id: 3, name: "pc", price: 1000},
    {id: 4, name: "digital watch", price: 200}];

export const ProductsContext = createContext(null);

function App() {
    const [cards, setCards] = useState(data);
    const {token, login, logout, userId} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    return (
        <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
            <ProductsContext.Provider value={{cards, setCards}}>
                <BrowserRouter>
                    <div className="App">
                        {routes}
                    </div>
                </BrowserRouter>
            </ProductsContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
