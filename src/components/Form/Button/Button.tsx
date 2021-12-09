import React, { FC }  from 'react';
import classnames from 'classnames';
import { Colors } from '../../../constants/Styles';
//import { Counter } from '../../features/counter/Counter';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: Function;
  isPrimary?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick  , isPrimary = false }: ButtonProps) => {
  const theclass = isPrimary ? `bg-${Colors.light.primary}-500 hover:bg-red-600 text-white` : 'text-gray-500 text-gray';
  return (
    <button
      type="button"
      className={classnames('mb-2 md:mb-0 px-5 py-2 text-sm font-medium shadow-sm border rounded-lg hover:shadow-lg', theclass)}
    >
      {children}
    </button>
  );
}

export default Button;
