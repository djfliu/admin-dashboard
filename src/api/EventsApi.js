import axios from 'axios';
import { BASE_URL } from '../env';

export const addEvent = (formData, title) => {
  axios
    .post(`${BASE_URL}event/${title}`, formData)
    .then(res => {
      console.log(res);
      console.log(JSON.parse(res.data));
    })
    .catch(error => {
      console.log('Error sending');
      if (error.response.status === 409) {
        alert('Event already exists');
      } else {
        console.log(error);
      }
    });
};

export const getEvents = async () => {
  return await axios
    .get(`${BASE_URL}events`)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.log('Error getting');
      console.log(error);
    });
};
