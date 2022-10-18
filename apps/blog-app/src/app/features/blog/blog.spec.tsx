import { render } from '@testing-library/react';

import BlogPage from './blog';

describe('Blog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogPage />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<BlogPage />);

    expect(getByText(/Blog Details/gi)).toBeTruthy();
  });
});
