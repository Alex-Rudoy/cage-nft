export default {};
// import '@testing-library/jest-dom/extend-expect';
// import { screen, render, fireEvent } from '@testing-library/react';
// import React from 'react';
// import Checkbox from './index';

// describe('Checkbox', () => {
//   const onChange = jest.fn();
//   it('renders with minimum data', () => {
//     render(<Checkbox name="test" checked={true} onChange={onChange} />);
//     expect(document.querySelector('.checkbox')).toBeInTheDocument;
//     expect(document.querySelector('input')).toBeChecked();
//     expect(document.querySelector('p')).toBeNull;
//   });

//   it('renders with checked=false', () => {
//     render(<Checkbox name="test" checked={false} onChange={onChange} />);
//     expect(document.querySelector('input')).not.toBeChecked();
//   });

//   it('renders with text', () => {
//     render(<Checkbox name="test" checked={false} onChange={onChange} text="test text" />);
//     expect(screen.getByText('test text')).toBeInTheDocument;
//   });

//   it('renders with onClick handler', () => {
//     render(<Checkbox name="test" checked={true} onChange={onChange} />);
//     fireEvent.click(document.querySelector('label'));
//     expect(onChange).toHaveBeenCalledTimes(1);
//   });

//   it('renders with custom class', () => {
//     render(<Checkbox name="test" checked={true} onChange={onChange} className="testClass" />);
//     expect(document.querySelector('.testClass')).toBeInTheDocument;
//   });
// });
