import RoundButton from './RoundButton.js';
import FormInput from './FormInput.js';
import Logo from './Logo.js';

const root = document.getElementById('root');

root.innerHTML = `
<div class="login-page">
    ${Logo('logo-login', 'dark-red-color', 'black-color')}

    <form action="#" class="login-form">
        ${FormInput('Tên đăng nhập', 'user-name', 'Enter user name', 'text')}
        ${FormInput('Mật khẩu', 'user-password', 'Enter password', 'password')}
        ${RoundButton('submit', 'strawberry-backgroundcolor', 'login-btn', 'Đăng nhập')}
    </form>

    <a href="#" class="forget-password-btn">Quên mật khẩu</a>

    <div class="other-login-btns">
        <button class="loginBtn loginBtn--facebook">Login with Facebook</button>
        <button class="loginBtn loginBtn--google">Login with Google</button>
    </div>

    ${RoundButton('button', 'dark-red-backgroundcolor', 'registry-btn', 'Tạo tài khoản mới')}
</div>
`;

const handleShowPassword = () => {
  const showPassBtn = document.getElementById('show-password');
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

const showPassBtn = document.getElementById('show-password');
showPassBtn.onclick = () => handleShowPassword();
