import { useDispatch, useSelector } from 'react-redux';

import { del, favourites } from '../../../../actions/contactActions';

import {
  FaUserEdit,
  GiCancel,
  GrStatusGoodSmall,
  MdFavorite,
} from 'react-icons/all';

import './Person.css'

const Person = ({ obj, setShow, setEditable, setChangeable }) => {
  const { photo, name, surname, email, phone, status, favourite, id } = obj;
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(del(id));
  };

  const editContact = () => {
    setChangeable(id);
    setEditable(true);
    setShow(true);
  };

  const favouriteContact = () => {
    dispatch(favourites(id));
  };

  return (
    <div className="person">
      <div className="pers">
        <div className="image">
          <img src={photo} className="img" alt={photo} />
          {status ? <div className="online"><GrStatusGoodSmall /></div>
                  : <div className="offline"><GrStatusGoodSmall /></div>}
        </div>
        <div className="info">
          <div className="fullName">
            <p>{name}</p>
            <p>{surname}</p>
          </div>
          <div className="contact">
            <a href={`https://${email}`} className="links">{email}</a>
            <a href={`tel:${phone}`} className="links">(+374) {phone}</a>
          </div>
        </div>
        {setShow === undefined  ? (
                                  <div className={ `favouriteIcon ${favourite && "active" } ${setShow === undefined && "fav" } `} >
                                    <MdFavorite onClick={favouriteContact} />
                                  </div>
                                  ) 
                                :
                                  ( <div className="icons">
                                      <div className="deleteIcon">
                                        <GiCancel onClick={deleteContact} />
                                      </div>
                                      <div className={`favouriteIcon ${favourite && "active"} `} >
                                        <MdFavorite onClick={favouriteContact} />
                                      </div>
                                      <div className="editIcon">
                                        <FaUserEdit onClick={editContact} />
                                      </div>
                                    </div>
                                  )

        }
      </div>
    </div>
  );
};

export default Person;
