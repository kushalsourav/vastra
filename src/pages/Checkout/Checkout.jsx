import { useData } from "../../contexts/DataContext/DataContext";
import Grid12 from "../../components/UI/Grid-1-2/Grid12"
import Address from"../../components/Address/Address";
import PaymentMode from "../../components/PaymentMode/PaymentMode";
import "./Checkout.css";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { deleteCart } from "../../apis/Apis";

const Checkout = () => {
    const {data, setData} = useData();
    const handleDelete = () => {
        setData({type:"REMOVE_ADDRESS"});
    };
    const subTotal = data.cartDetails.map(({subtotal}) => subtotal);

    const handleOrder = (e) => {
        e.preventDefault();
        setData({type:"ORDER_SUMMARY", paymentMode: data.paymentMode});
        setData({type:"PAYMENT_MODE", paymentMode: ""});
    };
    return(
        <>
        <div className="checkout">
        <Grid12>
        <div className="delivery-details">
        <Address addresses={[data.defaultAddress]} handleDelete={handleDelete} />
        <div>
            <div className="delivery-assets">  
                <div>
              {<PaymentMode paymentMode={data.paymentMode} setData={setData} cartDetails={data.cartDetails} deleteCart={deleteCart} defaultAddress={data.defaultAddress}  handleOrder={handleOrder}/>}
                </div>
            </div>
        </div>
        </div>
        <div>
        {data.orderSummary.paymentMode && <OrderSummary orderDetails={data.orderSummary.orderDetails} subtotal={subTotal} orderDescription={data.orderSummary} setData={setData}/>}
        </div>
        </Grid12>
        </div>
        </>
    );
};

export default Checkout;