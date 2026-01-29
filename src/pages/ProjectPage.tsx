import { useParams, Navigate } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';

/**
 * 项目详情页
 */
const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  // 项目不存在时跳转到 404
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* 返回按钮 */}
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 font-hand text-lg text-text-secondary hover:text-text-primary transition-colors mb-8"
        >
          ← 返回项目列表
        </a>

        {/* 项目封面 */}
        <div className="hand-border tilt-1 shadow-hand bg-white overflow-hidden mb-8">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* 项目标题 */}
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-text-primary mb-4">
          {project.title}
        </h1>

        {/* 标签 */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-hand text-sm px-3 py-1 bg-duck-yellow hand-border shadow-hand"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 项目描述 */}
        <div className="font-body text-xl text-text-secondary leading-relaxed mb-12">
          {project.description}
        </div>

        {/* GitHub 链接 */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hand btn-hand-primary text-xl px-8 py-4 tilt-2"
        >
          在 GitHub 上查看 →
        </a>
      </div>
    </div>
  );
};

export default ProjectPage;
