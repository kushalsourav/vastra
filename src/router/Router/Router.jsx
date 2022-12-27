import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Products from "../../pages/Products/Products";
import PageNotFound from "../PageNotFound/PageNotFound";
import SignIn from '../../views/SignIn/SignIn'
import SignUp from "../../views/SignUp/SignUp";


const Router = () => {

    return (
        <>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Products' element={<Products />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/Signup" element={<SignUp />} />
        </Routes>
        </>
    );
};

export default Router;