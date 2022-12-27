import { createContext, useContext, useEffect, useReducer } from "react";
import DataReducer from "../../reducers/DataReducer/DataReducer";
import { getCategories, getProducts} from "../../apis/Apis";
import { filterBySort } from "../../helperFunctions/helperFunctions";

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
};
const DataContext = createContext();

const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {
     const [data , setData] = useReducer(DataReducer, initalDataState);

    useEffect(() => {
    getCategories(setData);
    getProducts(setData);
    
    },[])

   const filteredData = filterBySort(data.products, data.sort, data.rating, data.range);
    return(
        <DataContext.Provider value={{data, setData, filteredData}}>
            {children}
        </DataContext.Provider>
    );
};

export {DataProvider, useData};