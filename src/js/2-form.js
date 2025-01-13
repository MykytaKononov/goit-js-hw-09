let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  formData = JSON.parse(savedData);
  document.querySelector('[name="email"]').value = formData.email || '';
  document.querySelector('[name="message"]').value = formData.message || '';
}

const form = document.querySelector('.feedback-form');

if (formData.email === '' || formData.message === '') {
  alert('Fill please all fields');
}

form.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  }
  if (event.target.name === 'message') {
    formData.message = event.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
