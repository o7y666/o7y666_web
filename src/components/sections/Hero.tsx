import { motion } from 'framer-motion';
import { HandDrawnButton } from '../ui/HandDrawnButton';
import { siteConfig } from '../../data/siteConfig';
import { ChevronDown } from 'lucide-react';

/**
 * Hero 区块
 * 首屏大标题和简介 - 增强动画版本
 */
const Hero: React.FC = () => {
  // 容器动画配置
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
        delay: i * 0.08,
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1], // 弹性效果
      },
    }),
  };

  // 云朵飘动动画
  const cloudVariants = {
    animate: {
      x: [0, 15, 0],
      y: [0, -10, 0],
      rotate: [0, 3, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // 吉祥物弹跳动画
  const mascotVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [-5, 5, -5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // 滚动提示动画
  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 lg:px-12 bg-cream relative overflow-hidden">
      {/* 装饰云朵 - 带飘动动画 */}
      <motion.div
        className="cloud-decoration cloud-md top-20 left-10 tilt-2 opacity-60"
        variants={cloudVariants}
        animate="animate"
        style={{ animationDelay: '0s' }}
      />
      <motion.div
        className="cloud-decoration cloud-lg top-32 right-16 tilt-1 opacity-40"
        variants={cloudVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        transition={{ delay: 2 }}
      />
      <motion.div
        className="cloud-decoration cloud-sm bottom-48 left-1/4 tilt-3 opacity-50"
        variants={cloudVariants}
        animate="animate"
        transition={{ delay: 4 }}
      />
      <motion.div
        className="cloud-decoration cloud-md bottom-32 right-1/4 tilt-4 opacity-30"
        variants={cloudVariants}
        animate="animate"
        transition={{ delay: 3 }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 主标题 - 字符逐个动画 */}
          <motion.h1 className="font-heading text-7xl md:text-8xl lg:text-9xl font-bold text-text-primary mb-4">
            <span className="hand-underline inline-flex">
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

          {/* CTA 按钮 */}
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

      {/* 底部装饰线 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-duck-yellow to-transparent" />

      {/* 滚动提示 */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-text-secondary hover:text-text-primary transition-colors"
        variants={scrollIndicatorVariants}
        animate="animate"
      >
        <span className="font-hand text-sm mb-2">向下滚动</span>
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;
