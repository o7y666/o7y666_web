import { siteConfig } from '../../data/siteConfig';

/**
 * 页脚组件
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream py-12 px-6 lg:px-12 border-t-2 border-text-primary">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 tilt-2">
            <div className="w-10 h-10 bg-duck-yellow hand-border flex items-center justify-center shadow-hand">
              <span className="text-xl">🦆</span>
            </div>
            <span className="font-heading text-2xl font-bold text-text-primary">
              {siteConfig.name}
            </span>
          </div>

          {/* 版权信息 */}
          <p className="font-hand text-lg text-text-secondary text-center">
            © {currentYear} {siteConfig.name}. 用 ❤️ 和 AI 打造
          </p>

          {/* GitHub 链接 */}
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-hand text-lg text-text-primary hover:text-text-secondary transition-colors"
          >
            GitHub →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
