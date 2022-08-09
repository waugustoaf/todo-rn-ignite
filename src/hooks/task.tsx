import { useMemo, useState } from 'react';

export interface ITask {
  id: number;
  description: string;
  done: boolean;
}

export function useTask() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const doneTasks = useMemo(() => tasks.filter((task) => task.done), [tasks]);

  function addTask(description: string) {
    const task: ITask = {
      id: Math.round(Math.random() * 999999),
      description,
      done: false,
    };

    setTasks((prevState) => [task, ...prevState]);
  }

  function removeTask(id: number) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  function toggleTask(id: number) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          task.done = !task.done;
        }

        return task;
      }),
    );
  }

  return { tasks, doneTasks, addTask, removeTask, toggleTask };
}
