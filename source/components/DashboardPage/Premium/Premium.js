import { convertMinutes } from '../../../utils/timer.js';
import Logo from '../../Logo/Logo.js';

const Premium = (timeLeft) => `
    <div class="premium-container">
        ${Logo('dark-red-backgroundcolor premium-logo', 'white-color', 'black-color', 'premium-logo')}
        <h1 class="premium-benefits">Sử dụng gói Premium 7 ngày để đọc những tin tức dành riêng cho độc giả premium và có thể tải xuống bài báo ở định dạng pdf</h1>
        <p class="premium-time-left">${timeLeft > 0 ? `Thời gian còn lại: ${convertMinutes(timeLeft)}` : ''}</p>
        <button class="premium-btn" id="premium-btn">${timeLeft > 0 ? 'Gia hạn gói Premium' : 'Đăng ký ngay'}</button>
        <p class="premium-price">chỉ với 7000đ/tuần</p>
    </div>
`;

export default Premium;
