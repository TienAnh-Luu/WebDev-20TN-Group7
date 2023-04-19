import RoundButton from '../../../../source/components/RoundButton/RoundButton.js';
import InfoItem from '../../../../source/components/DashboardPage/Info/InfoItem.js';

const EditorInfo = (data) => `
<div class="dashboard-account-info">
    <h3 class="info-header">THÔNG TIN BIÊN TẬP VIÊN</h3>
    <div class="info-wrapper">
        ${InfoItem('Email', data.email)}
        ${InfoItem('Số điện thoại', data.phone_number)}
        ${InfoItem('Văn phòng công tác', data.work_place)}
        ${InfoItem('Phòng ban', data.department)}
        ${InfoItem('Quản lý', data.manager)}
    </div>
</div>
`;

export default EditorInfo;
