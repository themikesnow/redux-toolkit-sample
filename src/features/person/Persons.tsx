import React, { useState } from 'react';
import IPerson from '../../types/IPerson';
import { useGetPersonsQuery, useDeletePersonMutation } from './personSlice';
import Person from './Person';
import DeleteModal from './Person/Delete/DeleteModal';

// interface PersonProps {
//   person: IPerson,
//   onEdit: (person: IPerson) => void,
// }

const Persons: React.FC = () => {
  const { data = [], isFetching } = useGetPersonsQuery();
  const [deletePerson] = useDeletePersonMutation();
  const [personToBeDeleted, setPersonToBeDeleted] = useState<IPerson>(null);




  console.log('asdfadsfadsf', data);
  return (
    <>
      {data.map(person => { 
        return (
          <Person
            person={person}
            onEdit={() => {}}
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
    </>
  );
}

export default Persons;
