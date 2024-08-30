import { TaskType } from '@/utils/types';

type TaskProps ={
  id: string,
  description: string,
  updateTaskList: (id: string) => void;
}

const Task = ({ id, description, updateTaskList }: TaskProps) => {
  const handleClick = () => {
    updateTaskList(id); 
  };

  return (
    <div className="flex gap-4  my-2" key={id} data-testid="task-item">
      <div className="basis-5/6 p-4 bg-white">{description}</div>
      <button
        className="basis-1/6 p-4 text-red-600 text-2xl font-bold bg-white"
        data-testid="delete-task"
        onClick={handleClick}
      >
        x
      </button>
    </div>
  );
};

export default Task;
