import { Link } from 'react-router-dom';
import { HandDrawnCard } from '../ui/HandDrawnCard';
import { SkillTag } from '../ui/SkillTag';
import { AnimatedSection } from '../ui/AnimatedSection';
import { projects } from '../../data/projects';

/**
 * Projects 区块
 * 项目展示
 */
const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 px-6 lg:px-12 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* 区块标题 */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
            <span className="hand-underline">AI 实验室</span>
          </h2>
          <p className="font-body text-xl text-text-secondary">
            用 AI 创造的一些东西
          </p>
        </AnimatedSection>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <Link to={`/projects/${project.slug}`}>
                <HandDrawnCard
                  variant={((index % 3) + 1) as 1 | 2 | 3}
                  tilt={((index % 4) + 1) as 1 | 2 | 3 | 4}
                  bgColor="white"
                  shadow="default"
                  hover={true}
                  className="h-full"
                >
                  {/* 项目封面 */}
                  <div className="aspect-video bg-cream-light mb-4 overflow-hidden hand-border-2">
                    {project.coverImage ? (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl">
                        🚧
                      </div>
                    )}
                  </div>

                  {/* 项目信息 */}
                  <div className="p-2">
                    <h3 className="font-heading text-2xl font-bold text-text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="font-body text-text-secondary mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* 标签 */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <SkillTag key={tag} name={tag} size="sm" color="yellow" />
                      ))}
                    </div>

                    {/* 查看详情 */}
                    <div className="mt-4 pt-4 border-t-2 border-dashed border-text-secondary/20">
                      <span className="font-hand text-text-secondary hover:text-text-primary transition-colors">
                        查看详情 →
                      </span>
                    </div>
                  </div>
                </HandDrawnCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* 空状态提示 */}
        {projects.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔧</div>
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-2">
                项目筹备中
              </h3>
              <p className="font-body text-text-secondary">
                第一个作品即将上线，敬请期待！
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default Projects;
