import Button from '../Button';
import { render } from '@testing-library/react';

describe('Button', () => {
  it('Renders correctly', () => {
    const { getByText } = render(<Button onClick={()=>{}}>Button</Button>);
    expect(getByText('Button')).toBeInTheDocument();
  });

  it('Calls onClick when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Button</Button>);
    getByText('Button').click();
    expect(onClick).toHaveBeenCalled();
  });

  it('Changes external state when clicked', () => {
    let state = false;
    const { getByText } = render(<Button onClick={()=>{state = true;}}>Button</Button>);
    getByText('Button').click();
    expect(state).toBe(true);
  });
});