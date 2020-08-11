import {DATA_LOADED} from '../constants/actionTypes';

//getting Data from server

export function getData() {
  return function (dispatch) {
    return fetch('https://api.jsonbin.io/b/5f306844dddf413f95c0d9f9/10', {
      method: 'GET',
      withCredentials: true,
      headers: {
        'secret-key':
          '$2b$10$HbPophOzGB1kcv3azKUSE.yjSwK6FbqDDNhs7lLglxG1JMLTluYJ6',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({type: DATA_LOADED, payload: json.contacts});
      })
      .catch((error) => console.error(error));
  };
}
