export const addItem = (product, id) => {
  return {
    type: "ADDITEM",
    payload: product,
    id,
  };
};
const delItem = (product, id) => {
  return {
    type: "DELITEM",
    payload: product,
    id,
  };
};
export const subtractQuantity = (product, id) => {
  return {
    type: "SUB_QUANTITY",
    payload: product,
    id,
  };
};
export const addQuantity = (product, id) => {
  return {
    type: "ADD_QUANTITY",
    payload: product,
    id,
  };
};
export { delItem };
