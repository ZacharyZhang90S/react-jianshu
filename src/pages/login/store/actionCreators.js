import axios from 'axios';
import * as constants from './constants';


const changeLogin = (toggleData) => ({
  type: constants.CHANGE_LOGIN,
  value: toggleData,
});
export const logout = () => ({
  type: constants.LOGOUT,
  value: false
})
export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      const result = res.data;
      if (result) {
        dispatch(changeLogin(true));
      } else {
        alert('登录失败');
      }
    });
  };
};