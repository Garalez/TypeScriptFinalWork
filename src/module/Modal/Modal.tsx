import ReactDOM from 'react-dom';
import style from './Modal.module.scss';

export const Modal = () => {
  return ReactDOM.createPortal (
    <div className={style.overlay}>
      <div className={style.btnWrapper}>
        <form className={style.form} action="#">
          <h2 className={style.heading}> Здравствуйте! Как вас зовут?</h2>
          <label className={style.label} htmlFor="name">Введите ваше имя:</label>
          <input className={style.input} name="name" id="name" type="text" required />
        </form>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  )
}