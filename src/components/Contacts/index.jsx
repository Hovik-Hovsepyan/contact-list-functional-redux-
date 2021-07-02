import React, { useState } from 'react';

import Modal from './Modal';
import ContactsItems from './ContactsItems/index';

import { BsFillPersonPlusFill } from 'react-icons/bs';

import './Contacts.css';
import { useSelector } from 'react-redux';

const Contacts = () => {
  const [show, setShow] = useState(false);
  const [editable, setEditable] = useState(false);
  const [changeable, setChangeable] = useState(null);

  const closeModal = () => {
    setShow(false);
    setEditable(false);
  };

  return (
    <div className="contacts">
      <div className="addContact">
        <BsFillPersonPlusFill onClick={() => setShow(true)} />
      </div>

      <ContactsItems
        setShow={setShow}
        setEditable={setEditable}
        setChangeable={setChangeable}
      />
      {show && 
        <Modal
          closeModal={closeModal}
          changeable={changeable}
          setShow={setShow}
          editable={editable}
          setEditable={setEditable}
        />
      }
    </div>
  );
};

export default Contacts;



