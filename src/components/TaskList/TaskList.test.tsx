import { render, screen } from '@testing-library/react';
import TaskList from '.';
import { defaultTasks } from '@/utils/defaultTasks';

describe('The Task list is render', () => {
  it('Checks the task list container is rendered', () => {
    render(<TaskList updateTask={()=> {}} taskItems={defaultTasks} />);

    const taskList = screen.getByTestId('task-list');
    expect(taskList).toBeInTheDocument();
  });
  it('Check that 3 default task rendered', () => {
    render(<TaskList updateTask={()=> {}} taskItems={defaultTasks} />);

    const deafaultTasks = screen.queryAllByTestId('task-item');
    expect(deafaultTasks.length).toBe(3);
  });
  it('Check that the second default task has a specefic title', () => {
    render(<TaskList updateTask={()=> {}} taskItems={defaultTasks} />);

    const deafaultTasks = screen.queryAllByTestId('task-item');
    expect(deafaultTasks[1]).toHaveTextContent('Hands in assignments');
  });
});
