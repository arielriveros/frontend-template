import { useContext } from 'react';
import { IncrementContext } from '@/contexts/IncrementContext';

export default function useIncrement() {
  const { value, dispatch } = useContext(IncrementContext);
  const increment = () => dispatch({ type: 'ADD', payload: 1});
  const decrement = () => dispatch({ type: 'ADD', payload: -1});
  const reset = () => dispatch({ type: 'RESET' });

  return { value, increment, decrement, reset };
}