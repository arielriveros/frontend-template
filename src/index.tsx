import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <main className='py-5 px-10'>
      <h1 className='text-3xl mb-2 text-center font-bold text-gray-900'>Frontend Template</h1>
      <p className='text-lg font-semibold text-gray-700'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta harum saepe obcaecati minus odio officiis ipsam pariatur quis, placeat iusto ducimus cum, fugit debitis nisi dolor dolores quisquam eligendi numquam.
      </p>
    </main>
  </React.StrictMode>
);