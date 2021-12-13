import React, { useState } from 'react';
import classnames from 'classnames';
import Navbar from '../Common/Navbar/Navbar';
// import Person from '../Person/Person';
import Container from '../Common//Container/Container';
import Modal from '../Common/Modal/Modal';
import { useTheme } from '../../hooks/theme-hook';
import  Persons from '../../features/person/Persons';

import IPerson from '../../types/IPerson';

const person = {
  name: 'Miguel',
  profession: 'Software Developer'
};

const onEdit = (person: IPerson) : void =>  {
    console.log('Person To be edited: ', person);
}

function App() {
  const [theme, setTheme] = useTheme();
  
  return (
    <div className={classnames(theme, 'bg-gray-100 w-full min-h-screen m-0 font-sans subpixel-antialiased')}>
      <Navbar onToggleMode={(isEnabled: boolean) => { setTheme(theme === 'light' ? 'dark' : 'light'); }}/>
      <Container>
        {/* <Person person={person} onEdit={onEdit}/> */}
        <Persons />
      </Container>
      {/* <Modal /> */}
    </div>
  );
}

export default App;
