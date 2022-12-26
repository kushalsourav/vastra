import { createContext, useContext, useEffect, useReducer } from "react";
import DataReducer from "../../reducers/DataReducer/DataReducer";
import { getCategories} from "../../apis/Apis";

const initalDataState = {
    category: [],
    accordion: 1,
};
const DataContext = createContext();

const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {
     const [data , setData] = useReducer(DataReducer, initalDataState);

    useEffect(() => {
    getCategories(setData);
    },[])
  
    return(
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    );
};

export {DataProvider, useData};