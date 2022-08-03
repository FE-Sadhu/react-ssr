import { CHANGE_LIST } from "./constants";
import { serverAxios } from '../../../server/request';
import { clientAxios } from '../../../client/request';

const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = (isServerInvoke) => {
  const request = isServerInvoke ? serverAxios : clientAxios;
  return (dispatch) => {
    return request.get('/users').then(response => {
      const list = response.data;
      dispatch(changeList(list.slice(0, 4)))
    })
  };
};
