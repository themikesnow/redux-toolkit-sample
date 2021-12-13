import classnames from 'classnames';

import Button from '../Form/Button/Button';

import { Colors } from '../../../constants/Styles';
import { useTheme } from '../../../hooks/theme-hook';
import Icon, { IconType } from '../Icon/Icon';
import Person from '../../../features/person/Person';


interface LogoProps {
  className?: string;
}

const Modal: React.FC<LogoProps> = ({ className = '' }: LogoProps) => {
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
          <div className="text-center p-5 flex-auto justify-center">
           <div className="flex justify-center">
            <Icon
              type={IconType.CONFIRM}
              className={classnames('h-10 w-10', `text-${Colors[theme].tertiaryText}`)}
            />
           </div>
            <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
            <p className="text-sm text-gray-500 px-8">
              Do you really want to delete the below person?
            </p>
            <span className="text-sm text-gray-500 px-8">
              {/* <b>Name:</b>{person.name} */}
            </span>    

          </div>
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <Button>
              Cancel
            </Button>
            <Button isPrimary>
              OK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
