import { useDispatch, useSelector } from 'react-redux';

import Person from '../Contacts/ContactsItems/Person';

const Favourites = () => {

  const state = useSelector(function (state) {
    return state;
  });

  const favouriteContacts = state.filter(favourite => favourite.favourite);
  
  return (
    favouriteContacts.map((el, index) => {
      return (
        <div key={index}>
          <Person
            obj={el}
            favIndex={index}
          />
        </div>
      );
    })
  );
};

export default Favourites;
