import { useAppSelector } from "../../../hooks";
import { TasksRender } from "./TasksRender/TasksRender";

export const TableBody = () => {
  const userTasks = useAppSelector((state) => state.userData.userTasks);

  return (
    <tbody>
      {userTasks.map((task) => <TasksRender key={task.taskId} taskData={task} />)}
    </tbody>
  )
}