import axios from 'axios';
import API_ENV from '../config/api.config';

export async function getCities(index) {
  try {
    const response = await axios.get(
      `${API_ENV.apiUrl}/location/get-cities/${index}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
