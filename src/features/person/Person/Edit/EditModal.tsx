import { useState } from 'react';
import { useUpdatePersonMutation, useAddPersonMutation} from '../../personSlice';
import classnames from 'classnames';

import { useTheme } from '../../../../hooks/theme-hook'
import { Colors } from '../../../../constants/Styles';

import Modal from '../../../../components/Common/Modal/Modal';
import Icon, { IconType } from '../../../../components/Common/Icon/Icon';
import IPerson from '../../../../types/IPerson';



interface EditModalProps {
  className?: string;
  person: IPerson;
  onSave: (person: IPerson) => void,
  onCancel: () => void,
}


const EditModal: React.FC<EditModalProps> = ({ className = '', person, onSave, onCancel }: EditModalProps) => {
  const [theme] = useTheme();
  const [updatePerson] = useUpdatePersonMutation();
  const [addPerson] = useAddPersonMutation();
  
  const [name, setName] = useState<string>(null);
  const [profession, setProfession] = useState<string>(null);

  const handleSave = () => {
    const updatedPerson = {
      id: person.id,
      name: name === null ? person.name : name,
      profession: profession === null ? person.profession : profession,
      picture: ''
    } as IPerson;

    if (updatedPerson.id) {
      updatePerson(updatedPerson);
    } else {
      addPerson(updatedPerson);
    }
    onSave(updatedPerson);
  }


  if (!person) {
    return null;
  }

  return (
    <Modal
      onOk={handleSave}
      onCancel={onCancel}
    >
      <div className="flex justify-center">
        <Icon
          type={IconType.EDIT}
          className={classnames('h-7 w-7', `text-${Colors[theme].tertiaryText}`)}
        />
      </div>
      <div className={`flex flex-col justify-center text-center text-${Colors[theme].primaryText}`}>
        <h2 className={`text-xl font-bold py-4 pb-8 text-${Colors[theme].secondaryText}`}>Details</h2>
        
      </div>

      <div>
        <input
          className="
            w-full
            p-4
            text-sm
            bg-gray-50
            focus:outline-none
            border
            border-gray-200
            rounded
            text-gray-600
          "
          type="text"
          placeholder="Name"
          value={name === null ? person.name : name}
          onChange={(event) => {
            setName(event.target.value || '');
          }}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleSave();
            }
          }}
        />

        <input
          className="
            mt-3
            mb-7
            w-full
            p-4
            text-sm
            bg-gray-50
            focus:outline-none
            border
            border-gray-200
            rounded
            text-gray-600
          "
          type="text"
          placeholder="Profession"
          value={profession === null ? person.profession : profession}
          onChange={(event) => {
            setProfession(event.target.value);
          }}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleSave();
            }
          }}
        />
      </div>
    </Modal>
  );
}

export default EditModal;
