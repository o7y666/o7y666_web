import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';

/**
 * 导航栏组件
 */
const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm py-4 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 tilt-1">
          <div className="w-10 h-10 bg-duck-yellow hand-border flex items-center justify-center shadow-hand">
            <span className="text-xl">🦆</span>
          </div>
          <span className="font-heading text-2xl font-bold text-text-primary">
            {siteConfig.name}
          </span>
        </Link>

        {/* 导航链接 */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="font-hand text-lg text-text-primary hover:text-text-secondary transition-colors"
          >
            首页
          </Link>
          <Link
            to="/#projects"
            className="font-hand text-lg text-text-primary hover:text-text-secondary transition-colors"
          >
            项目
          </Link>
          <Link
            to="/#about"
            className="font-hand text-lg text-text-primary hover:text-text-secondary transition-colors"
          >
            关于
          </Link>
        </nav>

        {/* GitHub 链接 */}
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hand btn-hand-primary text-base px-4 py-2 tilt-2"
        >
          GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;
