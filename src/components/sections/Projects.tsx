import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HandDrawnCard } from '../ui/HandDrawnCard';
import { SkillTag } from '../ui/SkillTag';
import { projects } from '../../data/projects';
import { Filter, Code2, Sparkles, Construction } from 'lucide-react';

/**
 * Projects 区块
 * 项目展示 - 增强动画版本
 */
const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'in-progress' | 'planned'>('all');

  // 过滤项目
  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.status === filter;
  });

  // 容器动画
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // 卡片动画
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -2 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  // 标题动画
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  // 下划线动画
  const underlineVariants = {
    hidden: { scaleX: 0, originX: 0.5 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  // 获取状态图标和颜色
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'completed':
        return { icon: Sparkles, color: 'bg-duck-yellow', text: '已完成' };
      case 'in-progress':
        return { icon: Code2, color: 'bg-duck-teal', text: '进行中' };
      case 'planned':
        return { icon: Construction, color: 'bg-text-secondary', text: '计划中' };
      default:
        return { icon: Construction, color: 'bg-text-secondary', text: '计划中' };
    }
  };

  // 筛选按钮
  const filters: Array<{ key: typeof filter; label: string }> = [
    { key: 'all', label: '全部' },
    { key: 'completed', label: '已完成' },
    { key: 'in-progress', label: '进行中' },
    { key: 'planned', label: '计划中' },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 px-6 lg:px-12 bg-cream relative overflow-hidden">
      {/* 背景装饰 */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-duck-yellow/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 bg-duck-teal/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 区块标题 */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4 relative inline-block">
            <span className="relative z-10">
              <span className="hand-underline">AI 实验室</span>
            </span>
          </h2>
          <motion.div
            className="h-1 bg-duck-yellow mt-2 mx-auto"
            style={{ borderRadius: '50% 50% 50% 50% / 100% 100% 0% 0%', maxWidth: '200px' }}
            variants={underlineVariants}
          />
          <p className="font-body text-xl text-text-secondary mt-4">
            用 AI 创造的一些东西
          </p>
        </motion.div>

        {/* 筛选器 */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mr-4 text-text-secondary">
            <Filter size={18} />
            <span className="font-hand">筛选：</span>
          </div>
          {filters.map((f) => (
            <motion.button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`font-hand px-4 py-2 transition-all ${
                filter === f.key
                  ? 'bg-duck-yellow hand-border shadow-hand'
                  : 'bg-white hand-border shadow-hand opacity-60 hover:opacity-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* 项目网格 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const statusConfig = getStatusConfig(project.status);
              const StatusIcon = statusConfig.icon;

              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  layout
                  exit="exit"
                >
                  <Link to={`/projects/${project.slug}`}>
                    <HandDrawnCard
                      variant={((index % 3) + 1) as 1 | 2 | 3}
                      tilt={((index % 4) + 1) as 1 | 2 | 3 | 4}
                      bgColor="white"
                      shadow="default"
                      hover={true}
                      className="h-full group"
                    >
                      {/* 项目封面 */}
                      <div className="relative aspect-video bg-cream-light mb-4 overflow-hidden hand-border-2">
                        {project.coverImage && project.coverImage !== '/images/projects/placeholder.svg' ? (
                          <motion.img
                            src={project.coverImage}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-6xl bg-gradient-to-br from-duck-yellow/20 to-duck-teal/20">
                            <motion.span
                              animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              }}
                            >
                              🚧
                            </motion.span>
                            <span className="font-hand text-lg text-text-secondary mt-2">
                              开发中
                            </span>
                          </div>
                        )}

                        {/* 状态标签 */}
                        <motion.div
                          className={`absolute top-3 right-3 ${statusConfig.color} text-white font-hand text-xs px-3 py-1 hand-border shadow-hand flex items-center gap-1`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <StatusIcon size={12} />
                          {statusConfig.text}
                        </motion.div>
                      </div>

                      {/* 项目信息 */}
                      <div className="p-2">
                        <h3 className="font-heading text-2xl font-bold text-text-primary mb-2 group-hover:text-duck-teal transition-colors">
                          {project.title}
                        </h3>
                        <p className="font-body text-text-secondary mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* 标签 */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <motion.div
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + tagIndex * 0.05 }}
                            >
                              <SkillTag
                                name={tag}
                                size="sm"
                                color={tagIndex === 0 ? 'yellow' : tagIndex === 1 ? 'teal' : 'default'}
                              />
                            </motion.div>
                          ))}
                        </div>

                        {/* 查看详情 */}
                        <motion.div
                          className="pt-4 border-t-2 border-dashed border-text-secondary/20 flex items-center justify-between"
                          whileHover={{ x: 5 }}
                        >
                          <span className="font-hand text-text-secondary group-hover:text-text-primary transition-colors">
                            查看详情
                          </span>
                          <motion.span
                            className="text-text-secondary group-hover:text-duck-teal transition-colors"
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                          >
                            →
                          </motion.span>
                        </motion.div>
                      </div>
                    </HandDrawnCard>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* 空状态提示 */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              🔍
            </motion.div>
            <h3 className="font-heading text-2xl font-bold text-text-primary mb-2">
              暂无项目
            </h3>
            <p className="font-body text-text-secondary">
              该分类下暂时没有项目，试试其他筛选条件吧
            </p>
          </motion.div>
        )}

        {/* 更多项目提示 */}
        {filteredProjects.length > 0 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-hand text-text-secondary">
              更多项目正在开发中... 🚀
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
