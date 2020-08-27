const registerUI = {
  registerForm: document.forms['registerForm'],
  email: document.getElementById('registerEmail'),
  password: document.getElementById('registerPassword'),
  nickname: document.getElementById('nickName'),
  first_name: document.getElementById('firstName'),
  last_name: document.getElementById('lastName'),
  phone: document.getElementById('phone'),
  gender_orientation: document.getElementById('genderSelect'), 
  city: document.getElementById('citySelect'),
  country: document.getElementById('countrySelect'),
  date_of_birth_day: document.getElementById('birth-day'),
  date_of_birth_month: document.getElementById('birth-month'),
  date_of_birth_year: document.getElementById('birth-year'),
};

export default registerUI;
