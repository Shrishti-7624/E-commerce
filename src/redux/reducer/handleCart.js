const addItem = [];
const handleCart = (state = addItem, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];

    case "DELITEM":
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));
    case "ADD_QUANTITY":
      return {
        ...state,
        addItem: state.addItem.map((product) =>
          product.id === action.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case "SUB_QUANTITY":
      return {
        ...state,
        addItem: state.addItem.map((product) =>
          product.id === action.id
            ? {
                ...product,
                quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
              }
            : product
        ),
      };

    default:
      return state;
  }
};

export default handleCart;
