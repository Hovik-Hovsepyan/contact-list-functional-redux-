import React, { useState } from 'react';

import Modal from './Modal';
import ContactsItems from './ContactsItems/index';

import { BsFillPersonPlusFill } from 'react-icons/bs';

import './Contacts.css';
import { useSelector } from 'react-redux';
import ContactSearch from './ContactSearch';

const Contacts = () => {
  const [show, setShow] = useState(false);
  const [editable, setEditable] = useState(false);
  const [changeable, setChangeable] = useState(null);
  const [searchText, setSearchText] = useState("");

  const closeModal = () => {
    setShow(false);
    setEditable(false);
  };

  return (
    <div className="contacts">
      <div className="addContact">
        <BsFillPersonPlusFill onClick={() => setShow(true)} />
      </div>
      <ContactSearch onSearch={setSearchText} />

      <ContactsItems
        setShow={setShow}
        setEditable={setEditable}
        setChangeable={setChangeable}
        searchText={searchText}
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



