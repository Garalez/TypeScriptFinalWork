import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { userNameRequest } from '../../store/userAuth/userAuthAction';
import { setStorage } from '../../utils/localStorage';
import { Task } from '../../utils/localStorage';

export const Form = () => {
  const userName = useAppSelector((state) => state.userData.userName);
  const [taskName, setTaskName] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const dispatch = useAppDispatch();

  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const taskData: Task = {
      taskId: Math.random().toString().substring(2, 10),
      taskName: taskName,
      completion: false,
    };
    setStorage(userName, taskData);
    dispatch(userNameRequest(userName));
    setTaskName('');
    setIsBtnDisabled(true);
  };

  const handlerChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setTaskName(e.target.value);
      e.target.value.length > 0 ? setIsBtnDisabled(false) : setIsBtnDisabled(true);
    }
  };

  const handlerClear = () => {
    setStorage(userName, []);
    dispatch(userNameRequest(userName));
  };

  return (
    <form className='d-flex align-items-center mb-3' onSubmit={handlerSubmit}>
      <label className='form-group me-3 mb-0'>
        <input
          type='text'
          className='form-control'
          placeholder='ввести задачу'
          onChange={(e) => handlerChange(e)}
          value={taskName}
        />
      </label>

      <button type='submit' className='btn btn-primary me-3' disabled={isBtnDisabled}>
        Сохранить
      </button>

      <button type='reset' className='btn btn-warning' onClick={handlerClear}>
        Очистить
      </button>
    </form>
  );
};
