import { fireEvent, render, screen } from '@testing-library/react';
import Home from './page';

describe('test all functionality works', () => {
  it('check the input field an button is rendered', () => {
    render(<Home />);
    const mockData = 'Feed the fish';
    let userInput = screen.getByLabelText('Enter a new task below');
    const addTaskButon = screen.getByTestId('add-button');
    let taskItem = screen.queryAllByTestId('task-item');
    expect(taskItem.length).toBe(3);

    fireEvent.change(userInput, { target: { value: mockData } });
    fireEvent.click(addTaskButon);

    taskItem = screen.queryAllByTestId('task-item');
    expect(taskItem.length).toBe(4);
    expect(taskItem[3]).toHaveTextContent('Feed the fish');

    const deleteTaskBtn = screen.queryAllByTestId('delete-task');
    fireEvent.click(deleteTaskBtn[3]);

    taskItem = screen.queryAllByTestId('task-item');
    expect(taskItem[3]).not.toBe('Feed the fish');
    expect(taskItem.length).toBe(3);
  });
  test('check if the add btn work correctly', () => {
    render(<Home />);
    const mockData = 'Feed the fish';
    let userInput = screen.getByLabelText('Enter a new task below');
    let taskItem = screen.queryAllByTestId('task-item');
    expect(taskItem.length).toBe(3);
    const addTaskButon = screen.getByTestId('add-button');
    fireEvent.change(userInput, { target: { value: mockData } });
    fireEvent.click(addTaskButon);

    taskItem = screen.queryAllByTestId('task-item');
    expect(taskItem.length).toBe(4);
  });

  test('check delete task button work correctly', () => {
    render(<Home />);
    let taskItem = screen.queryAllByTestId('task-item');
    expect(taskItem.length).toBe(3);

    const deleteTaskBtn = screen.queryAllByTestId('delete-task');
    fireEvent.click(deleteTaskBtn[0]);
    taskItem = screen.queryAllByTestId('task-item');
    expect(taskItem.length).toBe(2);
  });
});
