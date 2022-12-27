import { Link } from "react-router-dom";
import './CartDetails.css';
const CartDetails = ({cartDetails}) => {
    return(
        <div className="card-text">
            <div className="card-head">
                <div className="card-title">price details</div>
            </div>
            <div className="card-body">
            <div className="cart-details">
                            <div> <h5>item name</h5> </div>
                            <div> <p>quantity</p></div>  <p>subtotal</p>
            </div>
                {
                    cartDetails.map((cartDetails) => {
                    return(
                        <div key={cartDetails._id}  className="cart-details">
                            <div > <h5>{cartDetails.title}</h5> </div>
                            <p >{cartDetails.qty} item</p> <p>{cartDetails.subtotal}</p>
                        </div>
                    )
                    })
                }
                {
                    cartDetails.length > 0 &&   
                    <Link to='/Checkout'><button className="btn btn-primary btn-large">checkout</button></Link>
                }
            </div>
        </div>
    );
};

export default CartDetails;