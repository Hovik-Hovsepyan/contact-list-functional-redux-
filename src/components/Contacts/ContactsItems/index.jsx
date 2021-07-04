import { useSelector } from 'react-redux';

import Person from './Person';

import {search} from '../../../utils';

const ContactsItems = ({ setShow, setEditable, setChangeable, searchText }) => {
  
  const state = useSelector(state => state);

  const allContact = state.filter(el => search(el, searchText))

  return (
    allContact.map((el) => {
      return (
        <div key={el.id}>
          <Person
            obj={el}
            setShow={setShow}
            setEditable={setEditable}
            setChangeable={setChangeable}
          />
        </div>
      );
    })
  );
};

export default ContactsItems;
