import axios from 'axios';
import API_ENV from '../config/api.config';

export async function getCountries() {
  try {
    const response = await axios.get(
      `${API_ENV.apiUrl}/location/get-countries`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    //console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
