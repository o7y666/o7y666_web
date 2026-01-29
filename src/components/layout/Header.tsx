import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import { HandDrawnButton } from '../ui/HandDrawnButton';
import { Github, Menu, X } from 'lucide-react';

/**
 * 导航栏组件
 * 带滚动效果和移动端菜单
 */
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 监听滚动
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 导航链接
  const navLinks = [
    { label: '首页', href: '/' },
    { label: '项目', href: '/#projects' },
    { label: '关于', href: '/#about' },
  ];

  // 判断链接是否激活
  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('/#')) return location.pathname === '/';
    return location.pathname === href;
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 lg:px-12 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              className={`w-10 h-10 bg-duck-yellow hand-border flex items-center justify-center shadow-hand transition-transform ${
                isScrolled ? 'scale-90' : 'scale-100'
              }`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">🦆</span>
            </motion.div>
            <motion.span
              className={`font-heading text-2xl font-bold text-text-primary transition-all ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}
            >
              {siteConfig.name}
            </motion.span>
          </Link>

          {/* 桌面端导航链接 */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={`relative font-hand text-lg transition-colors ${
                  isActive(link.href)
                    ? 'text-text-primary font-bold'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-duck-yellow"
                    layoutId="activeNav"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* 右侧按钮 */}
          <div className="flex items-center gap-4">
            {/* GitHub 链接 - 使用统一按钮组件 */}
            <div className="hidden md:block">
              <HandDrawnButton
                variant="primary"
                size={isScrolled ? 'compact' : 'sm'}
                tilt={2}
                href={siteConfig.githubUrl}
                target="_blank"
                className="flex items-center gap-2 transition-all duration-300"
              >
                <Github size={isScrolled ? 16 : 18} />
                <span>GitHub</span>
              </HandDrawnButton>
            </div>

            {/* 移动端菜单按钮 */}
            <motion.button
              className="md:hidden w-10 h-10 flex items-center justify-center text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-duck-yellow rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* 背景遮罩 */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* 菜单内容 */}
            <motion.nav
              className="absolute top-16 left-4 right-4 bg-cream hand-border shadow-hand p-6"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className={`font-heading text-2xl py-2 ${
                      isActive(link.href)
                        ? 'text-duck-teal'
                        : 'text-text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-hand text-lg text-text-secondary mt-4 pt-4 border-t-2 border-dashed border-text-secondary/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Github size={20} />
                  访问 GitHub
                </motion.a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
