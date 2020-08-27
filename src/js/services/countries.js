import axios from '../plugins';

export async function getCountries() {
  try {
    const response = await axios.get(
      `/location/get-countries`,
    );

    //console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
