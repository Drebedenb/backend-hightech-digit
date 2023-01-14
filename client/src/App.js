import React, {createContext, useState} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login/Login";

let data = [{id: 1, name: "phone", price: 500},
    {id: 2, name: "notebook", price: 1000},
    {id: 3, name: "pc", price: 1000},
    {id: 4, name: "digital watch", price: 200}];

export const ProductsContext = createContext(null);

function App() {
    const [cards, setCards] = useState(data);

    return (
        <ProductsContext.Provider value={{cards, setCards}}>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="*" element={<Main/>}/>
                        <Route path="/*" element={<Main/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </ProductsContext.Provider>
    );
}

export default App;
