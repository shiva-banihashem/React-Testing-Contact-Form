import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import ContactForm from './ContactForm';



  
test('render without crashing', () => {
  render(<ContactForm />);
});

test('it has button Foul', () => {
    const container = render(<ContactForm />);
    container.getByText(/first name/i);
    
  });
