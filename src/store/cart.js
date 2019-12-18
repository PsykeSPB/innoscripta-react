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
    default:
      return state;
  }
}
