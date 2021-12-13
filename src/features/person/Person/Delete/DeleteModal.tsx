import classnames from 'classnames';

import { useTheme } from '../../../../hooks/theme-hook'
import { Colors } from '../../../../constants/Styles';

// import Button from '../../../../components/Common/Form/Button/Button';
import Modal from '../../../../components/Common/Modal/Modal';
import Icon, { IconType } from '../../../../components/Common/Icon/Icon';
import IPerson from '../../../../types/IPerson';



interface DeleteModalProps {
  className?: string;
  person: IPerson;
  onDelete: (person: IPerson) => void,
  onCancel: () => void,
  // onClick?: (event: React.MouseEvent<HTMLElement>) => void,
}

const DeleteModal: React.FC<DeleteModalProps> = ({ className = '', person, onDelete, onCancel }: DeleteModalProps) => {
  const [theme] = useTheme();
  if (!person) {
    return null;
  }

  return (
    <Modal
      onOk={onDelete}
      onCancel={onCancel}
    >
      <div className="flex justify-center">
        <Icon
          type={IconType.CONFIRM}
          className={classnames('h-10 w-10', `text-${Colors[theme].tertiaryText}`)}
        />
      </div>
      <div className="flex flex-col justify-center text-center">
        <h2 className="text-xl font-bold py-4 pb-8">Are you sure?</h2>
        <p className="text-sm text-gray-500 px-8 pb-4">
          Do you really want to delete the below person?
        </p>
        <p className="text-sm text-gray-500 px-8 pb-4 text-left">
          <span className="inline-block w-48 text-right font-bold px-2">
            Name:
          </span>  
          <span className="ws-40">
            {person.name}
          </span>
        </p>
        <p className="text-sm text-gray-500 px-8 pb-4  text-left">
          <span className="inline-block w-48 text-right font-bold px-2">
          Profession:
          </span>  
          <span className="sw-56">
            {person.profession}
          </span>
        </p>
      </div>
    </Modal>
  );
}

export default DeleteModal;
