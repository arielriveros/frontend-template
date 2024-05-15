import Button from '@/components/Button';
import Topbar from '@/components/Topbar';
import Increment from '@/containers/Increment';
import ReactLogo from '@/assets/images/react.svg';
import { IncrementContextProvider } from '@/contexts/IncrementContext';

export default function App() {
  return (
    <main>
      <Topbar>
        <img src={ReactLogo} alt='React Logo' className='w-10 h-10' />
        <h1 className='text-xl font-bold'>Frontend Template</h1>
      </Topbar>
      <section className='py-5 px-10'>
        <h1 className='text-3xl mb-2 text-center font-bold text-gray-900'>Frontend Template</h1>
        <p className='text-lg font-semibold text-gray-700'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta harum saepe obcaecati minus odio officiis ipsam pariatur quis, placeat iusto ducimus cum, fugit debitis nisi dolor dolores quisquam eligendi numquam.
        </p>
        <div className='flex justify-center my-5'>
          <Button onClick={() => alert('Hello, World!')}>Click Me!</Button>
        </div>
        <IncrementContextProvider>
          <Increment />
        </IncrementContextProvider>
      </section>
    </main>
  );
}
