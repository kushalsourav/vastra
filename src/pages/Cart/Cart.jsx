import { useEffect } from "react";
import {useData} from "../../contexts/DataContext/DataContext";
import { deleteCart, incDecQuantity } from "../../apis/Apis";
import CartCard from "../../components/CartCard/CartCard";
import CartDetails from "../../components/CartDetails/CartDetails";
import Grid12 from "../../components/UI/Grid-1-2/Grid12";
import useToast from "../../hooks/useToast";
import "./Cart.css";


const Cart = () => {
    const {data, setData, checkIsProduct} = useData(); 
    const postToast = useToast();
    
useEffect(() => {
        setData({ type:"CART_DETAILS"})
},[data.cart, setData])

    return(
        <>
        <div className="container">
         <Grid12>
            <div>
            {
                data.cart.length === 0 && <p className="isEmpty">Your cart is empty</p>
            }
            <CartCard 
            cart={data.cart} 
            deleteProduct={deleteCart} 
            setData={setData}
            incOrDec={incDecQuantity} 
            checkIsProduct={checkIsProduct}
            postToast={postToast}
            />
            </div>
            <div>
             <CartDetails cartDetails={data.cartDetails} />
            </div>
         </Grid12>
        </div>
        </>
    );
};

export default Cart;