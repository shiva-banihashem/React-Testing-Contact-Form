import React from 'react';
// import ReactDOM from 'react-dom';
import { render, fireEvent,getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from './ContactForm';



  
test('render without crashing', () => {
  render(<ContactForm />);
});

test('it has text label first name, last name and place holder lou', () => {
    const container = render(<ContactForm />);
    container.getByText(/first name/i);
    container.getByText(/Last Name/i);
    container.getByPlaceholderText(/luo/i);
    const msg=container.getByTestId('text-content')
   expect(msg).toHaveTextContent(/message/i)
   expect(msg).not.toBeRequired();
  //  const eml1 = container.getByTestId('eml');
  //  expect(eml1).toBeRequired()
  const submit = container.getByTestId("submit");
  

  fireEvent.click(submit);
  expect(submit.innerHTML).not.toBe("S U B M I T")
  
  });
  
  