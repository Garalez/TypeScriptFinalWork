import { getStorage } from './../../utils/localStorage';
import type { AppDispatch } from "../index";

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const TASKS_REQUEST = 'TASKS_REQUEST';

export const userNameRequestAction = (userName: string) => ({
  type: AUTH_REQUEST,
  userName,
});

export const userTasksRequestAction = (userTasks: []) => ({
  type: TASKS_REQUEST,
  userTasks,
});


export const userDataRequest = (userName: string) => (dispatch: AppDispatch) => {
  dispatch(userNameRequestAction(userName));
  const userTasks = getStorage(userName);
  dispatch(userTasksRequestAction(userTasks));
};