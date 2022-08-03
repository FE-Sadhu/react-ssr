import axios from "axios";
import { CHANGE_LIST } from "./constants";

const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = (isServerInvoke) => {
  let url = '';
  if (isServerInvoke) {
    url = 'https://api.github.com/users'
  } else {
    url = '/api/users';
  }
  return (dispatch) => {
    return axios.get(url).then(response => {
      const list = response.data;
      dispatch(changeList(list.slice(0, 4)))
    })
  };
};
