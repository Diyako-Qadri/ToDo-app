'use client';
import Header from '@/components/Header';
import UPSs from '@/components/USPs';
import TaskList from '@/components/TaskList';
import NewTask from '@/components/NewTask';
import { defaultTasks } from '@/utils/defaultTasks';
import { useEffect, useState } from 'react';
import { TaskType } from '@/utils/types';

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[] | null>(null);
  const addTask = ( newTask : TaskType) => {
    if (tasks) {
      setTasks([...tasks, newTask]);
    }
  };
  const removeTask = (id: string) => {
    setTasks((prevTasks) => prevTasks ? prevTasks.filter(item => item.id !== id) : []);
  };
  useEffect(() => {
    setTasks(defaultTasks);
  }, []);
  return (
    <>
      <Header />
      <UPSs />
      <TaskList taskItems={tasks} updateTask={removeTask} />
      <NewTask updateFunction={addTask}/>
    </>
  );
}
