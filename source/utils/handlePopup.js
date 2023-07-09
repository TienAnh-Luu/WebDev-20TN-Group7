import PopupForm from '../components/PopupForm/PopupForm.js';
import { createElementFromHTML } from './createHtmlElements.js';

export const openPopup = (containerId, modalId, data = []) => {
  const container = document.getElementById(containerId);
  container.appendChild(createElementFromHTML(PopupForm(modalId, data)));
  document.getElementById(`${modalId}-modal`).style.display = 'block';

  const closeBtn = document.getElementById(`popup-${modalId}-close`);
  closeBtn.addEventListener('click', () => {
    document.getElementById(`${modalId}-modal`).style.display = 'none';
  });
};
