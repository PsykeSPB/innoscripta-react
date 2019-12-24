export default function order(state = {}, action) {
  switch (action.type) {
    case "SET_ORDER":
      return {
        phone: action.phone,
        address: action.address,
        comment: action.comment,
      };
    default:
      return state;
  }
}
