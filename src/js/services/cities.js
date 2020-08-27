import axios from '../plugins';

export async function getCities(index) {
  try {
    const response = await axios.get(
      `/location/get-cities/${index}`,
    );

    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
