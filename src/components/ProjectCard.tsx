import { motion } from 'framer-motion';
import type { Project } from '../data/types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* 项目图片 */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      {/* 项目内容 */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">
          {project.title}
        </h3>
        <p className="text-[#86868b] mb-4">
          {project.description}
        </p>
        {/* 技术栈标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-[#F5F5F7] text-[#86868b] text-sm rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        {/* 项目链接 */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#007AFF] hover:underline text-sm inline-flex items-center"
          whileHover={{ x: 5 }}
        >
          查看详情 →
        </motion.a>
      </div>
    </motion.div>
  );
}
