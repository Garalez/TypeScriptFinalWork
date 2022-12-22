export interface Task {
  taskId: string;
  taskName: string;
  completion: boolean;
}

export const getStorage = (key: string) => {
  const dataFromStorage = JSON.parse(localStorage.getItem(key)!);
  return dataFromStorage === null ? [] : dataFromStorage;
};

export const setStorage = (key: string, obj: Task | [] | Task[]) => {
  const getData = getStorage(key);
  if (Array.isArray(obj)) {
    getData.splice(0, getData.length, ...obj);
  } else {
    getData.push(obj);
  }

  const newData = JSON.stringify(getData);
  localStorage.setItem(key, newData);
};

export const removeStorage = (usersName: string, taskId: string) => {
  const getDataFromStorage = getStorage(usersName);

  getDataFromStorage.forEach((item: Task, index: number) => {
    if (taskId === item.taskId) {
      getDataFromStorage.splice([index], 1);
      setStorage(usersName, getDataFromStorage);
    }
  });
};
