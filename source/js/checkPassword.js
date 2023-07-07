'use strict';

function checkConfirmPassword(formId, prefix) {
  const password = document.querySelector(`#${formId} [name=${prefix}-password]`);
  const confirmPassword = document.querySelector(`#${formId} [name=${prefix}-confirm-password]`);

  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity('Mật khẩu xác nhận không khớp');
    confirmPassword.reportValidity();
  } else {
    confirmPassword.setCustomValidity('');
  }
}
