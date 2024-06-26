//@ts-ignore
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Welcome from '../Welcome';

describe('Welcome', () => {
  test('should render the Welcome component with the correct title and subtitle', () => {
    render(<Welcome id="welcome" />);

    const mainTitle = screen.getByTestId('main-title');
    const title = screen.getByTestId('title');
    const subtitle = screen.getByTestId('subtitle');

    expect(mainTitle).toBeInTheDocument();
    expect(title).toHaveTextContent('Dröm Code');
    expect(subtitle).toHaveTextContent('THE BRIDGE BETWEEN DREAMS AND REALITY');
  });
});