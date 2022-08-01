import { CHANGE_LIST } from "./constants";

const initData = {
  name: 'sadhu ~',
  newsList: []
}

const reducer = (state = initData, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      const newState = {
        ...state,
        newsList: action.list
      }
      return newState;
    default:
      return state;
  }
}

export default reducer;