import { Link } from "react-router-dom";
import "./OrderSummary.css";

const OrderSummary = ({orderDetails, subtotal, orderDescription, setData}) => {
    return(
        <>
        <div className="order-summary">
            <div className="orders">
            <div className="order-heading">
                <div>product</div>
                <div>subotal</div>
            </div>
            <div className="order-items">
            {
                    orderDetails.map((orders) => {
                        return(
                            
                         <div className="order-details" key={orders._id}>
                            <div className="order-name">
                                <div className="order-title">{orders.title}</div>
                                <div>{"x"} {orders.qty}</div>
                            </div>
                            <div>
                                <div>{orders.subtotal}</div>
                            </div>
                            </div>
                            
                        )
                    })
                }
            </div>
                <div className="order-total">
                <div><h5>Total Amount</h5></div> 
                
                <div><p>₹{subtotal.length >= 1 && subtotal.reduce((a,b) => a +b).toFixed(2)}</p></div>
            
            </div>
            </div>
            <div className="order-description">
                <p className="order-head">thank you , your order has been received</p>
                <ul className="order-list">
                    <li>order number : {orderDescription.orderNumber} </li>
                    <li>Date: {orderDescription.orderDate} </li>
                    <li>payment method :{orderDescription.paymentMode} </li>
                    <li>Deliver charge : {orderDescription.deliveryCharge}</li>
                    <li className="text-highlight">total amount:{subtotal.length >= 1 && (subtotal.reduce((a,b) => a +b) + 500).toFixed(2)} </li>
                </ul>
                <Link to="/"><button className="btn btn-primary" onClick={() => {setData({type:"RESET_ORDER"})}}>
                Procced to home page</button></Link>
            </div>
        </div>
        </>
    );
};

export default OrderSummary;