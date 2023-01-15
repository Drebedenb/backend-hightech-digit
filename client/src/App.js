import React, {createContext, useState} from "react"
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./routes";

let data = [{id: 1, name: "phone", price: 500},
    {id: 2, name: "notebook", price: 1000},
    {id: 3, name: "pc", price: 1000},
    {id: 4, name: "digital watch", price: 200}];

export const ProductsContext = createContext(null);

function App() {
    const [cards, setCards] = useState(data);
    const routes = useRoutes(false);

    return (
        <ProductsContext.Provider value={{cards, setCards}}>
            <BrowserRouter>
                <div className="App">
                    {routes}
                    {/*<Routes>*/}
                    {/*    <Route path="/" element={<Main/>}/>*/}
                    {/*    <Route path="*" element={<Main/>}/>*/}
                    {/*    <Route path="/*" element={<Main/>}/>*/}
                    {/*    <Route path="/login" element={<Login/>}/>*/}
                    {/*    <Route path="/signUp" element={<SignUp/>}/>*/}
                    {/*</Routes>*/}
                </div>
            </BrowserRouter>
        </ProductsContext.Provider>
    );
}

export default App;
