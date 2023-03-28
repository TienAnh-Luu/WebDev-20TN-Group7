const handleShowPassword = (id) => {
  const showPassBtn = document.getElementById(id);
  if (showPassBtn.classList.contains('fa-eye')) {
    showPassBtn.nextElementSibling.setAttribute('type', 'text');
    showPassBtn.classList.remove('fa-eye');
    showPassBtn.classList.add('fa-eye-slash');
  } else {
    showPassBtn.nextElementSibling.setAttribute('type', 'password');
    showPassBtn.classList.add('fa-eye');
    showPassBtn.classList.remove('fa-eye-slash');
  }
};

export default handleShowPassword;
