import Increment from '../Increment';
import { IncrementContextProvider } from '@/contexts/IncrementContext';
import { render } from '@testing-library/react';
import { act } from 'react'; // Import act

describe('Increment', () => {
  it('Renders correctly', () => {
    const { getByText } = render(<Increment />);
    expect(getByText('+1')).toBeInTheDocument();
  });

  it('Increments value when +1 is clicked', async () => {
    const { getByRole } = render(<IncrementContextProvider><Increment /></IncrementContextProvider>);
    
    expect(getByRole('heading')).toHaveTextContent('0');

    //  Use act to handle async updates
    await act(async () => {
      const button = getByRole('button', { name: '+1' });
      button.click();
    });
    
    expect(getByRole('heading')).toHaveTextContent('1');

    await act(async () => {
      const button = getByRole('button', { name: '+1' });
      button.click();
    });
    
    expect(getByRole('heading')).toHaveTextContent('2');
  });

  it('Increments value when -1 is clicked', async () => {
    const { getByRole } = render(<IncrementContextProvider><Increment /></IncrementContextProvider>);
    
    expect(getByRole('heading')).toHaveTextContent('0');

    //  Use act to handle async updates
    await act(async () => {
      const button = getByRole('button', { name: '-1' });
      button.click();
    });
    
    expect(getByRole('heading')).toHaveTextContent('-1');

    await act(async () => {
      const button = getByRole('button', { name: '-1' });
      button.click();
    });
    
    expect(getByRole('heading')).toHaveTextContent('-2');
  });

});