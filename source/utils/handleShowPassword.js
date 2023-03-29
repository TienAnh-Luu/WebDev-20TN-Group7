const handleShowPassword = (id) => {
  const inputField = document.getElementById(id);
  const showPassBtn = inputField.nextElementSibling;
  if (showPassBtn.classList.contains('fa-eye')) {
    inputField.setAttribute('type', 'text');
    showPassBtn.classList.remove('fa-eye');
    showPassBtn.classList.add('fa-eye-slash');
  } else {
    inputField.setAttribute('type', 'password');
    showPassBtn.classList.add('fa-eye');
    showPassBtn.classList.remove('fa-eye-slash');
  }
};

export default handleShowPassword;
