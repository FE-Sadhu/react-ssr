import { CHANGE_LIST } from "./constants";

const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  return async (dispatch) => {
    const response = await fetch('https://api.github.com/users')
    const list =  response.ok && await response.json();
    dispatch(changeList(list.slice(0, 4)))
  };
};
