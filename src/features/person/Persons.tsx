import React, { useState } from 'react';
import IPerson from '../../types/IPerson';
import { useGetPersonsQuery, useDeletePersonMutation, useUpdatePersonMutation } from './personSlice';
import Person from './Person';
import DeleteModal from './Person/Delete/DeleteModal';
import EditPerson from './Person/Edit/EditModal';

// interface PersonProps {
//   person: IPerson,
//   onEdit: (person: IPerson) => void,
// }

const Persons: React.FC = () => {
  const { data = [], isFetching } = useGetPersonsQuery();
  const [deletePerson] = useDeletePersonMutation();
  const [updatePerson] = useUpdatePersonMutation();
  const [personToBeDeleted, setPersonToBeDeleted] = useState<IPerson>(null);
  const [personToBeUpdated, setPersonToBeUpdated] = useState<IPerson>(null);

  if (isFetching) {
    return (
      <>
        {Array.from({ length: 8 }, (x): React.ReactElement  => <Person isBusy />)}
      </>
    );
  }
  return (
    <>
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
          deletePerson(person.id);
          setPersonToBeDeleted(null);
        }}
        onCancel={() => { setPersonToBeDeleted(null); }}
      />
      <EditPerson
        person={personToBeUpdated}
        onSave={(person) => {
          updatePerson(person.id);
          setPersonToBeUpdated(null);
        }}
        onCancel={() => { setPersonToBeDeleted(null); }}
      />
    </>
  );
}

export default Persons;
