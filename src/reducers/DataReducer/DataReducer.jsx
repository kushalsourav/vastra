const DataReducer = (state, action) => {
     switch (action.type) {
          case "CATEGORY":
               return {...state, category: action.category};
          case "ACCORDION":
               return {...state, accordion:state.accordion + action.accordion};
          case "PRODUCTS":
               return {...state, products: action.products};
          case "INPUT" : 
               return {...state, [action.name]: action.input,addressBook: {...state.addressBook, [action.name]: action.input}};
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
          case "CART" :
               return {...state, cart: action.cart};
          case "CART_DETAILS" : 
               return {...state, cartDetails:   state.cart.map(({price, qty, title, _id}) => {
                    return {subtotal: price * qty , qty , title, _id};
                })};
          case "WISHLIST" :
               return {...state, wishlist: action.wishlist};
          case "ADDRESS" :
               return {...state, addresses: state.addresses.concat(action.address)};
          case "CLEAR_INPUTS" :
               return {...state, addressBook:{ ...state.addressBook, address: "", pincode: "", phoneNumber: "", city: "", state: ""}};
          case "REMOVE_ADDRESS" :
               return {...state , addresses: state.addresses.filter((address) => address._id !== action.addressId) , defaultAddress:delete state.defaultAddress };
          case "DEFAULT_ADDRESS" :
               return {...state, defaultAddress: action.defaultAddress};
          case "PAYMENT_MODE": 
               return {...state, paymentMode: action.paymentMode};
          case "ORDER_SUMMARY":
               return {...state, orderSummary: {...state.orderSummary, orderDate: new Date().toDateString(), orderNumber:Math.floor(Math.random() * 214748), paymentMode: action.paymentMode,
                    orderDetails: state.orderDetails.concat(state.cartDetails)
               }};
          case "RESET_ORDER" : 
                return {...state ,  orderSummary: { ...state.orderSummary,orderDate: "",orderNumber: "",paymentMode: "",deliveryCharge: 500,orderDetails: []}}
           default:
               return state;
     };
};

export default DataReducer;