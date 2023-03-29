import RoundButton from '../../../source/components/RoundButton/RoundButton.js';
import FormInput from '../../../source/components/FormInput/FormInput.js';
import Logo from '../../../source/components/Logo/Logo.js';
import handleShowPassword from '../../../source/utils/handleShowPassword.js';

const root = document.getElementById('root');

root.innerHTML = `
<div class="login-page">
    ${Logo('logo-login', 'dark-red-color', 'black-color')}

    <form action="#" class="login-form">
        ${FormInput('Tên đăng nhập', 'Username', 'user-name', 'Enter user name', 'text')}
        ${FormInput('Mật khẩu', 'Password', 'user-password', 'Enter password', 'password')}
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

const showPassBtn = document.getElementById('user-password').nextElementSibling;
showPassBtn.onclick = () => handleShowPassword('user-password');
