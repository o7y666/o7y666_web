import { motion } from 'framer-motion';
import { HandDrawnCard } from '../ui/HandDrawnCard';
import { HandDrawnButton } from '../ui/HandDrawnButton';
import { siteConfig } from '../../data/siteConfig';
import { Github } from 'lucide-react';

/**
 * About 区块
 * 关于我 - 增强动画版本
 */
const About: React.FC = () => {
  // 容器动画配置
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // 子元素动画配置
  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotate: -1 },
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

  // 头像卡片动画
  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1], // 弹性效果
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

  // 云朵装饰动画
  const cloudVariants = {
    animate: {
      x: [0, 20, 0],
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // 文字行动画
  const textLineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  // 下划线动画
  const underlineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-12 bg-cream relative overflow-hidden">
      {/* 装饰云朵 */}
      <motion.div
        className="cloud-decoration cloud-lg bottom-20 right-10 tilt-2 opacity-30"
        variants={cloudVariants}
        animate="animate"
      />
      <motion.div
        className="cloud-decoration cloud-md top-32 left-20 tilt-3 opacity-20"
        variants={cloudVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* 头像区域 */}
            <motion.div
              className="flex justify-center md:justify-start"
              variants={avatarVariants}
              whileHover="hover"
            >
              <motion.div variants={avatarHoverVariants}>
                <HandDrawnCard
                  variant={1}
                  tilt={2}
                  bgColor="white"
                  shadow="yellow"
                  hover={false}
                  className="p-4"
                >
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-duck-yellow/30 to-duck-teal/30 flex items-center justify-center hand-border-2 overflow-hidden">
                    <motion.span
                      className="text-8xl"
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
                </HandDrawnCard>
              </motion.div>
            </motion.div>

            {/* 文字区域 */}
            <div>
              {/* 标题 */}
              <motion.div variants={itemVariants} className="mb-6">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary relative inline-block">
                  <span className="relative z-10">关于我</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-3 bg-duck-yellow/60 -z-0"
                    style={{ borderRadius: '50% 50% 50% 50% / 100% 100% 0% 0%' }}
                    variants={underlineVariants}
                  />
                </h2>
              </motion.div>

              {/* 介绍文字 */}
              <div className="space-y-4 font-body text-lg text-text-secondary leading-relaxed mb-8">
                <motion.p
                  custom={0}
                  variants={textLineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  你好，我是{' '}
                  <motion.strong
                    className="text-text-primary bg-duck-yellow/30 px-1"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 215, 0, 0.5)' }}
                  >
                    {siteConfig.name}
                  </motion.strong>
                  。
                </motion.p>

                <motion.p
                  custom={1}
                  variants={textLineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  我不是一个程序员，但 AI 改变了一切。现在我可以设计网站、
                  制作应用、创作图像——这些都是以前我不敢想象的事情。
                </motion.p>

                <motion.p
                  custom={2}
                  variants={textLineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  这个网站本身就是我用 AI 辅助打造的。在这里，我会记录我的
                  AI 探索之旅，分享项目、经验和踩过的坑。
                </motion.p>

                <motion.p
                  custom={3}
                  variants={textLineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-duck-teal font-hand text-xl"
                >
                  如果你也对 AI 感兴趣，欢迎一起交流！
                </motion.p>
              </div>

              {/* GitHub 链接 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
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

              {/* 技能标签 */}
              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                variants={itemVariants}
              >
                {['AI 探索', 'Vibe Coding', '终身学习'].map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="font-hand text-sm px-4 py-2 bg-white hand-border shadow-hand"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -3, 3, 0],
                      backgroundColor: '#FFD700',
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
