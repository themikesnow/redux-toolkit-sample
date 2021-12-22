import React from 'react';
import Icon, { IconType } from '../../components/Common/Icon/Icon';
import IPerson from '../../types/IPerson';
import { Colors } from '../../constants/Styles';
import { useTheme } from '../../hooks/theme-hook';
import classNames from 'classnames';

interface PersonProps {
  person?: IPerson,
  onEdit?: (person: IPerson) => void,
  onDelete?: (person: IPerson) => void,
  isBusy?: boolean,
}

const Person: React.FC<PersonProps> = ({
  person = {} as IPerson,
  onEdit = null,
  onDelete = null,
  isBusy = false
}: PersonProps) => {
  const [theme] = useTheme();
  const imageClassNames: string = `w-20 h-20 object-cover rounded-full border-2 border-${Colors[theme].primary}`;

  return (
    <div className={`
      p-4
      max-h-60
      shadow-lg
      rounded-lg
      text-center
      bg-${Colors[theme].secondary}
      relative
    `}>
      <span className={`
        pt-2 pl-3 absolute top-0 left-0 font-bold
        text-${Colors[theme].primaryText}
      `}>
        {person.id}
      </span>
      <div className="flex justify-center md:justify-center -smt-16">
        {isBusy ? (
          <div
            className={classNames(imageClassNames, Colors[theme].shimmer)}
          />
        ) : (
          <img
            alt="Person"
            className={imageClassNames}
            src={`https://randomuser.me/api/portraits/med/men/${person.id}.jpg`}
          />
        )}
      </div>
      <div>
        <h2 className={classNames(`
          text-2xl
          font-semibold
          mt-5
          text-${Colors[theme].secondaryText}
          h-8
        `, { [Colors[theme].shimmer]: isBusy }
        )}>
          {person.name}
        </h2>
        <p className={classNames(`
            text-sm
            font-medium
            mt-2
            text-${Colors[theme].primaryText}
            h-8
          `, { [Colors[theme].shimmer]: isBusy }
          )}>
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
        {onDelete && (
          <Icon
            type={IconType.DELETE}
            onClick={(event) => { onDelete(person); }}
            className={`
              hover:text-${Colors[theme].tertiaryTextHover}
              dark:hover:text-${Colors[theme].primaryTextHover}
            `}
          />
        )}
        
        {onEdit && (
          <Icon
            type={IconType.EDIT}
            onClick={(event) => { onEdit(person); }}
            className={`
              hover:text-${Colors[theme].tertiaryTextHover}
              dark:hover:text-${Colors[theme].primaryTextHover}
            `}
          />
        )}
      </div>
    </div>
  );
}

export default Person;
