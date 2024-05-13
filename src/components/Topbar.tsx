import { ReactNode } from 'react';

interface TopbarProps {
  children: ReactNode;
}

export default function Topbar(props: TopbarProps) {
  return (
    <header className='bg-green-500 text-white py-2 px-5'>
      {props.children}
    </header>
  );
}
