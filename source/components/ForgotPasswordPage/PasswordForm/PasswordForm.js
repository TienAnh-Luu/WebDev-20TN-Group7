import FormInput from '../../../../source/components/FormInput/FormInput.js';
import RoundButton from '../../../../source/components/RoundButton/RoundButton.js';

const PasswordForm = `
<form action="#" class="login-form">
    ${FormInput('Mật khẩu', 'Password', 'user-password', 'Enter password', 'password')}
    ${FormInput('Xác nhận mật khẩu', 'Password', 'user-retype-password', 'Enter password', 'password')}
    ${RoundButton('button', 'strawberry-backgroundcolor', 'finish-btn', 'Hoàn tất')}
</form>
`;

export default PasswordForm;
