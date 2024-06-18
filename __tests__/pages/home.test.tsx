import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../../src/app/page';

describe('Home page', () => {
  it('renders page unchanged', () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });

  it('renders a heading and description', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', {
      level: 1,
      name: "Hello, I'm your Next.js App",
    });

    const description = screen.getByText('Make web great again!');

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
