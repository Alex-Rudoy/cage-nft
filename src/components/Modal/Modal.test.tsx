export default {};
// import '@testing-library/jest-dom/extend-expect';
// import { fireEvent, render } from '@testing-library/react';
// import React, { useState } from 'react';
// import Modal from './index';

// const Wrapper = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   return (
//     <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
//       test
//     </Modal>
//   );
// };

// describe('Modal', () => {
//   it('renders with minimum data', () => {
//     render(<Wrapper />);

//     expect(document.querySelector('.modal')).toBeInTheDocument;
//     expect(document.querySelector('.backdrop')).toHaveClass('backdrop_visible');

//     fireEvent.click(document.querySelector('.close'));

//     expect(document.querySelector('.backdrop')).not.toHaveClass('backdrop_visible');
//   });

//   it('closes when clicked outside', () => {
//     render(<Wrapper />);

//     expect(document.querySelector('.backdrop')).toHaveClass('backdrop_visible');

//     fireEvent.click(document.querySelector('.backdrop'));

//     expect(document.querySelector('.backdrop')).not.toHaveClass('backdrop_visible');
//   });

//   it('closes when clicked escape', () => {
//     render(<Wrapper />);

//     expect(document.querySelector('.backdrop')).toHaveClass('backdrop_visible');

//     fireEvent.keyDown(document.querySelector('.backdrop'), { key: 'Escape' });

//     expect(document.querySelector('.backdrop')).not.toHaveClass('backdrop_visible');
//   });

//   it('renders with custom class', () => {
//     render(
//       <Modal isVisible={true} onClose={() => null} className="testClass">
//         test
//       </Modal>,
//     );
//     expect(document.querySelector('.testClass')).toBeInTheDocument;
//   });
// });
