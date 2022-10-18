import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import BlogPage from './features/blog/blog';
import CreateBlogPage from './features/createBlog/createBlog';
import HomePage from './features/home/home';


const AppWrapper = styled.div`
   background: var(--background-color);
   height: 100%;
`;

const Wrapper = styled.div`
  padding: 1.5rem;
  margin: auto;
  /* width: 75vw; */
`;

export function App() {
    return (
        <AppWrapper>
            <Header />
            <Wrapper>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="blogs">
                        <Route path=':id' element={ <BlogPage /> }/>
                        <Route path='new' element={ <CreateBlogPage /> }/>
                    </Route>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </Wrapper>
        </AppWrapper>
    );
}

export default App;
