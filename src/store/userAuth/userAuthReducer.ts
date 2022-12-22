import { Task } from './../../utils/localStorage';
import {
  AUTH_REQUEST,
  TASKS_REQUEST,
} from './userAuthAction';

interface InitialState {
  userName: string,
  userTasks: Task[] | [],
};

interface UserActions {
  type: string,
  userName: string,
  userTasks: Task[] | [],
};

const initialState: InitialState = {
  userName: '',
  userTasks: [],
};

export const authReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        userName: action.userName,
      };
    case TASKS_REQUEST:
      return {
        ...state,
        userTasks: action.userTasks,
      };

    default:
      return state;
  }
};
