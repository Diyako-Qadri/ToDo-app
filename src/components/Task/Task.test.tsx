import { fireEvent, render, screen } from '@testing-library/react';
import Task from '.';

test('The props rendered correctly', () => {
  const mockData = { id: '1', description: 'Does this work' };
  render(<Task updateTaskList={()=> {}} {...mockData} />);
  const task = screen.getByTestId('task-item');

  const deleteButton = screen.getByRole('button');

  expect(task).toHaveTextContent(mockData.description);
  expect(deleteButton).toBeInTheDocument();

  fireEvent.click(deleteButton);

  const taskAfterDelete = screen.queryAllByRole(mockData.description);
  expect(taskAfterDelete.length).toBe(0);
});


