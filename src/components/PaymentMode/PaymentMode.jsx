import './PaymentMode.css';
const PaymentMode = ({paymentMode,defaultAddress, setData, handleOrder, cartDetails, deleteCart}) => {
    return(
        <>
           <form onSubmit={(e) => handleOrder(e)}>
             <div className="payment-mode">
                <label>
                    <input type="radio" 
                        checked={paymentMode === "Direct bank transfer"}
                        onChange={() => {
                        
                        setData({type:"PAYMENT_MODE",paymentMode:"Direct bank transfer"}) 
                        
                        }}/>
                        Direct bank transfer
                        {paymentMode === "Direct bank transfer" && 
                           <p className='payment-description'>
                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                           </p>
                        }
                </label>
                <br/>
                <label>
                    <input type="radio" 
                           checked={paymentMode === "Check payments"}
                           onChange={() => {
                            setData({type:"PAYMENT_MODE",paymentMode:"Check payments"})}}/> 
                           Check payments
                            {paymentMode === "Check payments" && 
                                <p className='payment-description'>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                </p>
                            }
                </label>
                <br />
                <label>
                    <input type="radio" 
                           checked={paymentMode === "cash on delivery"}
                           onChange={() => {

                            setData({type:"PAYMENT_MODE",paymentMode:"cash on delivery"})}}/>
                           cash on delivery
                           {
                            paymentMode === "cash on delivery" &&  <p className='payment-description'>Pay with cash upon delivery.</p>
                           }
                </label>
                <br />
            </div>
           {cartDetails.length >= 1  &&paymentMode&& defaultAddress.address && <button className='btn btn-primary' 
           onClick={(e) =>  {
             setData({type:"CART_DETAILS", cartDetails:[]})
             cartDetails.forEach(({_id}) => {deleteCart(_id, setData)})
            }}>Place your order</button>}
            </form>
        </>
    );
};

export default PaymentMode;