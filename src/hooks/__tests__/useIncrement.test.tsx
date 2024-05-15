import useIncrement from '../useIncrement';
import { renderHook, act } from '@testing-library/react';
import { IncrementContextProvider } from '@/contexts/IncrementContext';
import { ReactNode } from 'react';

describe('useIncrement', () => {
  // Define the wrapper outside of the tests so it can be reused
  const wrapper = ({ children }: { children: ReactNode }) => <IncrementContextProvider>{children}</IncrementContextProvider>;

  test('Initial value is 0', () => {
    const { result } = renderHook(() => useIncrement(), { wrapper });
    expect(result.current.value).toBe(0);
  });

  test('Increments the value correctly', async () => {
    const { result } = renderHook(() => useIncrement(), { wrapper });
    await act(async () => {
      result.current.increment();
    });
    expect(result.current.value).toBe(1);

    await act(async () => {
      result.current.increment();
    });
    expect(result.current.value).toBe(2);
  });

  test('Decrements the value correctly', async () => {
    const { result } = renderHook(() => useIncrement(), { wrapper });
    await act(async () => {
      result.current.decrement();
    });
    expect(result.current.value).toBe(-1);
  });

  test('Resets the value to 0', async () => {
    const { result } = renderHook(() => useIncrement(), { wrapper });
    await act(async () => {
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.value).toBe(0);
  });
});
