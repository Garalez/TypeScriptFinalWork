import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { userNameRequest } from "../../../../store/userAuth/userAuthAction";
import { removeStorage, Task } from "../../../../utils/localStorage";

type Props = {
  taskData: Task,
}

export const TasksRender = ({taskData}: Props) => {
  const userName = useAppSelector((state) => state.userData.userName);
  const dispatch = useAppDispatch();

  const handlerRemove = () => {
    removeStorage(userName, taskData.taskId);
    dispatch(userNameRequest(userName));
  };

  return (
    <>
      <tr className={taskData.completion ? "table-success" : "table-light"}>
        <td>1</td>
        <td className="task">
          {taskData.taskName}
        </td>
        <td>{taskData.completion ? 'Выполнено' : 'В процессе'}</td>
        <td>
          <button className="btn btn-danger" onClick={handlerRemove}>
            Удалить
          </button>
          <button className="btn btn-success">
            Завершить
          </button>
        </td>
      </tr>
    </>
  )
};
