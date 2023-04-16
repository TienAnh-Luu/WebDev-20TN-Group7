import RoundButton from '../../../source/components/RoundButton/RoundButton.js';
import FormInput from '../../../source/components/FormInput/FormInput.js';
import Logo from '../../../source/components/Logo/Logo.js';
import handleShowPassword from '../../../source/utils/handleShowPassword.js';
import { isAdmin, isEditor, isNormalUser, isSubscriber, isWriter } from '../../utils/validate.js';
import GoBackButton from '../../../source/components/GoBackButton/GoBackButton.js';

const root = document.getElementById('root');

root.innerHTML = `
<div class="login-page">
    ${Logo('logo-login', 'dark-red-color', 'black-color')}
    ${GoBackButton('../../../source/index.html')}
    
    <div class="login-form">
        ${FormInput('Tên đăng nhập', 'Username', 'user-name', 'Enter user name', 'text')}
        ${FormInput('Mật khẩu', 'Password', 'user-password', 'Enter password', 'password')}
        ${RoundButton('submit', 'strawberry-backgroundcolor', 'login-btn', 'Đăng nhập')}
    </div>

    <a href="../../../source/pages/ForgotPasswordPage.html" class="forget-password-btn">Quên mật khẩu</a>

    <div class="other-login-btns">
        <button class="loginBtn loginBtn--facebook">Login with Facebook</button>
        <button class="loginBtn loginBtn--google">Login with Google</button>
    </div>

    ${RoundButton('button', 'dark-red-backgroundcolor', 'registry-btn', 'Tạo tài khoản mới')}
</div>
`;

const showPassBtn = document.getElementById('user-password').nextElementSibling;
showPassBtn.onclick = () => handleShowPassword('user-password');

const logo = document.getElementById('logo');
logo.onclick = () => sessionStorage.setItem(''); // come to homepage as guest

const loginBtn = document.getElementById('login-btn');
loginBtn.onclick = () => {
  const username = document.getElementById('user-name').value;
  const password = document.getElementById('user-password').value;

  if (isNormalUser(username, password)) {
    sessionStorage.setItem('user_type', 'normal');
  } else if (isSubscriber(username, password)) {
    sessionStorage.setItem('user_type', 'subscriber');
  } else if (isWriter(username, password)) {
    sessionStorage.setItem('user_type', 'writer');
  } else if (isEditor(username, password)) {
    sessionStorage.setItem('user_type', 'editor');
  } else if (isAdmin(username, password)) {
    sessionStorage.setItem('user_type', 'admin');
  } else {
    sessionStorage.setItem('user_type', '');
  }

  window.location.assign('../../../source/index.html');
};
