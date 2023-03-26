const FormInput = (label, id, warningMessage, type) => `
        <div class="form-input-section">
            <label for=${id} class="form-label">
              ${label}
              <div class="warning-container">
                <i class="fa-solid fa-circle-exclamation warning-icon"></i>
                <p class="warning-message">${warningMessage}</p>
              </div>
            </label>
            <div class="form-input-container">
              ${type === 'password' ? '<i class="fa-solid fa-eye show-password-btn" id="show-password"></i>' : ''}
              <input type=${type} name=${id} id=${id} class="form-input" placeholder=${label} />
            </div>
        </div>
`;

export default FormInput;
