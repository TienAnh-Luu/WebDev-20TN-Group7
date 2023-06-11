const Logo = (subclass, firstLetterColor, secondLetterColor) => `
    <a href="../../index.html" class="logo ${subclass}" id="logo">
        <span class=${firstLetterColor}>News</span>
        <span class=${secondLetterColor}>Room</span>
    </a>
`;

export default Logo;
