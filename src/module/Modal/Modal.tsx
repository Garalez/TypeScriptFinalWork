import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useAppDispatch } from '../../hooks';
import { userDataRequest } from '../../store/userData/userDataAction';
import style from './Modal.module.scss';

export const Modal = () => {
  const [userName, setUserName] = useState('');
  const [showModal, setShowModal] = useState(true);
  const dispatch = useAppDispatch();

  const registration = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setUserName(e.target.value);
    }
  };

  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setShowModal(!showModal);
    dispatch(userDataRequest(userName));
  };

  return ReactDOM.createPortal(
    showModal && (
      <div className={style.overlay}>
        <div className={style.btnWrapper}>
          <form
            className={style.form}
            action='#'
            onSubmit={(e) => handlerSubmit(e)}
          >
            <h2 className={style.heading}> Здравствуйте! Как вас зовут?</h2>
            <label className={style.label} htmlFor='name'>
              Введите ваше имя:
            </label>
            <input
              className={style.input}
              name='name'
              id='name'
              type='text'
              value={userName}
              onChange={(e) => registration(e)}
              required
            />
            <button className='btn btn-primary' type='submit'>Подтвердить</button>
          </form>
        </div>
      </div>
    ),
    document.getElementById('modal-root') as HTMLElement
  );
};
