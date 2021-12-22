import React, { useState } from 'react';
import IPerson from '../../types/IPerson';
import { useGetPersonsQuery } from './personSlice';
import Container from '../../components/Common/Container/Container';
import Person from './Person';
import DeleteModal from './Person/Delete/DeleteModal';
import EditPerson from './Person/Edit/EditModal';
import { useTheme } from '../../hooks/theme-hook'
import { Colors } from '../../constants/Styles';
import Icon, { IconType } from '../../components/Common/Icon/Icon'


const Persons: React.FC = () => {
  const [theme] = useTheme();
  const { data = [], isFetching } = useGetPersonsQuery();
  
  const [personToBeDeleted, setPersonToBeDeleted] = useState<IPerson>(null);
  const [personToBeUpdated, setPersonToBeUpdated] = useState<IPerson>(null);

  if (isFetching) {
    return (
      <Container>
        {Array.from({ length: 8 }, (x): React.ReactElement  => <Person isBusy />)}
      </Container>
    );
  }
  if (data.length === 0) {
    return (
      <Container className="flex">
      <div className={`
        flex
        flex-col
        justify-center
        items-center
        h-96
        text-${Colors[theme].secondaryText}
      `}>
        <Icon className="h-8 w-8 mb-4" type={IconType.ATTENTION} />
        <h2 className={`
          text-lg
          font-bold
          pb-8
          w-96
        `}>
          Wait what!!!? There are not persons on the system yet... create data using the buttons on the navbar!
        </h2>
      </div>
      </Container>
    );
  }
  return (
    <Container>
      {data.map(person => { 
        return (
          <Person
            key={person.id}
            person={person}
            onEdit={setPersonToBeUpdated}
            onDelete={setPersonToBeDeleted}
          />
        );
      })}
      <DeleteModal
        person={personToBeDeleted}
        onDelete={(person) => {
          setPersonToBeDeleted(null);
        }}
        onCancel={() => { setPersonToBeDeleted(null); }}
      />

      <EditPerson
        person={personToBeUpdated}
        onSave={(person) => {
          setPersonToBeUpdated(null);
        }}
        onCancel={() => { setPersonToBeUpdated(null); }}
      />
    </Container>
  );
}

export default Persons;
