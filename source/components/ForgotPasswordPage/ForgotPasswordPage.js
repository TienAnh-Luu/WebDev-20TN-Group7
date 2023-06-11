import Logo from '../../components/Logo/Logo.js';
import EmailForm from '../../components/ForgotPasswordPage/EmailForm/EmailForm.js';
import OtpForm from '../../components/ForgotPasswordPage/OtpForm/OtpForm.js';
import PasswordForm from '../../components/ForgotPasswordPage/PasswordForm/PasswordForm.js';
import handleShowPassword from '../../utils/handleShowPassword.js';
import { validateOTP } from '../../utils/validate.js';
import { FP_STAGE } from '../../utils/constants.js';
import GoBackButton from '../../components/GoBackButton/GoBackButton.js';

const root = document.getElementById('root');

root.innerHTML = `
<div class="forgot-password-page">
    ${Logo('logo-login', 'dark-red-color', 'black-color')}
    ${GoBackButton('../../pages/LoginPage.html')}
    <div class="form-container" id="form-container"></div>
</div>
`;

// const showPassBtn = document.getElementById('user-password').nextElementSibling;
// showPassBtn.onclick = () => handleShowPassword('user-password');

if (sessionStorage.getItem('stage') == null || sessionStorage.getItem('stage' == '')) {
  sessionStorage.setItem('stage', FP_STAGE.ENTER_EMAIL);
}

// if we are currently at email form
if (sessionStorage.getItem('stage') == FP_STAGE.ENTER_EMAIL) {
  const handleNextButton = () => {
    const check = true;
    // if username and email is valid and match one in database
    if (check) {
      sessionStorage.setItem('stage', FP_STAGE.ENTER_OTP);
      window.location.reload();
    }
  };

  const formContainer = document.getElementById('form-container');
  formContainer.innerHTML = `${EmailForm}`;

  const enterEmailBtn = document.getElementById('navigate-to-otp-btn');
  enterEmailBtn.onclick = () => handleNextButton();
}
// if we are currently at otp form
else if (sessionStorage.getItem('stage') == FP_STAGE.ENTER_OTP) {
  const handleOtpSubmit = () => {
    const validate = validateOTP();
    if (validate) {
      sessionStorage.setItem('stage', FP_STAGE.ENTER_PASSWORD);
      window.location.reload();
    }
  };

  const formContainer = document.getElementById('form-container');
  formContainer.innerHTML = `${OtpForm}`;

  //Initial references
  const input = document.querySelectorAll('.otp-input');
  const inputField = document.querySelector('.otp-inputfield');
  const submitButton = document.getElementById('otp-submit');
  let inputCount = 0,
    finalInput = '';

  //Update input
  const updateInputConfig = (element, disabledStatus) => {
    element.disabled = disabledStatus;
    if (!disabledStatus) {
      element.focus();
    } else {
      element.blur();
    }
  };

  input.forEach((element) => {
    element.addEventListener('keyup', (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
      let { value } = e.target;

      if (value.length == 1) {
        updateInputConfig(e.target, true);
        if (inputCount <= 3 && e.key != 'Backspace') {
          finalInput += value;
          if (inputCount < 3) {
            updateInputConfig(e.target.nextElementSibling, false);
          }
        }
        inputCount += 1;
      } else if (value.length == 0 && e.key == 'Backspace') {
        finalInput = finalInput.substring(0, finalInput.length - 1);
        if (inputCount == 0) {
          updateInputConfig(e.target, false);
          return false;
        }
        updateInputConfig(e.target, true);
        e.target.previousElementSibling.value = '';
        updateInputConfig(e.target.previousElementSibling, false);
        inputCount -= 1;
      } else if (value.length > 1) {
        e.target.value = value.split('')[0];
      }
      submitButton.classList.add('hide');
    });
  });

  window.addEventListener('keyup', (e) => {
    if (inputCount > 3) {
      submitButton.classList.remove('hide');
      submitButton.classList.add('show');
      if (e.key == 'Backspace') {
        finalInput = finalInput.substring(0, finalInput.length - 1);
        updateInputConfig(inputField.lastElementChild, false);
        inputField.lastElementChild.value = '';
        inputCount -= 1;
        submitButton.classList.add('hide');
      }
    }
  });

  //Start
  const startInput = () => {
    inputCount = 0;
    finalInput = '';
    input.forEach((element) => {
      element.value = '';
    });
    updateInputConfig(inputField.firstElementChild, false);
  };

  window.onload = startInput();

  const otpSubmitButton = document.getElementById('otp-submit');
  otpSubmitButton.onclick = () => handleOtpSubmit();
}
// if we are currently at enter password form
else if (sessionStorage.getItem('stage') == FP_STAGE.ENTER_PASSWORD) {
  const formContainer = document.getElementById('form-container');
  formContainer.innerHTML = `${PasswordForm}`;

  const handleFinishButton = () => {
    const check = true;
    if (check) {
      sessionStorage.setItem('stage', '');
      // navigate to another page
    }
  };

  const finishButton = document.getElementById('finish-btn');
  finishButton.onclick = () => handleFinishButton();
}
