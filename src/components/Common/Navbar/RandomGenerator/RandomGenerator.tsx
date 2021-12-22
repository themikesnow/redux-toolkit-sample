import { useState } from 'react';
import faker from 'faker';
import { useAddPersonMutation} from '../../../../features/person/personSlice';
import Icon, { IconType } from '../../Icon/Icon';
import Modal from '../../Modal/Modal';
import { useTheme } from '../../../../hooks/theme-hook';
import { Colors } from '../../../../constants/Styles';



interface RandomGeneratorProps {
  isVisible: boolean;
  onOk: Function;
  onCancel: Function;
}

const RandomGenerator: React.FC<RandomGeneratorProps> = ({ isVisible, onOk, onCancel}: RandomGeneratorProps) => {
  const [theme] = useTheme();
  const [addPerson] = useAddPersonMutation();
  const [counter, setCounter] = useState(1);
  if (!isVisible) {
    return null;
  }

  return (
    <Modal
      onOk={() => {
        Array.from({ length: counter }).forEach((x, index) => {
          const randomPerson = {
            name: faker.name.findName(),
            profession: faker.name.jobTitle(),
          }
          addPerson(randomPerson);
        });
        onOk();
      }}
      onCancel={onCancel}
    >
      <div className="flex justify-center pt-3">
        <h2 className={`text-lg font-bold text-${Colors[theme].secondaryText}`}>
          How many random records would you like to create?
        </h2>
      </div>
      
      <div className="
        flex
        gap-4
        justify-center
        items-center
        text-gray-500
        bordered
        p-10
      ">
        <Icon
          type={IconType.MINUS}
          onClick={() => { setCounter(counter + 1); }}
        />
        <span className="text-4xl">
          {counter}
        </span>
        
        <Icon
          type={IconType.PLUS}
          onClick={() => { setCounter(counter + 1); }}
        />
      </div>
    </Modal>
  );
}

export default RandomGenerator;
