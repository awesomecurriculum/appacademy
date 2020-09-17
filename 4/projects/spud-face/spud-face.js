window.addEventListener('DOMContentLoaded', event => {
  const form = document.getElementById('drivers-license-form'),
    card = document.getElementById('drivers-license-card'),
    submitButton = document.querySelector('button'),
    formFields = document.querySelectorAll('.form__input'),
    licenseFields = document.querySelectorAll('.license__info'),
    num = document.getElementById('license-num'),
    numConfirm = document.getElementById('license-num-confirm'),
    checkbox = document.getElementById('donor-status'),
    donorStatus = document.getElementById('card-donor-status');

  let submissions = 0;

  form.addEventListener('input', e =>
    licenseFields.forEach(field => {
      if (field.id.includes(e.target.id)) field.innerHTML = e.target.value;
      if (e.target.id === 'license-num-confirm') {
        setTimeout(() => {
          if (numConfirm.value !== num.value) {
            num.style.background = 'coral';
            numConfirm.style.background = 'coral';
          } else {
            num.style.background = '';
            numConfirm.style.background = '';
          }
        }, 5000);
      }
    })
  );

  checkbox.addEventListener('change', e => {
    if (e.currentTarget.checked) {
      donorStatus.innerHTML = 'yes';
    } else {
      donorStatus.innerHTML = 'no';
    }
  });

  formFields.forEach(field => {
    field.addEventListener('focus', e => (e.target.style.background = 'lightgreen'));
    field.addEventListener('blur', e => {
      e.target.style.background = '';
    });
  });

  submitButton.addEventListener('click', e => {
    submissions++;
    e.preventDefault();
    submitButton.innerHTML = `${submissions} ${submissions === 1 ? 'submission' : 'submissions'}`;
  });
});

// ** Phase 2: Add focus and blur events to form inputs **
// ** Phase 3: Check that license numbers match **
// ** Phase 4: Update submit button click count **
