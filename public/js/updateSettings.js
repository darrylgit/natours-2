/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const updateMe = async (name, email) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: 'http://127.0.0.01:3000/api/v1/users/updateMe',
      data: {
        name,
        email
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'User data updated!');
    }

    console.log(res);
    console.log('asfasdf');
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
