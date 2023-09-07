import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts';

import Home from '@/pages/Home';
import Projects from '@/pages/Projects';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
]);
