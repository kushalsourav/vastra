import { createContext, useContext, useEffect, useReducer } from "react";
import DataReducer from "../../reducers/DataReducer/DataReducer";
import { getCategories, getProducts, postCart, incDecQuantity, postWishlist} from "../../apis/Apis";
import { filterBySort } from "../../helperFunctions/helperFunctions";
import { useLocation, useNavigate } from "react-router-dom";

const initalDataState = {
    category: [],
    accordion: 1,
    products: [],
    search: "",
    filterCategory : {filterChecked: "", filterCategoryName: ""},
    sort: "",
    rating: "",
    range: "",
    toast: {
        toastType: '',
        toastMessage: ''
      },
    cart: [],
    cartDetails: [],
    wishlist: [],

};
const DataContext = createContext();

const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {
     const [data , setData] = useReducer(DataReducer, initalDataState);

     const location = useLocation();
     const navigate = useNavigate();

    useEffect(() => {
    getCategories(setData);
    getProducts(setData);
    },[])

    
    const checkIsProduct= (product , type , postToast) => {
        if(type === "cart") {
        const hasProduct =  data.cart.some((el) => el._id === product._id);
        !hasProduct && postCart(product, setData, postToast);
        hasProduct && navigate('/Cart');
        hasProduct && location.pathname === '/Wishlist' && incDecQuantity(product._id, "increment", setData);
        return hasProduct;
        }
        if(type === "wishlist") {
            const hasProduct =  data.wishlist.some((el) => el._id === product._id);
            !hasProduct && postWishlist(product, setData, postToast);
            hasProduct && navigate('/Wishlist');
            return hasProduct;
        }
   };

   const filteredData = filterBySort(data.products, data.sort, data.rating, data.range);
    return(
        <DataContext.Provider value={{data, setData, filteredData, checkIsProduct}}>
            {children}
        </DataContext.Provider>
    );
};

export {DataProvider, useData};