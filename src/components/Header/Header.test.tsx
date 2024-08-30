import { render, screen } from '@testing-library/react';
import Header from '.';

describe('That the header is  rendered correctly', () => {
  test('Renders the Page title', () => {
    render(<Header />);

    const headerText = screen.getByRole('heading', {
      level: 1,
      name: 'To Do List',
    });
    expect(headerText).toBeInTheDocument();
  });

  test('Renders the subtitle component', () => {
    render(<Header />);
    const SubTitleText = screen.getByRole('heading', {
      level: 3,
    });

    expect(SubTitleText).toHaveTextContent('Simplify your Life');
  });
});
