function reducer(state = { data: [] }, action) {
    switch (action.type) {
      case "SET_REVIEWS":
        return {
            ...state,
            data: action.data,
            length: action.headers
        };
      default:
        return state;
    }
  }
  
  export default reducer;
  