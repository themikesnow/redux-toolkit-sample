import { useState } from 'react';
import { useTheme } from '../../../hooks/theme-hook';
import { Colors } from '../../../constants/Styles';

import Logo from '../Logo/Logo';
import Icon, { IconType } from '../Icon/Icon';
import LightDarkToggle from '../Toggle/LightDarkToggle';
import NavbarButton from './NavbarButton';
import EditPerson from '../../../features/person/Person/Edit/EditModal';
import RandomGenerator from './RandomGenerator/RandomGenerator';



interface NavbarProps {
  onToggleMode: Function;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleMode }: NavbarProps) => {
  const [theme] = useTheme();
  const [person, setPerson] = useState(null);
  const [isVisible, setVisible] = useState(false);
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
          justify-end
          gap-2
        ">
          <NavbarButton onClick={() => { setPerson({}); }}>
            <Icon type={IconType.ADD_PERSON} />
          </NavbarButton>
          <NavbarButton onClick={() => {
            setVisible(true);
          }}>
            <Icon type={IconType.RANDOM_PERSONS} />
          </NavbarButton>
          <LightDarkToggle onToggle={onToggleMode} />
        </div>
      </nav>
      <EditPerson
        person={person}
        onSave={(person) => {
          setPerson(null);
        }}
        onCancel={() => { setPerson(null); }}
      />
      <RandomGenerator
        isVisible={isVisible}
        onCancel={() => { setVisible(false); }}
        onOk={() => { setVisible(false); }}
      />
    </header>
  );
}

export default Navbar;
