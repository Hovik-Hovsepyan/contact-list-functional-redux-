import { useDispatch } from 'react-redux';

import { del } from '../../../../actions/contactActions';

import {
  FaUserEdit,
  GiCancel,
  GrStatusGoodSmall,
} from 'react-icons/all';

import './Person.css'

const Person = ({ obj, index, setShow, setEditable, setChangeable }) => {
  const { photo, name, surname, email, phone, status } = obj;
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(del(index));
  };

  const editContact = () => {
    setEditable(true);
    setShow(true);
    setChangeable(index);
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
        <div className="icons">
          <div className="deleteIcon">
            <GiCancel onClick={deleteContact} />
          </div>
          <div className="editIcon">
            <FaUserEdit onClick={editContact} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
