import Button from '@/components/Button';
import useIncrement from '@/hooks/useIncrement';

export default function Increment() {
  const { value, increment, decrement, reset } = useIncrement();

  return (
    <div className='flex justify-center'>
      <section className='flex flex-row space-x-5'>
        <Button onClick={() => decrement()}>-1</Button>
        <h1 className='text-2xl font-bold '>
          {value}
        </h1>
        <Button onClick={() => increment()}>+1</Button>
        <Button onClick={() => reset()}>Reset</Button>
      </section>
    </div>
  );
}
