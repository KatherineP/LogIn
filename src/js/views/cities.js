export function generateCitiesList(cityObject) {
  const countryContainer = document.getElementById('citySelect');
 let fragment = '<option selected>Select your city:</option>';
 for (let key in cityObject) {
   fragment += `<option value="${cityObject[key]}">${cityObject[key]}</option>`; 
 }
 countryContainer.insertAdjacentHTML('afterbegin', fragment);
 }
 