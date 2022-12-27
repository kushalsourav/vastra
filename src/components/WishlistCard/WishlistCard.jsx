
const WishlistCard = ({wishlist,  checkIsProduct, deleteWishlist, setData, postToast}) => {

    return(
        <>
        {wishlist.map((product) => {
            return(
                <div className="card-vertical-sm" key={product._id}>
                    <div className="card-img" style={{ backgroundImage: `url(${product.image})` }}>
      
                    </div>
                    <div className="card-head text-center">
                        <h3 className="card-title">{product.title}</h3>
                        <span>{product.price}</span>
                    </div>
                        <button className="btn btn-primary btn-large"
                        onClick={() => 
                            {
                                checkIsProduct(product, "cart", postToast)
                            }
                        }
                        >Move to cart</button>
                        <button className="btn btn-primary-outline btn-large"
                        onClick={() => deleteWishlist(product._id, setData, postToast)}
                         >delete from wishlist</button>
                </div>
            )
        })}
        </>
    );
};

export default WishlistCard;