export default function cart(state = {}, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        [action.id]:
          action.id in state
            ? state[action.id] + action.quantity
            : action.quantity,
      };
    case "EXTRACT_FROM_CART":
      if (action.id in state) {
        return {
          ...state,
          [action.id]:
            state[action.id] - action.quantity > 0
              ? state[action.id] - action.quantity
              : 1,
        };
      }
      return state;
    case "REMOVE_FROM_CART":
      if (action.id in state) {
        const res = { ...state };
        delete res[action.id];
        return res;
      }
      return state;
    default:
      return state;
  }
}
