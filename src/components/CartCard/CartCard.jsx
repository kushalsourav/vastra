import './CartCard.css';

const CartCard = ({cart, deleteProduct, setData, incOrDec,  checkIsProduct, postToast}) => {
    return(
       <>
       {cart.map((cart) => {
        return(
            <div className="card" key={cart._id}>
            <div className="card-horizontal-lg">
                <span className="badge-primary">New</span>
                <div className="card-img" style={{backgroundImage: `url(${cart.image})`}} >

                </div>
                <div className="card-abt">
                    <div className="card-head">
                        <h3 className="card-title">{cart.title}</h3>
                        <h4 className="card-subtitle">{cart.price}</h4>
                        <small>50% offer</small>
                        <div>
                            quantity :
                        <span>
                        <button className='btn btn-primary'
                       
                        onClick={() => 
                            {incOrDec(cart._id, "increment", setData)
                            
                        }}
                        >+</button>{" "} {cart.qty}
                        <button className='btn btn-primary'
                        disabled={cart.qty === 1 ? true : false}
                         onClick={() => {
                            incOrDec(cart._id, "decrement", setData)
                         }}
                        >-</button>
                        </span>
                        </div>
                    </div>
                    <div className="card-links">
                        <button 
                        className="btn btn-primary"
                        onClick={() => deleteProduct(cart._id, setData, postToast)}
                        >Remove from cart</button>
                        <button className="btn btn-secondary-outline"
                        >Move to wishlist</button>
                    </div>
                </div>
            </div>
        </div>
        )
       })}
       </>
    );
};

export default CartCard;