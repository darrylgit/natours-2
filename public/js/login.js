/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

<<<<<<< HEAD
export const login = async (email, password) => {
=======
const login = async (email, password) => {
  console.log(email, password);
>>>>>>> parent of 680ba43... Toggle header based on login status
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password
      }
    });
<<<<<<< HEAD

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
=======
    console.log(res);
  } catch (err) {
    console.log(err.response.data);
>>>>>>> parent of 680ba43... Toggle header based on login status
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/logout'
    });

    if ((res.data.status = 'success')) {
      location.reload(true);
    }
  } catch (err) {
    showAlert('error', 'Error logging out! Try again.');
  }
};
