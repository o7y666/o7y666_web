import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HandDrawnButton } from '../components/ui/HandDrawnButton';
import { Home, Search, Ghost } from 'lucide-react';

/**
 * 404 页面
 * 有趣的迷路页面
 */
const NotFound: React.FC = () => {
  // 容器动画
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // 子元素动画
  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotate: -2 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  // 幽灵动画
  const ghostVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0, -10, 0],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // 数字动画
  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  // 漂浮的装饰
  const floatingVariants = {
    animate: (i: number) => ({
      y: [0, -15, 0],
      rotate: [0, 10, 0, -10, 0],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: i * 0.3,
      },
    }),
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-6 bg-cream relative overflow-hidden">
      {/* 背景装饰 */}
      <motion.div
        className="absolute top-20 left-10 text-4xl opacity-20"
        custom={0}
        variants={floatingVariants}
        animate="animate"
      >
        ☁️
      </motion.div>
      <motion.div
        className="absolute top-32 right-20 text-3xl opacity-20"
        custom={1}
        variants={floatingVariants}
        animate="animate"
      >
        ❓
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-1/4 text-4xl opacity-20"
        custom={2}
        variants={floatingVariants}
        animate="animate"
      >
        🗺️
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-1/4 text-3xl opacity-20"
        custom={3}
        variants={floatingVariants}
        animate="animate"
      >
        🧭
      </motion.div>

      <motion.div
        className="text-center relative z-10 max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 幽灵图标 */}
        <motion.div
          className="mb-6"
          variants={ghostVariants}
          animate="animate"
        >
          <div className="inline-block p-6 bg-white hand-border-2 shadow-hand">
            <Ghost size={64} className="text-duck-teal" />
          </div>
        </motion.div>

        {/* 404 数字 */}
        <motion.div className="mb-4" variants={numberVariants}>
          <h1 className="font-heading text-8xl md:text-9xl font-bold text-text-primary">
            <span className="inline-block hand-underline text-duck-yellow">4</span>
            <motion.span
              className="inline-block mx-2"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              0
            </motion.span>
            <span className="inline-block hand-underline text-duck-teal">4</span>
          </h1>
        </motion.div>

        {/* 标题 */}
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4"
        >
          哎呀，迷路了！
        </motion.h2>

        {/* 描述 */}
        <motion.p
          variants={itemVariants}
          className="font-body text-xl text-text-secondary mb-8 leading-relaxed"
        >
          看起来这个页面被 AI 转移到另一个维度了...
          <br />
          <span className="text-duck-teal font-hand">
            （或者它还在开发中 🚧）
          </span>
        </motion.p>

        {/* 搜索提示 */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-8 text-text-secondary"
        >
          <Search size={20} />
          <span className="font-hand">找不到页面：</span>
          <code className="font-mono text-sm bg-white px-2 py-1 hand-border">
            {window.location.pathname}
          </code>
        </motion.div>

        {/* 操作按钮 */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link to="/">
            <HandDrawnButton variant="primary" size="lg" tilt={1}>
              <Home size={20} className="mr-2" />
              返回首页
            </HandDrawnButton>
          </Link>

          <Link to="/projects">
            <HandDrawnButton variant="secondary" size="lg" tilt={2}>
              浏览项目 →
            </HandDrawnButton>
          </Link>
        </motion.div>

        {/* 有趣的提示 */}
        <motion.div
          variants={itemVariants}
          className="mt-12 p-6 bg-white/50 hand-border shadow-hand"
        >
          <p className="font-hand text-text-secondary">
            💡 小提示：试试导航栏上的链接，或者
            <motion.a
              href="https://github.com/o7y666"
              target="_blank"
              rel="noopener noreferrer"
              className="text-duck-teal hover:underline inline-flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              去 GitHub 看看
              <span>→</span>
            </motion.a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
