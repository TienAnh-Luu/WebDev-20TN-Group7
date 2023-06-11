import FormInput from '../../../components/FormInput/FormInput.js';
import RoundButton from '../../../components/RoundButton/RoundButton.js';

const EmailForm = `
<form action="#" class="login-form" id="enter-username-and-email">
    ${FormInput('Tên đăng nhập', 'Username', 'user-name', 'Username không hợp lệ', 'text')}
    ${FormInput('Email', 'Email', 'user-email', 'Email không hợp lệ', 'email')}
    ${RoundButton('button', 'strawberry-backgroundcolor', 'navigate-to-otp-btn', 'Tiếp')}
</form>
`;

export default EmailForm;
