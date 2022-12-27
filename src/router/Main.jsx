import { useData } from "../contexts/DataContext/DataContext";
import Navbar from "../components/Navbar/Navbar";
import Router from "./Router/Router";
import Toast from "../components/Toast/Toast";
import { useAuth } from "../contexts/AuthContext/AuthContext";

const Main = () => {

const {data, setData} = useData();
const {authState, authDispatch} = useAuth();
    return (
        <>
        <Navbar 
          filterBySearch={data.search} 
          setData={setData} 
          login={authState.login} 
          authDispatch={authDispatch}
          cartItems={data.cart.length >= 1 && data.cart.length}
          wishlistItems={data.wishlist.length >= 1 && data.wishlist.length}
        />
        <Router />
        <Toast type={data.toast.toastType} message={data.toast.toastMessage}/>
        </>
    );
};

export default Main;