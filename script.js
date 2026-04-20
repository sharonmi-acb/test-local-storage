const checkAuthButton = document.getElementById('check-auth-button');

if (checkAuthButton) {
  checkAuthButton.addEventListener('click', () => {
    const authValue = window.localStorage.getItem('auth');
    window.location.href = authValue === '1234' ? 'ok/index.html' : 'error/index.html';
  });
}
