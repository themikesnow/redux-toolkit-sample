import React from 'react';
import Logo from '../Logo/Logo';
import LightDarkToggle from '../Toggle/LightDarkToggle';
import { Colors } from '../../../constants/Styles';
import { useTheme } from '../../../hooks/theme-hook';


interface NavbarProps {
  onToggleMode: Function;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleMode }: NavbarProps) => {
  const [theme] = useTheme();
  console.log('THEME', theme);
  return (
    <header
      className={`
        bg-${Colors[theme].secondary}
      dark:bg-gray-800
        shadow
      `}
    >
      <nav className={`
        flex
        flex-wrap
        items-center
        justify-start
        w-full
        py-4
        md:py-0
        px-4
        text-lg
        stext-gray-700
        text-${Colors[theme].secondaryText}
      `}>
        <Logo />
        <div className="
          flex
          italic
          px-4
          py-4
        ">
          RTK Crud
        </div>

        <div className="
          flex
          flex-grow
          justify-end cursor-pointer
        ">
          <LightDarkToggle onToggle={onToggleMode} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
