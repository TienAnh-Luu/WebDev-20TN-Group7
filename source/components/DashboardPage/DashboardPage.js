import Header from '../../../source/components/Header/Header.js';
import Footer from '../../../source/components/Footer/Footer.js';

const root = document.getElementById('root');
root.innerHTML = `
    <div class="dashboard-page">
        ${Header}
        <main class="main" id="content"></main>
        <footer class="footer" id="footer">
            ${Footer}
        </footer>
    </div>
`;
