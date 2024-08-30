import { TaskType } from '@/utils/types';
import Task from '../Task';

type TaskListsProps = {
    taskItems: TaskType[] | null,
    updateTask: (id: string)=> void
}
const TaskList = ({taskItems, updateTask}: TaskListsProps) => {

  return (
    <div className="bg-YellowBg p-6 my-4 text-start" data-testid="task-list">
      {taskItems && taskItems.map(item => <Task updateTaskList={updateTask} key={item.id} {...item} />)}
    </div>
  );
};

export default TaskList;
