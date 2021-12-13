import React, { FC }  from 'react';
import classnames from 'classnames';
import { Colors } from '../../../../constants/Styles';
import { useTheme } from '../../../../hooks/theme-hook';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  isPrimary?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick  , isPrimary = false }: ButtonProps) => {
  const [theme] = useTheme();
  const theclass = isPrimary ? `bg-${Colors[theme].primary} hover:bg-${Colors[theme].primaryHover} text-white` : 'text-gray-500 text-gray';
  return (
    <button
      type="button"
      className={classnames('mb-2 md:mb-0 px-5 py-2 text-sm font-medium shadow-sm border rounded-lg hover:shadow-lg', theclass)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
