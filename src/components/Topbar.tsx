import { ReactNode } from 'react';

interface TopbarProps {
  children: ReactNode;
}

export default function Topbar(props: TopbarProps) {
  return (
    <header className='flex bg-primary text-white py-2 px-5 items-center space-x-2'>
      {props.children}
    </header>
  );
}
