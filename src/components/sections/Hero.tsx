import { motion } from 'framer-motion';
import { HandDrawnButton } from '../ui/HandDrawnButton';
import { siteConfig } from '../../data/siteConfig';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';

/**
 * Hero 区块
 * 非对称双栏布局 - 左侧内容 + 右侧插图
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

  // 右侧装饰动画
  const floatVariants = {
    animate: (delay: number) => ({
      y: [0, -15, 0],
      rotate: [0, 3, 0],
      transition: {
        duration: 6,
        repeat: 2,
        ease: 'easeInOut',
        delay,
      },
    }),
  };

  return (
    <section className="min-h-screen flex items-center py-20 px-6 lg:px-16 bg-cream relative overflow-hidden">
      {/* 背景网格纹理 */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* 主内容 - 双栏网格布局 */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* 左侧内容区 - 占 7 列 */}
          <motion.div
            className="lg:col-span-7 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 标签 */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 font-hand text-lg px-4 py-2 bg-white hand-border shadow-hand">
                <Sparkles size={18} className="text-duck-yellow" />
                AI 辅助创造
              </span>
            </motion.div>

            {/* 主标题 - 字符逐个动画 */}
            <motion.h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary mb-6">
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
              className="font-heading text-2xl md:text-3xl text-duck-teal mb-6"
            >
              AI 技术探索者
            </motion.p>

            {/* 简介 */}
            <motion.p
              variants={itemVariants}
              className="font-body text-xl text-text-secondary max-w-xl mb-10 leading-relaxed"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTA 按钮 - 左对齐 */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
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

            {/* 统计信息 */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 mt-12 pt-8 border-t-2 border-dashed border-text-secondary/20"
            >
              <div>
                <div className="font-heading text-3xl font-bold text-text-primary">3+</div>
                <div className="font-hand text-text-secondary">AI 项目</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-text-primary">∞</div>
                <div className="font-hand text-text-secondary">学习热情</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-text-primary">0</div>
                <div className="font-hand text-text-secondary">编程基础起步</div>
              </div>
            </motion.div>
          </motion.div>

          {/* 右侧插图区 - 占 5 列 */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* 主插图容器 */}
            <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
              {/* 背景装饰圆 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-duck-yellow/30 to-duck-teal/20 rounded-full"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: 2, ease: 'easeInOut' }}
              />
              
              {/* 手绘边框装饰 */}
              <motion.div
                className="absolute inset-4 hand-border-2 bg-white/80 backdrop-blur-sm"
                custom={0.5}
                variants={floatVariants}
                animate="animate"
              />

              {/* 吉祥物 */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                custom={0}
                variants={floatVariants}
                animate="animate"
              >
                <div className="text-[140px] md:text-[180px] drop-shadow-xl">
                  🦆
                </div>
              </motion.div>

              {/* 浮动装饰 - 代码符号 */}
              <motion.div
                className="absolute top-8 right-8 text-4xl bg-white hand-border px-3 py-2 shadow-hand"
                custom={1}
                variants={floatVariants}
                animate="animate"
              >
                {'</>'}
              </motion.div>

              {/* 浮动装饰 - AI 文字 */}
              <motion.div
                className="absolute bottom-16 left-4 font-heading text-2xl bg-duck-yellow hand-border px-4 py-2 shadow-hand"
                custom={2}
                variants={floatVariants}
                animate="animate"
              >
                AI
              </motion.div>

              {/* 浮动装饰 - 星星 */}
              <motion.div
                className="absolute top-1/3 left-0 text-3xl"
                custom={1.5}
                variants={floatVariants}
                animate="animate"
              >
                ✨
              </motion.div>

              {/* 浮动装饰 - 火箭 */}
              <motion.div
                className="absolute bottom-8 right-12 text-4xl bg-white hand-border-3 p-2 shadow-hand"
                custom={0.8}
                variants={floatVariants}
                animate="animate"
              >
                🚀
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 底部装饰线 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-duck-yellow to-transparent" />

      {/* 滚动提示 - 左下角 */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-8 flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-hand text-sm">向下滚动</span>
        <ChevronDown size={18} />
      </motion.a>

      {/* 右侧固定装饰 */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
        <motion.div
          className="w-1 h-20 bg-duck-yellow/30 rounded-full"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        />
        <motion.div
          className="w-1 h-12 bg-duck-teal/30 rounded-full"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />
        <motion.div
          className="w-1 h-8 bg-text-secondary/20 rounded-full"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        />
      </div>
    </section>
  );
};

export default Hero;
