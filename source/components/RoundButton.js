const RoundButton = (type, className, id, text) => `
    <button type=${type} class="round-btn ${className}" id=${id}>
        ${text}
    </button>
`;

export default RoundButton;
