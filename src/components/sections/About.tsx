import { HandDrawnCard } from '../ui/HandDrawnCard';
import { HandDrawnButton } from '../ui/HandDrawnButton';
import { AnimatedSection } from '../ui/AnimatedSection';
import { siteConfig } from '../../data/siteConfig';

/**
 * About 区块
 * 关于我
 */
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-12 bg-cream relative overflow-hidden">
      {/* 装饰云朵 */}
      <div className="cloud-decoration cloud-lg bottom-20 right-10 tilt-2 opacity-30" />

      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* 头像区域 */}
            <div className="flex justify-center md:justify-start">
              <HandDrawnCard
                variant={1}
                tilt={2}
                bgColor="white"
                shadow="yellow"
                hover={false}
                className="p-4"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 bg-duck-yellow/20 flex items-center justify-center hand-border-2">
                  <span className="text-8xl">🦆</span>
                </div>
              </HandDrawnCard>
            </div>

            {/* 文字区域 */}
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6">
                <span className="hand-underline">关于我</span>
              </h2>

              <div className="space-y-4 font-body text-lg text-text-secondary leading-relaxed">
                <p>
                  你好，我是 <strong className="text-text-primary">{siteConfig.name}</strong>。
                </p>
                <p>
                  我不是一个程序员，但 AI 改变了一切。现在我可以设计网站、
                  制作应用、创作图像——这些都是以前我不敢想象的事情。
                </p>
                <p>
                  这个网站本身就是我用 AI 辅助打造的。在这里，我会记录我的
                  AI 探索之旅，分享项目、经验和踩过的坑。
                </p>
              </div>

              {/* GitHub 链接 */}
              <div className="mt-8">
                <HandDrawnButton
                  variant="primary"
                  size="md"
                  tilt={1}
                  href={siteConfig.githubUrl}
                  target="_blank"
                >
                  访问我的 GitHub →
                </HandDrawnButton>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
