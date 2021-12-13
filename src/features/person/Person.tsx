import React from 'react';
import Icon, { IconType } from '../../components/Common/Icon/Icon';
import IPerson from '../../types/IPerson';
import { Colors } from '../../constants/Styles';
import { useTheme } from '../../hooks/theme-hook';

interface PersonProps {
  person: IPerson,
  onEdit: (person: IPerson) => void,
  onDelete: (person: IPerson) => void,
}

const Person: React.FC<PersonProps> = ({ person, onEdit, onDelete }: PersonProps) => {
  const [theme] = useTheme();
  return (
    <div className={`
      p-4
      max-h-60
      shadow-lg
      rounded-lg
      text-center
      bg-${Colors[theme].secondary}
    `}>
      <div className="flex justify-center md:justify-center -smt-16">
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
          src={`https://randomuser.me/api/portraits/med/men/${person.id}.jpg`}
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
          onClick={(event) => { onDelete(person); }}
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
