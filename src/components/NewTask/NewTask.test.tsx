import { fireEvent, render, screen } from '@testing-library/react';
import NewTask from '.';

describe('New task functionality works as expected', () => {
  it('check the input field an button is rendered', () => {
    render(<NewTask />);
    const userInput = screen.getByLabelText('Enter a new task below');
    const button = screen.getByRole('button');

    expect(userInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('User input is saved in state', () => {
    render(<NewTask />);
    const mockData = 'Feed the fish';
    let userInput = screen.getByLabelText('Enter a new task below');
    expect((userInput as HTMLInputElement).value).toBe('');

    fireEvent.change(userInput, { target: { value: mockData } });

    userInput = screen.getByLabelText('Enter a new task below');
    expect((userInput as HTMLInputElement).value).toBe(mockData);
  });
});
