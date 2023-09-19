import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from '../layouts';

import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import About from '../pages/About';
import NotFound from '../components/Errors/404';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  ),
  { basename: '/about' }
);
