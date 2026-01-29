import { motion } from 'framer-motion';
import { HandDrawnButton } from '../ui/HandDrawnButton';
import { siteConfig } from '../../data/siteConfig';
import { ChevronDown, Sparkles, Zap, Code, Brain, Rocket } from 'lucide-react';

/**
 * Hero 区块
 * 居中布局优化版 - 内容居中，统计数据横向排列
 */
const Hero: React.FC = () => {
  // 容器动画配置
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // 子元素动画配置
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  // 标题字符动画
  const titleChars = siteConfig.name.split('');
  const charVariants = {
    hidden: { opacity: 0, y: 50, rotate: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  };

  // 统计数据
  const stats = [
    { icon: Code, value: '3+', label: 'AI 项目', color: 'bg-duck-yellow' },
    { icon: Brain, value: '∞', label: '学习热情', color: 'bg-duck-teal' },
    { icon: Rocket, value: '0', label: '基础起步', color: 'bg-rose-300' },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center py-20 px-6 lg:px-12 bg-cream relative overflow-hidden">
      {/* 背景装饰 - 左侧 */}
      <motion.div
        className="absolute top-32 left-10 w-32 h-32 bg-duck-yellow/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      {/* 背景装饰 - 右侧 */}
      <motion.div
        className="absolute bottom-32 right-10 w-40 h-40 bg-duck-teal/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* 主内容区 - 居中 */}
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 标签 */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 font-hand text-lg px-5 py-2.5 bg-white hand-border shadow-hand">
              <Sparkles size={18} className="text-duck-yellow" />
              AI 辅助创造
              <span className="text-2xl ml-1">🦆</span>
            </span>
          </motion.div>

          {/* 主标题 */}
          <motion.h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary mb-6">
            <span className="hand-underline inline-flex justify-center">
              {titleChars.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={charVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            variants={itemVariants}
            className="font-heading text-2xl md:text-3xl text-duck-teal mb-6"
          >
            AI 技术探索者
          </motion.p>

          {/* 简介 */}
          <motion.p
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <HandDrawnButton
              variant="primary"
              size="lg"
              tilt={1}
              href="#projects"
            >
              <Zap size={20} className="mr-2" />
              查看项目
            </HandDrawnButton>

            <HandDrawnButton
              variant="secondary"
              size="lg"
              tilt={2}
              href={siteConfig.githubUrl}
              target="_blank"
            >
              GitHub →
            </HandDrawnButton>
          </motion.div>

          {/* 统计数据 - 横向排列在下方 */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-10"
          >
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`${stat.color} hand-border shadow-hand p-4 mb-3`}>
                    <stat.icon size={28} className="text-text-primary" />
                  </div>
                  <div className="font-heading text-4xl md:text-5xl font-bold text-text-primary">
                    {stat.value}
                  </div>
                  <div className="font-hand text-text-secondary text-lg mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 底部装饰线 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-duck-yellow to-transparent" />

      {/* 滚动提示 - 居中底部 */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-secondary hover:text-text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-hand text-sm">向下滚动</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: 3, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
