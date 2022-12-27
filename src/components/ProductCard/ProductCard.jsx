import { Fragment } from 'react';
import './ProductCard.css';
const ProductCard = ({products, filterBySearch, filterCategory, checkIsProduct, postToast}) => {
  return(
        <Fragment>{
            products.map((product) => {
            if(product.categoryName.toLowerCase().indexOf(filterBySearch.toLowerCase()) === -1) {
              return <Fragment  key={product._id}></Fragment>
            }
            if(filterCategory &&  filterCategory.filterChecked && product.categoryName !== filterCategory.filterCategoryName) {
              return <Fragment  key={product._id}></Fragment>
            }
            return(
                  <div className="card-vertical-sm" key={product._id}>
                      <div className="card-img" style={{backgroundImage: `url(${product.image})`}}></div>
                          <div className="card-head text-center">
                              <h3 className="card-title">{product.title}</h3>
                              <span className="text-grey">{product.price}</span>
                          </div>
                      <button className="btn btn-primary-outline btn-large" 
                       onClick={() =>{ checkIsProduct(product,"cart",  postToast)}}
                     >Add to Cart</button>
                      <button className="btn btn-secondary-outline btn-large"
                          onClick={() => {
                            checkIsProduct(product,"wishlist",  postToast)
                            }}
                      >Add to wishlist</button>
                      <span className="badge-primary">new</span>
                  </div>
            )
            })
        }
        </Fragment>
    );
};

export default ProductCard;