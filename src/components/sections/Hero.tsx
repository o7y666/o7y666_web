import { HandDrawnButton } from '../ui/HandDrawnButton';
import { siteConfig } from '../../data/siteConfig';

/**
 * Hero 区块
 * 首屏大标题和简介
 */
const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 lg:px-12 bg-cream relative overflow-hidden">
      {/* 装饰云朵 */}
      <div className="cloud-decoration cloud-md top-20 left-10 tilt-2 opacity-60" />
      <div className="cloud-decoration cloud-lg top-40 right-20 tilt-1 opacity-40" />
      <div className="cloud-decoration cloud-sm bottom-40 left-1/4 tilt-3 opacity-50" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* 主标题 */}
        <h1 className="font-heading text-7xl md:text-8xl lg:text-9xl font-bold text-text-primary mb-4 animate-fade-in-up">
          <span className="hand-underline">{siteConfig.name}</span>
        </h1>

        {/* 副标题 */}
        <p className="font-heading text-2xl md:text-3xl text-text-secondary mb-8 animate-fade-in-up delay-200">
          AI 技术探索者
        </p>

        {/* 简介 */}
        <p className="font-body text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300">
          {siteConfig.description}
        </p>

        {/* CTA 按钮 */}
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up delay-400">
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
        </div>

        {/* 装饰元素 */}
        <div className="mt-20 animate-float">
          <div className="text-4xl">🦆</div>
        </div>
      </div>

      {/* 底部装饰线 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-duck-yellow to-transparent" />
    </section>
  );
};

export default Hero;
