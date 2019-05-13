export const SELECT_ITEM = "SELECT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const deleteItem = item => {
  return {
    type: DELETE_ITEM,
    payload: item
  };
};

export const selectItem = item => {
  return {
    type: SELECT_ITEM,
    payload: item
  };
};
