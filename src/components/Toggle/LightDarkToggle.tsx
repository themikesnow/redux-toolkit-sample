import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { Colors } from '../../constants/Styles';
import { useTheme } from '../../hooks/theme-hook';


interface LightDarkToggleProps {
  onToggle: Function;
}

const LightDarkToggle: React.FC<LightDarkToggleProps> = ({ onToggle }: LightDarkToggleProps) => {
  const [theme] = useTheme();
  const TheIcon = theme === 'dark' ? SunIcon : MoonIcon;

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
        onToggle();
      }}
    >
      <TheIcon className="h-5 w-5" />
    </button>
  );
}

export default LightDarkToggle;
