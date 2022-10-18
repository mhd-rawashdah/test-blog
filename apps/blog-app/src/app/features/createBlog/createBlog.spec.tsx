import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import CreateBlogPage from './createBlog';

describe('Create Blog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
          <CreateBlogPage />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
        <BrowserRouter>
            <CreateBlogPage />
        </BrowserRouter>
    );

    expect(getByText(/Create New Blog/gi)).toBeTruthy();
  });
});
