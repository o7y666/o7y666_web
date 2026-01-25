import { motion } from 'framer-motion';
import {
  Cpu,
  Code2,
  Terminal,
  Palette,
  Zap,
  Shield,
} from 'lucide-react';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/PageTransition';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: { name: string; level: string }[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: '硬件设计',
    icon: <Cpu size={32} />,
    color: '#FF9500',
    skills: [
      { name: 'PCB 设计', level: '熟练' },
      { name: '电路分析', level: '熟练' },
      { name: '嵌入式系统', level: '熟练' },
      { name: 'FPGA 开发', level: '一般' },
    ],
  },
  {
    name: '软件开发',
    icon: <Code2 size={32} />,
    color: '#007AFF',
    skills: [
      { name: 'React', level: '熟练' },
      { name: 'TypeScript', level: '熟练' },
      { name: 'Node.js', level: '一般' },
      { name: 'Python', level: '一般' },
    ],
  },
  {
    name: '设计工具',
    icon: <Palette size={32} />,
    color: '#AF52DE',
    skills: [
      { name: 'Figma', level: '熟练' },
      { name: 'Sketch', level: '一般' },
      { name: 'Adobe XD', level: '一般' },
    ],
  },
  {
    name: '开发工具',
    icon: <Terminal size={32} />,
    color: '#34C759',
    skills: [
      { name: 'Git', level: '熟练' },
      { name: 'Docker', level: '一般' },
      { name: 'Linux', level: '一般' },
    ],
  },
  {
    name: 'AI 应用',
    icon: <Zap size={32} />,
    color: '#FF2D55',
    skills: [
      { name: '提示工程', level: '熟练' },
      { name: 'LLM 集成', level: '一般' },
      { name: 'AI 辅助开发', level: '熟练' },
    ],
  },
  {
    name: '其他技能',
    icon: <Shield size={32} />,
    color: '#5856D6',
    skills: [
      { name: '项目管理', level: '熟练' },
      { name: '技术文档', level: '熟练' },
      { name: '英语阅读', level: '熟练' },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case '熟练':
      return 'bg-[#34C759]';
    case '一般':
      return 'bg-[#FF9500]';
    default:
      return 'bg-[#86868b]';
  }
};

export function Skills() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* 返回链接 */}
        <div className="py-6 px-6">
          <a
            href="/"
            className="inline-flex items-center text-[#007AFF] hover:underline"
          >
            ← 返回首页
          </a>
        </div>

        {/* 技能内容 */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* 标题 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-4">
                技能展示
              </h1>
              <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
                我在不同领域的技能和经验
              </p>
            </motion.div>

            {/* 技能卡片网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-white border border-[#F5F5F7] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* 分类标题 */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: category.color }}
                    >
                      {category.icon}
                    </div>
                    <h2 className="text-xl font-bold text-[#1D1D1F]">
                      {category.name}
                    </h2>
                  </div>

                  {/* 技能列表 */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[#1D1D1F]">{skill.name}</span>
                          <span className="text-xs text-[#86868b]">
                            {skill.level}
                          </span>
                        </div>
                        <div className="h-2 bg-[#F5F5F7] rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${getLevelColor(skill.level)}`}
                            initial={{ width: 0 }}
                            animate={{ width: skill.level === '熟练' ? '80%' : '50%' }}
                            transition={{
                              duration: 0.8,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 技能说明 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 bg-[#F5F5F7] rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4 text-center">
                技能说明
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#34C759]" />
                  <span className="text-sm text-[#86868b]">熟练（80%+）</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#FF9500]" />
                  <span className="text-sm text-[#86868b]">一般（50%+）</span>
                </div>
              </div>
              <p className="text-center text-[#86868b] mt-4">
                技能水平基于项目经验和技术深度综合评估
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 text-center"
            >
              <a href="/contact">
                <Button variant="primary">了解更多</Button>
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
