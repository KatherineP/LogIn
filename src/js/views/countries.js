export function generateCountriesList(countryObject) {
 const countryContainer = document.getElementById('countrySelect');
let fragment = '<option selected>Select your country:</option>';
for (let key in countryObject) {
  fragment += `<option value="${countryObject[key]}">${countryObject[key]}</option>`; 
}
countryContainer.insertAdjacentHTML('afterbegin', fragment);
}
