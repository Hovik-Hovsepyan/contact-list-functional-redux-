import { useSelector } from 'react-redux';

import Person from './Person';

const ContactsItems = ({ setShow, setEditable, setChangeable }) => {
  const state = useSelector(function (state) {
    return state;
  });

  return (
    state.map((el, index) => {
      return (
        <div key={index}>
          <Person
            obj={el}
            index={index}
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
