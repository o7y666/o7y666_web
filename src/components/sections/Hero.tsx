import { motion } from 'framer-motion';
import { HandDrawnButton } from '../ui/HandDrawnButton';
import { siteConfig } from '../../data/siteConfig';
import { ChevronDown } from 'lucide-react';

/**
 * Hero 区块
 * 首屏大标题和简介 - 居中对齐优化版
 */
const Hero: React.FC = () => {
  // 容器动画配置
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  // 子元素动画配置
  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotate: 2 },
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

  // 标题字符动画
  const titleChars = siteConfig.name.split('');
  const charVariants = {
    hidden: { opacity: 0, y: 50, rotate: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  };

  // 云朵飘动动画 - 减缓并限制次数
  const cloudVariants = {
    animate: (delay: number) => ({
      x: [0, 10, 0],
      y: [0, -5, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 10,
        repeat: 2,
        ease: 'easeInOut',
        delay,
      },
    }),
  };

  // 吉祥物弹跳动画 - 减缓并限制次数
  const mascotVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [-3, 3, -3],
      transition: {
        duration: 4,
        repeat: 3,
        ease: 'easeInOut',
      },
    },
  };

  // 滚动提示动画 - 更 subtle
  const scrollIndicatorVariants = {
    animate: {
      y: [0, 6, 0],
      opacity: [0.4, 0.7, 0.4],
      transition: {
        duration: 2,
        repeat: 3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 lg:px-12 bg-cream relative overflow-hidden">
      {/* 装饰云朵 - 左上 */}
      <motion.div
        className="cloud-decoration cloud-md top-20 left-10 tilt-2 opacity-15"
        custom={0}
        variants={cloudVariants}
        animate="animate"
      />
      <motion.div
        className="cloud-decoration cloud-sm top-40 left-32 tilt-3 opacity-10"
        custom={1}
        variants={cloudVariants}
        animate="animate"
      />

      {/* 装饰云朵 - 右上 */}
      <motion.div
        className="cloud-decoration cloud-lg top-24 right-16 tilt-1 opacity-10"
        custom={2}
        variants={cloudVariants}
        animate="animate"
      />
      <motion.div
        className="cloud-decoration cloud-md top-48 right-32 tilt-4 opacity-10"
        custom={3}
        variants={cloudVariants}
        animate="animate"
      />

      {/* 装饰云朵 - 左下 */}
      <motion.div
        className="cloud-decoration cloud-sm bottom-40 left-20 tilt-1 opacity-15"
        custom={4}
        variants={cloudVariants}
        animate="animate"
      />

      {/* 主内容 - 严格居中 */}
      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 主标题 - 字符逐个动画 */}
          <motion.h1 className="font-heading text-7xl md:text-8xl lg:text-9xl font-bold text-text-primary mb-6">
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
            className="font-heading text-2xl md:text-3xl text-text-secondary mb-8"
          >
            AI 技术探索者
          </motion.p>

          {/* 简介 */}
          <motion.p
            variants={itemVariants}
            className="font-body text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTA 按钮 - 居中 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6"
          >
            <HandDrawnButton
              variant="primary"
              size="lg"
              tilt={1}
              href="#projects"
            >
              查看项目 🚀
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

          {/* 装饰元素 - 吉祥物弹跳 */}
          <motion.div
            className="mt-16"
            variants={mascotVariants}
            animate="animate"
          >
            <div className="text-6xl inline-block hand-border bg-white p-4 shadow-hand">
              🦆
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 右下角装饰 - 平衡视觉 */}
      <motion.div
        className="absolute bottom-32 right-20 text-7xl opacity-15 tilt-2"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 8,
          repeat: 3,
          ease: 'easeInOut',
        }}
      >
        ✨
      </motion.div>

      {/* 底部装饰线 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-duck-yellow to-transparent" />

      {/* 滚动提示 - 仅保留箭头 */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center text-text-secondary hover:text-text-primary transition-colors"
        variants={scrollIndicatorVariants}
        animate="animate"
      >
        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
};

export default Hero;
