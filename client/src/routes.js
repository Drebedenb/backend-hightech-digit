import {Route, Routes} from "react-router-dom"
import Account from "./pages/Account/Account";
import DetailPage from "./pages/DetailPage/DetailPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import Main from "./pages/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";


export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return (
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/orders" element={<DetailPage/>}/>
                <Route path="/order/:id" element={<OrderPage/>}/>
            </Routes>

        )
    }
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/" element={<Main/>}/>
        </Routes>
    )
}