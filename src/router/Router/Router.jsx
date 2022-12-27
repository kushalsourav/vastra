import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Products from "../../pages/Products/Products";
import PageNotFound from "../PageNotFound/PageNotFound";
import SignIn from '../../views/SignIn/SignIn'
import SignUp from "../../views/SignUp/SignUp";
import Cart from "../../pages/Cart/Cart";
import RequireAuth from '../../contexts/AuthContext/RequireAuth/RequireAuth';
import Wishlist from "../../pages/Wishlist/Wishlist";
import UserProfile from "../../pages/UserProfile/UserProfile";


const Router = () => {

    return (
        <>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Products' element={<Products />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Cart" element={<RequireAuth><Cart /></RequireAuth>} />
            <Route path="/Wishlist" element={<RequireAuth><Wishlist /></RequireAuth>} />
            <Route path="/Profile" element={<RequireAuth><UserProfile /></RequireAuth>} />
        </Routes>
        </>
    );
};

export default Router;