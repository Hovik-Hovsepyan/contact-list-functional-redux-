import { useSelector } from 'react-redux';

import Person from '../Contacts/ContactsItems/Person';

const Favourites = () => {
  
  const state = useSelector(function (state) {
    return state;
  });

  const favouriteContacts = state.filter(favourite => favourite.favourite === true);

  return (
    favouriteContacts.map((el, index) => { 
      return (
        <div key={index}>
          <Person
            obj={el}
          />
        </div>
      );
    })
  );
};

export default Favourites;
