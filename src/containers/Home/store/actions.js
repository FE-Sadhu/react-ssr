import { CHANGE_LIST } from "./constants";


const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/users').then(response => {
      const list = response.data;
      dispatch(changeList(list.slice(0, 4)))
    })
  };
};
