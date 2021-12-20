import classnames from 'classnames';

import Button from '../Form/Button/Button';

import { Colors } from '../../../constants/Styles';
import { useTheme } from '../../../hooks/theme-hook';
import Icon, { IconType } from '../Icon/Icon';
import Person from '../../../features/person/Person';
import { ReactNode } from 'react';


interface LogoProps {
  className?: string;
  children: ReactNode | string;
  onOk: Function;
  onCancel: Function;
}

const Modal: React.FC<LogoProps> = ({ className = '', children, onOk, onCancel }: LogoProps) => {
  const [theme] = useTheme();
  return (
    <div
      className="
        min-w-screen
        h-screen
        animated
        fadeIn
        faster
        fixed
        left-0
        top-0
        flex
        justify-center
        items-center
        inset-0 z-50
        outline-none
        focus:outline-none
        bg-no-repeat
        bg-center
        bg-cover"
      id="modal-id"
    >
   	  <div
        className="
          absolute 
          bg-black
          opacity-80
          inset-0 z-0"
      />
      <div
        className={`
          w-full
          max-w-lg
          p-5
          relative
          mx-auto
          my-auto
          rounded-xl
          shadow-lg
          bg-${Colors[theme].secondary}
        `}
      >
        <div className="">
          <div className="">
            {children}
          </div>
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <Button onClick={(event) => { onCancel(); }}>
              Cancel
            </Button>
            <Button
              isPrimary
              onClick={() => { onOk(); }}
            >
              OK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
