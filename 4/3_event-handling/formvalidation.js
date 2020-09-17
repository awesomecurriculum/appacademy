window.addEventListener('DOMContentLoaded', e => {
  const form = document.getElementById('signup-form');

  const checkPasswordMatch = e => {
    const passwordVal = document.getElementById('password').value;
    const passwordConfirmVal = document.getElementById('confirm-password').value;

    if (passwordVal !== passwordConfirmVal) {
      event.preventDefault();
      alert('passwords must match!');
    } else {
      alert('the form was submitted!');
    }
  };

  form.addEventListener('submit', checkPasswordMatch);
});
