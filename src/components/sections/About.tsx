import { motion } from 'framer-motion';
import { HandDrawnButton } from '../ui/HandDrawnButton';
import { siteConfig } from '../../data/siteConfig';
import { Github, Sparkles } from 'lucide-react';

/**
 * About 区块
 * 关于我 - 居中对齐优化版
 */
const About: React.FC = () => {
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

  // 头像动画
  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
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

  // 头像悬停效果
  const avatarHoverVariants = {
    hover: {
      scale: 1.05,
      rotate: [0, -2, 2, 0],
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  // 装饰动画
  const decorationVariants = {
    animate: (delay: number) => ({
      y: [0, -15, 0],
      rotate: [0, 10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      },
    }),
  };

  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-12 bg-cream relative overflow-hidden">
      {/* 左侧装饰 */}
      <motion.div
        className="absolute top-32 left-10 text-6xl opacity-20 tilt-1"
        custom={0}
        variants={decorationVariants}
        animate="animate"
      >
        ☁️
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-5xl opacity-15 tilt-3"
        custom={1}
        variants={decorationVariants}
        animate="animate"
      >
        💡
      </motion.div>

      {/* 右侧装饰 */}
      <motion.div
        className="absolute top-40 right-10 text-6xl opacity-20 tilt-2"
        custom={2}
        variants={decorationVariants}
        animate="animate"
      >
        🚀
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-20 text-5xl opacity-15 tilt-4"
        custom={3}
        variants={decorationVariants}
        animate="animate"
      >
        ✨
      </motion.div>

      {/* 主内容 - 居中布局 */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* 头像 - 居中 */}
          <motion.div
            className="flex justify-center mb-10"
            variants={avatarVariants}
            whileHover="hover"
          >
            <motion.div variants={avatarHoverVariants}>
              <div className="relative">
                {/* 头像背景装饰 */}
                <motion.div
                  className="absolute -inset-4 bg-duck-yellow/30 hand-border-2 -z-10"
                  animate={{
                    rotate: [0, 2, 0, -2, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-duck-yellow/40 to-duck-teal/40 flex items-center justify-center hand-border shadow-hand overflow-hidden">
                  <motion.span
                    className="text-8xl md:text-9xl"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [-3, 3, -3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    🦆
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 标题 - 居中 */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary inline-block">
              <span className="relative">
                关于我
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-duck-yellow/60 -z-10"
                  style={{ borderRadius: '50% 50% 50% 50% / 100% 100% 0% 0%' }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                />
              </span>
            </h2>
          </motion.div>

          {/* 介绍文字 - 居中 */}
          <motion.div
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto space-y-4"
          >
            <p>
              你好，我是{' '}
              <motion.strong
                className="text-text-primary bg-duck-yellow/30 px-2 py-0.5 hand-border-sm"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 215, 0, 0.5)' }}
              >
                {siteConfig.name}
              </motion.strong>
            </p>
            <p>
              我不是一个程序员，但 AI 改变了一切。现在我可以设计网站、
              制作应用、创作图像——这些都是以前我不敢想象的事情。
            </p>
            <p>
              这个网站本身就是我用 AI 辅助打造的。在这里，我会记录我的
              AI 探索之旅，分享项目、经验和踩过的坑。
            </p>
          </motion.div>

          {/* 技能标签 - 居中 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {['AI 探索', 'Vibe Coding', '终身学习'].map((tag, index) => (
              <motion.span
                key={tag}
                className="font-hand text-base px-5 py-2 bg-white hand-border shadow-hand flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: '#FFD700',
                }}
              >
                <Sparkles size={16} />
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA 按钮 - 居中 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <HandDrawnButton
                variant="primary"
                size="md"
                tilt={1}
                href={siteConfig.githubUrl}
                target="_blank"
                className="group"
              >
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                访问我的 GitHub
              </HandDrawnButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
