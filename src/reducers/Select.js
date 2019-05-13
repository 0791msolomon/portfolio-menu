import { SELECT_ITEM, DELETE_ITEM } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case SELECT_ITEM:
      return [...state, action.payload];

    case DELETE_ITEM:
      let filtered = state.filter(item => item.meal !== action.payload.meal);

      return filtered;

    default:
      return state;
  }
}
