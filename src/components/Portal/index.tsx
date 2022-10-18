import { createPortal } from 'react-dom';

export const Portal = ({ children }) =>
  createPortal(children, document.getElementById('root') || document.body);
