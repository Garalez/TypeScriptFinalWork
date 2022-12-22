import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { userDataRequest } from "../../../../store/userData/userDataAction";
import { removeStorage, setStorage, Task } from "../../../../utils/localStorage";

type Props = {
  taskData: Task,
  index: number,
}

export const TasksRender = ({taskData, index}: Props) => {
  const userName = useAppSelector((state) => state.userData.userName);
  const userTasks = useAppSelector((state) => state.userData.userTasks);
  const dispatch = useAppDispatch();

  const handlerRemove = () => {
    removeStorage(userName, taskData.taskId);
    dispatch(userDataRequest(userName));
  };

  const handlerComplition = () => {
    const arrFromTaskState = JSON.parse(JSON.stringify(userTasks));

    arrFromTaskState.forEach((task: Task) => {
      if (taskData.taskId === task.taskId) {
        task.completion = !task.completion;
        setStorage(userName, arrFromTaskState);
      }
    });
    dispatch(userDataRequest(userName));
  };

  return (
    <>
      <tr className={taskData.completion ? "table-success" : "table-light"}>
        <td>{index + 1}</td>
        <td className="task">
          {taskData.taskName}
        </td>
        <td>{taskData.completion ? 'Выполнено' : 'В процессе'}</td>
        <td>
          <button className="btn btn-danger" onClick={handlerRemove}>
            Удалить
          </button>
          <button className="btn btn-success" onClick={handlerComplition}>
            Завершить
          </button>
        </td>
      </tr>
    </>
  )
};
