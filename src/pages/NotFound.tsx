import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '../components/Button';
import { PageTransition } from '../components/PageTransition';

export function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold text-[#1D1D1F] mb-4">404</h1>
        <p className="text-xl text-[#86868b] mb-8">
          抱歉，您访问的页面不存在。
        </p>
        <Link to="/">
          <Button variant="primary">
            <Home className="inline-block mr-2" size={20} />
            返回首页
          </Button>
        </Link>
      </div>
    </PageTransition>
  );
}
