import React from 'react';
import {
  MoonIcon,
  SunIcon,
  PencilIcon,
  TrashIcon,
  ExclamationCircleIcon,
  UserAddIcon,
  TrendingUpIcon,
  PlusIcon,
  MinusIcon,
  SpeakerphoneIcon
} from '@heroicons/react/outline';
import classnames from 'classnames';

const defaultClass = 'h-5 w-5';

export enum IconType {
  EDIT,
  LIGHT_THEME,
  DARK_THEME,
  DELETE,
  CONFIRM,
  ADD_PERSON,
  RANDOM_PERSONS,
  PLUS,
  MINUS,
  ATTENTION
}

interface IconProps {
  type: IconType,
  onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  className?: string,
}


const Icon: React.FC<IconProps> = ({ type, onClick, className = '' }: IconProps) => {
  let theIcon;
  switch (type) {
    case IconType.EDIT:
      theIcon = <PencilIcon className={classnames(defaultClass, { [className]: !!className })} />;
      break;
    case IconType.DARK_THEME:
      theIcon = <MoonIcon className={classnames(defaultClass, {[className]: !!className })} />;
      break;
    case IconType.LIGHT_THEME:
      theIcon = <SunIcon className={classnames(defaultClass, {[className]: !!className })} />;
      break;
    case IconType.DELETE:
      theIcon = <TrashIcon className={classnames(defaultClass, {[className]: !!className })} />;
      break;
    case IconType.CONFIRM:
      theIcon = <ExclamationCircleIcon className={classnames(defaultClass, {[className]: !!className })} />;
      break;
    case IconType.ADD_PERSON:
      theIcon = <UserAddIcon className={classnames(defaultClass, {[className]: !!className })} />;
      break;
    case IconType.RANDOM_PERSONS:
      theIcon = <TrendingUpIcon className={classnames(defaultClass, {[className]: !!className })} />;
      break;
    case IconType.PLUS:
      theIcon = <PlusIcon className={classnames(defaultClass, {[className]: !!className })} />;
      break;
    case IconType.MINUS:
      theIcon = <MinusIcon className={classnames(defaultClass, {[className]: !!className })} />;
      break;
    case IconType.ATTENTION:
      theIcon = <SpeakerphoneIcon className={classnames(defaultClass, {[className]: !!className })} />;
      break;
    default:
      return null;
  }

  if (typeof onClick === 'function') {
    return (
      <button
        className="flex justify-center px-1"
        onClick={(event) => { event.preventDefault();  onClick(event); }}
      >
        {theIcon}
      </button>
    );
  }

  return theIcon;

}

export default Icon;
