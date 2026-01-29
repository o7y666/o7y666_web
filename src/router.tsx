import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import NotFound from './pages/NotFound';

/**
 * 路由配置
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'projects/:slug',
        element: <ProjectPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
