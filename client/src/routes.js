import {Route, Routes} from "react-router-dom"
import AccountPage from "./pages/AccountPage/AccountPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";


export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return (
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/account" element={<AccountPage/>}/>
                <Route path="/order/:id" element={<DetailPage/>}/>
                <Route path="/checkout" element={<CheckoutPage/>}/>
            </Routes>

        )
    }
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signUp" element={<SignUpPage/>}/>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    )
}