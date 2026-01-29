import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

/**
 * 页面布局组件
 * 包含 Header、主内容区和 Footer
 */
const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
