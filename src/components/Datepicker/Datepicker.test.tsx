export default {};
// import '@testing-library/jest-dom/extend-expect';
// import { fireEvent, render, screen } from '@testing-library/react';
// import React from 'react';
// import { act } from 'react-test-renderer';
// import Datepicker from './index';
// const useRouter = jest.spyOn(require('next/router'), 'useRouter');

// describe('Datepicker', () => {
//   useRouter.mockImplementation(() => ({ locale: 'ru' }));

//   jest.mock('next/router', () => ({
//     useRouter: jest.fn(() => ({
//       locale: 'ru',
//     })),
//   }));

//   const onChange = jest.fn();

//   test('basic functionality', async () => {
//     render(<Datepicker value={null} onChange={onChange} name="test" />);
//     expect(document.getElementById('test')).toBeInTheDocument; // rendered

//     expect(document.querySelector('[data-src="/icons/calendar.svg"]')).toBeInTheDocument; // calendar icon is shown on empty input

//     expect(screen.queryByText('1')).toBeNull; // calendar is not shown

//     act(() => {
//       fireEvent.click(document.querySelector('input')); // open datepicker
//     });

//     expect(onChange).toBeCalledTimes(0); // change event is not fired

//     const dateButtons = await screen.findAllByText('1');
//     const dateButton = dateButtons[0]; // get first date button
//     expect(dateButton).toBeInTheDocument;

//     act(() => {
//       fireEvent.click(dateButton);
//     });

//     expect(onChange).toBeCalledTimes(1); // change event fired once
//   });

//   it('renders with value', async () => {
//     render(<Datepicker value={new Date()} onChange={onChange} name="test" />);
//     expect(document.getElementById('test')).toBeInTheDocument; // rendered

//     expect(document.querySelector('.react-datepicker__close-icon')).toBeInTheDocument; // close icon is shown when value is present
//   });

//   it('renders with disabled', () => {
//     render(<Datepicker value={null} onChange={onChange} name="test" disabled />);
//     expect(document.querySelector('.testClass')).toBeInTheDocument;
//   });

//   it('renders with custom class', () => {
//     render(<Datepicker value={null} onChange={onChange} name="test" className="testClass" />);
//     expect(document.querySelector('.testClass')).toBeInTheDocument;
//   });
// });
