import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectBySlug } from '../data/projects';
import { HandDrawnButton } from '../components/ui/HandDrawnButton';
import { SkillTag } from '../components/ui/SkillTag';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Calendar, 
  Clock,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';

/**
 * 项目详情页
 * 增强动画版本
 */
const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  // 项目不存在时跳转到 404
  if (!project) {
    return <Navigate to="/404" replace />;
  }

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

  // 封面动画
  const coverVariants = {
    hidden: { opacity: 0, scale: 0.95, rotate: -1 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  // 标签动画
  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  // 导航项目（模拟上一个/下一个）
  const navigateProjects = {
    prev: { title: '上一个项目', slug: '#' },
    next: { title: '下一个项目', slug: '#' },
  };

  return (
    <motion.div
      className="py-20 px-6 lg:px-12 bg-cream"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        {/* 返回按钮 */}
        <motion.div variants={itemVariants}>
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 font-hand text-lg text-text-secondary hover:text-text-primary transition-colors mb-8 group"
          >
            <motion.span
              className="inline-block"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft size={20} />
            </motion.span>
            <span className="group-hover:underline">返回项目列表</span>
          </a>
        </motion.div>

        {/* 项目封面 */}
        <motion.div
          variants={coverVariants}
          className="hand-border tilt-1 shadow-hand bg-white overflow-hidden mb-8"
        >
          <div className="aspect-video bg-gradient-to-br from-duck-yellow/20 to-duck-teal/20 flex items-center justify-center">
            {project.coverImage && project.coverImage !== '/images/projects/placeholder.svg' ? (
              <motion.img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            ) : (
              <div className="text-center">
                <motion.div
                  className="text-8xl mb-4"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  🚧
                </motion.div>
                <p className="font-hand text-xl text-text-secondary">
                  项目开发中，敬请期待
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* 项目标题 */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-text-primary mb-4">
            {project.title}
          </h1>

          {/* 元信息 */}
          <div className="flex flex-wrap items-center gap-4 text-text-secondary font-hand">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(project.createdAt).toLocaleDateString('zh-CN')}</span>
            </div>
            {project.updatedAt && (
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>更新于 {new Date(project.updatedAt).toLocaleDateString('zh-CN')}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* 标签 */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, i) => (
            <motion.div key={tag} custom={i} variants={tagVariants}>
              <SkillTag
                name={tag}
                color={i === 0 ? 'yellow' : i === 1 ? 'teal' : 'default'}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* 项目描述 */}
        <motion.div
          variants={itemVariants}
          className="font-body text-xl text-text-secondary leading-relaxed mb-12 space-y-4"
        >
          {project.description.split('\n').map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* 使用的工具 */}
        {project.tools.length > 0 && (
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">
              使用的工具
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  className="flex items-center gap-2 bg-white hand-border shadow-hand px-4 py-2"
                >
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: tool.color || '#FFD700' }}
                  />
                  <span className="font-hand">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 操作按钮 */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 mb-16"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <HandDrawnButton
              variant="primary"
              size="lg"
              tilt={1}
              href={project.githubUrl}
              target="_blank"
              className="group"
            >
              <Github size={24} className="mr-2 group-hover:rotate-12 transition-transform" />
              在 GitHub 上查看
            </HandDrawnButton>
          </motion.div>

          {project.demoUrl && (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <HandDrawnButton
                variant="secondary"
                size="lg"
                tilt={2}
                href={project.demoUrl}
                target="_blank"
                className="group"
              >
                <ExternalLink size={24} className="mr-2 group-hover:rotate-12 transition-transform" />
                在线演示
              </HandDrawnButton>
            </motion.div>
          )}
        </motion.div>

        {/* 项目导航 */}
        <motion.div
          variants={itemVariants}
          className="border-t-2 border-dashed border-text-secondary/20 pt-8"
        >
          <div className="grid grid-cols-2 gap-4">
            <motion.a
              href={navigateProjects.prev.slug}
              className="flex items-center gap-3 p-4 bg-white/50 hand-border hover:shadow-hand transition-shadow"
              whileHover={{ x: -5 }}
            >
              <ChevronLeft size={24} className="text-text-secondary" />
              <div className="text-left">
                <p className="font-hand text-sm text-text-secondary">上一个项目</p>
                <p className="font-heading text-lg text-text-primary">
                  {navigateProjects.prev.title}
                </p>
              </div>
            </motion.a>

            <motion.a
              href={navigateProjects.next.slug}
              className="flex items-center gap-3 p-4 bg-white/50 hand-border hover:shadow-hand transition-shadow justify-end text-right"
              whileHover={{ x: 5 }}
            >
              <div>
                <p className="font-hand text-sm text-text-secondary">下一个项目</p>
                <p className="font-heading text-lg text-text-primary">
                  {navigateProjects.next.title}
                </p>
              </div>
              <ChevronRight size={24} className="text-text-secondary" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
