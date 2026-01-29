import { motion } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import { Github, Heart, Mail, ArrowUp } from 'lucide-react';

/**
 * Footer 组件
 * 页脚 - 增强动画版本
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // 滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 容器动画
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // 子元素动画
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  // 链接悬停动画
  const linkHoverVariants = {
    hover: {
      scale: 1.05,
      x: 5,
      transition: { duration: 0.2 },
    },
  };

  // 装饰元素动画
  const decorationVariants = {
    animate: {
      rotate: [0, 10, -10, 0],
      y: [0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // 返回顶部按钮动画
  const scrollTopVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const quickLinks = [
    { label: '首页', href: '/' },
    { label: '项目', href: '/#projects' },
    { label: '关于', href: '/#about' },
  ];

  return (
    <footer className="bg-ai-dark text-white py-16 px-6 lg:px-12 relative overflow-hidden">
      {/* 背景装饰 */}
      <motion.div
        className="absolute top-10 left-10 text-6xl opacity-10"
        variants={decorationVariants}
        animate="animate"
      >
        ☁️
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-6xl opacity-10"
        variants={decorationVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        🦆
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* 品牌区域 */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-12 h-12 bg-duck-yellow hand-border flex items-center justify-center shadow-hand"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-2xl">🦆</span>
              </motion.div>
              <span className="font-heading text-3xl font-bold">
                {siteConfig.name}
              </span>
            </div>
            <p className="font-body text-gray-400 leading-relaxed">
              {siteConfig.description}
            </p>
          </motion.div>

          {/* 快速链接 */}
          <motion.div variants={itemVariants}>
            <h3 className="font-heading text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li key={link.label} variants={linkHoverVariants} whileHover="hover">
                  <a
                    href={link.href}
                    className="font-hand text-gray-400 hover:text-duck-yellow transition-colors flex items-center gap-2"
                  >
                    <span>→</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 联系方式 */}
          <motion.div variants={itemVariants}>
            <h3 className="font-heading text-xl font-bold mb-4">联系方式</h3>
            <div className="space-y-3">
              <motion.a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-hand text-gray-400 hover:text-duck-yellow transition-colors"
                whileHover={{ x: 5 }}
              >
                <Github size={20} />
                GitHub
              </motion.a>
              <motion.div
                className="flex items-center gap-3 font-hand text-gray-400"
                whileHover={{ x: 5 }}
              >
                <Mail size={20} />
                <span>即将开放</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* 分隔线 */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* 底部版权 */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-hand text-gray-400 flex items-center gap-1">
            © {currentYear} {siteConfig.name}. 用
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-red-500" />
            </motion.span>
            和 AI 打造
          </p>

          <p className="font-hand text-gray-500 text-sm">
            Built with React + Tailwind + Framer Motion
          </p>
        </motion.div>
      </div>

      {/* 返回顶部按钮 */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-duck-yellow text-text-primary hand-border shadow-hand flex items-center justify-center z-50"
        variants={scrollTopVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;
