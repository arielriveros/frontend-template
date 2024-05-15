import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className='cursor-pointer bg-secondary hover:bg-dark-secondary text-white font-bold py-2 px-4 rounded user-select-none'>
      {props.children}
    </button>
  );
}
