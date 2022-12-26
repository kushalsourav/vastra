const DataReducer = (state, action) => {
     switch (action.type) {
          case "CATEGORY":
               return {...state, category: action.category};
          case "ACCORDION":
               return {...state, accordion:state.accordion + action.accordion};
          default:
               return state;
     };
};

export default DataReducer;