import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import registerUI from './config/ui.config.register';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login } from './services/auth.service';
import { register } from './services/register.service';
import { getCountries } from './services/countries';
import { getCities } from './services/cities';
import { notify } from './views/notifications';
import { generateCountriesList } from './views/countries';
import { generateCitiesList } from './views/cities'

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];
const { registerForm, email, password, nickname, first_name, last_name, phone, gender_orientation, city, country, date_of_birth_day, date_of_birth_month, date_of_birth_year } = registerUI;

// Events
form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
});
inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

document.addEventListener("DOMContentLoaded", () => {
  loadCountries();
});

country.addEventListener('change', async e => {
  const listOfCountries = await getCountries();
  //console.log(listOfCountries);
  const selectedCountry = country.value;
  for( let key in listOfCountries ){
    if (listOfCountries[key] === selectedCountry) {
      let citiesList = await getCities(key);
      generateCitiesList(citiesList);
      city.disabled = false;
      return;
    }
    if (listOfCountries[key] === 'Select your country:'){
      city.setAttribute('disabled', 'true');
      return;
    }
  }
});

registerForm.addEventListener('submit', e => {
  e.preventDefault();
  onCreateNewUser();
});

// Handlers
async function onSubmit() {
  const isValidForm = inputs.every(el => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    form.reset();
    notify({ msg: 'Login success', className: 'alert-success' });
  } catch (err) {
    notify({ mas: 'Login faild', className: 'alert-danger' });
  }
}

async function onCreateNewUser() {
  try {
    await register(
       email.value,
       password.value, 
       nickname.value, 
       first_name.value,
       last_name.value, 
       phone.value,
       gender_orientation.value, 
       country.options[country.selectedIndex].innerText,
       city.options[city.selectedIndex].innerText,
       date_of_birth_day.value, 
       date_of_birth_month.value,
       date_of_birth_year.value);
       // console.log(generateCountriesList(getCountries));
       registerForm.reset();
    notify({ msg: 'Register success', className: 'alert-success' });
  } catch (err) {
    notify({ mas: 'LoRegistergin faild', className: 'alert-danger' });
  }
}

async function loadCountries() {
  try {
   const listOfCountries = await getCountries();
   generateCountriesList(listOfCountries);
  } catch (err) {
    notify({ mas: 'Country List wasn\'t loaded', className: 'alert-danger' });
  }
}
