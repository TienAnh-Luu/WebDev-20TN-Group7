import RoundButton from './RoundButton.js';
import FormInput from './FormInput.js';
import Logo from './Logo.js';
import handleShowPassword from '../utils/handleShowPassword.js';

// TODO: Add onclick to the second 'show-password' button

const root = document.getElementById('root');

root.innerHTML = `
<div class="registry-page">
    ${Logo('logo-login', 'dark-red-color', 'black-color')}

    <form action="#" class="login-form">
        ${FormInput('Tên đăng nhập *', 'Username', 'user-name', 'Enter user name', 'text')}
        ${FormInput('Email *', 'Email', 'user-email', 'Enter correct email', 'email')}
        ${FormInput('Số điện thoại', 'Phone', 'user-phone-number', 'Enter phone number', 'text')}
        ${FormInput('Mật khẩu *', 'Password', 'user-password', 'Enter password', 'password')}
        ${FormInput('Xác nhận mật khẩu *', 'Password', 'user-retype-password', 'Enter password', 'password')}
        ${RoundButton('submit', 'strawberry-backgroundcolor', 'login-btn', 'Tạo tài khoản')}
    </form>
</div>
`;

const showPassBtns = document.getElementsByClassName('show-password-btn');
showPassBtns[0].onclick = (e) => handleShowPassword(e.target.id);
// showPassBtns[1].onclick = (e) => handleShowPassword(e.target.id);

console.log(showPassBtns);
