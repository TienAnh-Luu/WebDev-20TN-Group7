import RoundButton from '../../../components/RoundButton/RoundButton.js';
import InfoItem from '../../../components/DashboardPage/Info/InfoItem.js';

const WriterInfo = (data) => `
<div class="dashboard-account-info">
    <h3 class="info-header">THÔNG TIN PHÓNG VIÊN</h3>
    <div class="info-wrapper">
        ${InfoItem('Bút danh', data.writer_pseudonym)}
        ${InfoItem('Email', data.email)}
        ${InfoItem('Số điện thoại', data.phone_number)}
        ${InfoItem('Văn phòng công tác', data.work_place)}
        ${InfoItem('Phòng ban', data.department)}
        ${InfoItem('Quản lý', data.manager)}
        <div class="info-container">
            ${RoundButton('button', 'strawberry-backgroundcolor', 'edit', 'Chỉnh sửa')}
        </div>
    </div>
</div>
`;

export default WriterInfo;
