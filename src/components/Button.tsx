import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className='cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded user-select-none'>
      {props.children}
    </button>
  );
}
