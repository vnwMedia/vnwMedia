document.querySelectorAll('[data-demo-action]').forEach((control) => {
  control.addEventListener('click', () => {
    const phone = control.closest('.phone');
    const feedback = phone.querySelector('.phone-feedback');
    const action = control.dataset.demoAction;

    if (control.closest('.nav-dock')) {
      phone.querySelectorAll('.nav-dock button').forEach((button) => button.classList.remove('is-current'));
      control.classList.add('is-current');
    }

    const result = action === 'Call us' ? 'No call was placed.' : action === 'Email us' ? 'No email was sent.' : 'No page will open.';
    feedback.textContent = `${action} — preview only. ${result}`;
    feedback.classList.add('is-visible');
    clearTimeout(phone.feedbackTimer);
    phone.feedbackTimer = setTimeout(() => feedback.classList.remove('is-visible'), 2600);
  });
});
