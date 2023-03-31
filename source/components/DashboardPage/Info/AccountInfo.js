import RoundButton from '../../../../source/components/RoundButton/RoundButton.js';
import InfoItem from '../../../../source/components/DashboardPage/Info/InfoItem.js';

const AccountInfo = (data) => `
<div class="dashboard-account-info">
    <h3 class="info-header">THÔNG TIN TÀI KHOẢN</h3>
    <div class="info-wrapper">
        ${InfoItem('Họ và tên', data.user_name)}
        ${InfoItem('Tên đăng nhập', data.account_name)}
        ${InfoItem('Email', data.email)}
        ${InfoItem('Số điện thoại', data.phone_number)}
        ${InfoItem('Ngày sinh', data.DOB)}
        <div class="info-container">
            ${RoundButton('button', 'strawberry-backgroundcolor', 'edit', 'Chỉnh sửa')}
            ${RoundButton('button', 'strawberry-backgroundcolor', 'change-password', 'Đổi mật khẩu')}
        </div>
    </div>
</div>
`;

export default AccountInfo;
