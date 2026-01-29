/**
 * App 组件
 * 注意：本项目使用 React Router，主入口在 main.tsx
 * 此文件保留用于兼容性
 */
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
