import React from 'react';
import Icon, { IconType } from '../Icon/Icon';
import IPerson from '../../types/IPerson';
import { Colors } from '../../constants/Styles';
import { useTheme } from '../../hooks/theme-hook';

interface PersonProps {
  person: IPerson,
  onEdit: (person: IPerson) => void,
}

const Person: React.FC<PersonProps> = ({ person, onEdit }: PersonProps) => {
  const [theme] = useTheme();
  return (
    <div className={`
      max-h-44
      py-4
      px-4
      my-20
      h-screen
      shadow-lg
      rounded-lg
      text-center
      bg-${Colors[theme].secondary}
    `}>
      <div className="flex justify-center md:justify-center -mt-16">
        <img
          alt="Profile"
          className={`
            w-20
            h-20
            object-cover
            rounded-full
            border-2
            border-${Colors[theme].primary}
          `}
          src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        />
      </div>
      <div>
        <h2 className={`
          text-3xl
          font-semibold
          pt-5
          text-${Colors[theme].secondaryText}
        `}>
          {person.name}
        </h2>
        <p className={`
            text-lg
            font-medium
            mt-2
            text-${Colors[theme].primaryText}
          `}>
          {person.profession}
        </p>
        
      </div>
      <div className={`
        flex
        justify-end
        mt-3
        text-xl
        font-medium
        text-${Colors[theme].tertiaryText}
        dark:text-${Colors[theme].primaryText}
      `}>
        <Icon
          type={IconType.DELETE}
          onClick={(event) => { onEdit(person); }}
          className={`
            hover:text-${Colors[theme].tertiaryTextHover}
            dark:hover:text-${Colors[theme].primaryTextHover}
          `}
        />
        <Icon
          type={IconType.EDIT}
          onClick={(event) => { onEdit(person); }}
          className={`
            hover:text-${Colors[theme].tertiaryTextHover}
            dark:hover:text-${Colors[theme].primaryTextHover}
          `}
        />
      </div>
    </div>
  );
}

export default Person;
