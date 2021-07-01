import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { add, save, favourites } from '../../../actions/contactActions';
import { modalInp } from './modalInp';
import { validation } from '../../../utils';

import { BsCheckAll, FcCancel } from 'react-icons/all';

import './Modal.css';

const Modal = ({ closeModal, setShow, changeable, setEditable, editable }) => {

  const [err, setErr] = useState("");
  const [state, setState] = useState({ name: "", surname: "", email: "", phone: "", photo: "", selectedRadio: "offline", status: false, favourite: false, id: null });
  const dispatch = useDispatch();

  let changeableArr = useSelector(state => {
    return state;
  });

  useEffect(() => {
    if (editable) {
      setState(changeableArr[changeable])
    }
  }, []);

  const validate = async () => {
    const { name, surname, email, phone, photo } = state;
    const validateParams = { name, surname, email, phone, photo };
    const validator = await validation(state, validateParams);

    return 'ok'; //// validator
  };

  const change = async e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: name === 'status' ? value === "online" : value,
      selectedRadio: name === 'status' ? value : "offline",
    }));
  };

  const create = async () => {
    const valid = await validate();
    if (valid === 'ok') {
      setShow(false);
      state.id = changeableArr.length;
      dispatch(add(state));
    } else {
      setErr(valid);
    }
    
  };

  const saveContact = async obj => {
    const valid = await validate();
    if (valid === 'ok') {
      dispatch(save(obj, changeable));
      setEditable(false);
      setShow(false);
    } else {
      setErr(valid);
    }
  };
  
  return (
    <div className="modal">
      <div className="modal-content">

        <span className="close" onClick={closeModal}>&times;</span>

        {err && <p className="error">{err}</p>}

        {modalInp.map((el, index) => {
          return (
            <div className="modalInp" key={index}>
              <span>{el.title}</span>

              {el.name === "phone" &&
                <div className="phoneCode">
                  <label className="phoneLabel">
                    +374
                  </label>
                </div>}
              <input
                onChange={(e) => change(e)}
                type={el.type}
                placeholder={el.placeholder}
                name={el.name}
                value={state[el.name]}
              />
            </div>
          )
        })}
        <label>Online
          <input
            onChange={(e) => change(e)}
            type="radio"
            name="status"
            value='online'
            checked={state.selectedRadio === "online"}
          />
        </label>

        <label>Offline
          <input
            onChange={(e) => change(e)}
            type="radio"
            name="status"
            value='offline'
            checked={state.selectedRadio === "offline"}
          />
        </label>
        <div className="inpBtns">
          <div className="createIcon">
            <BsCheckAll onClick={editable ? () => saveContact(state) : create} />
          </div>
          <div className="cancelIcon">
            <FcCancel onClick={closeModal} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;
