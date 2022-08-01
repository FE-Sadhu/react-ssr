import { CHANGE_LIST } from "./constants";

const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  return async (dispatch) => {
    const list = await new Promise((res) => {
      setTimeout(() => { 
        res(result.data)
      }, 1000)
    });
    dispatch(changeList(list))
  };
};

const result = {
  "data": [
    {
      "id": 1,
      "title": "title1111111"
    },
    {
      "id": 2,
      "title": "title2222222"
    },
    {
      "id": 3,
      "title": "title3333333"
    },
    {
      "id": 4,
      "title": "title4444444"
    },
    {
      "id": 5,
      "title": "title5555555"
    }
  ]
}