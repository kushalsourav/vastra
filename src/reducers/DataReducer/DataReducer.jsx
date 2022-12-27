const DataReducer = (state, action) => {
     switch (action.type) {
          case "CATEGORY":
               return {...state, category: action.category};
          case "ACCORDION":
               return {...state, accordion:state.accordion + action.accordion};
          case "PRODUCTS":
               return {...state, products: action.products};
          case "INPUT" : 
               return {...state, [action.name]: action.input,};
          case "FILTER" :
               return {...state, filterCategory: {...state.filterCategory , filterChecked: action.filterChecked, filterCategoryName: action.filterCategoryName}}
          case "SORT" :
               return {...state, sort: action.sort};
          case "RANGE" :
               return {...state, range:action.range};
          case "RATING" :
               return {...state, rating: action.rating};
          case "RESET" :
               return{...state, rating:"", sort:"", range:"", filterCategory: {...state.filterCategory, filterChecked: ""}};
          case "TOAST":
               return {...state, toast: {...state.toast , toastType: action.toastType,  toastMessage: action.toastMessage}};
          default:
               return state;
     };
};

export default DataReducer;