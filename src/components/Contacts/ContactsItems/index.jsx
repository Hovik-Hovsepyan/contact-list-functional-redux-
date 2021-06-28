import Person from './Person';

import { useSelector } from 'react-redux';

const ContactsItems = ({ setShow, setEditable, setChangeable }) => {
  const state = useSelector(function (state) {
    return state;
  });

  return (
    state.map((el, index) => {
      return (
        <Person
          key={index}
          obj={el}
          index={index}
          setShow={setShow}
          setEditable={setEditable}
          setChangeable={setChangeable}
        />
      );
    })
  );
};

export default ContactsItems;
