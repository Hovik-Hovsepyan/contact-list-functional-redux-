import { useState } from 'react';
import { useSelector } from 'react-redux';
import ContactSearch from '../ContactSearch';

import Person from '../ContactsItems/Person';

import {search} from '../../../utils';

const Favourites = () => {

  const state = useSelector(function (state) {
    return state;
  });

  const [favSearchText, setFavSearchText] = useState("");
  
  const favouriteContacts = state.filter(favourite => favourite.favourite === true && search(favourite, favSearchText));

  const fav = favouriteContacts.map((el) => {
    return (
      <div key={el.id}>
        <Person
          obj={el}
        />
      </div>
    );
  });

  return (
    <div>
      <ContactSearch onSearch={setFavSearchText} />
      {fav}
    </div>

  );
};

export default Favourites;
