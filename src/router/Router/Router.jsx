import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Products from "../../pages/Products/Products";
import PageNotFound from "../PageNotFound/PageNotFound";


const Router = () => {

    return (
        <>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Products' element={<Products />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        </>
    );
};

export default Router;