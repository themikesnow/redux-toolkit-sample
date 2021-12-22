import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { Colors } from '../../../constants/Styles';
import { useTheme } from '../../../hooks/theme-hook';


interface NavbarButtonProps {
  onClick: Function;
  children: React.ReactNode;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ onClick, children }: NavbarButtonProps) => {
  const [theme] = useTheme();

  return (
    <button
      className={`
        border
        p-2
        rounded
        hover:text-${Colors[theme].tertiaryTextHover}
        hover:border-${Colors[theme].tertiaryTextHover}
        dark:hover:text-${Colors[theme].primaryTextHover}
        dark:hover:border-${Colors[theme].primaryTextHover}
      `}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default NavbarButton;
