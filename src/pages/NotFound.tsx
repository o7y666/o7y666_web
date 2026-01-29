import { Link } from 'react-router-dom';

/**
 * 404 页面
 */
const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-6">
      <div className="text-center">
        {/* 404 数字 */}
        <div className="font-heading text-8xl md:text-9xl font-bold text-duck-yellow hand-underline mb-4 tilt-1 inline-block">
          404
        </div>

        {/* 标题 */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
          页面不见了
        </h1>

        {/* 描述 */}
        <p className="font-body text-xl text-text-secondary mb-8 max-w-md mx-auto">
          看起来这个页面被 AI 转移到另一个维度了...
        </p>

        {/* 返回首页按钮 */}
        <Link
          to="/"
          className="btn-hand btn-hand-primary text-xl px-8 py-4 tilt-2"
        >
          返回首页 🏠
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
