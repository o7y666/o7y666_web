import { motion } from 'framer-motion';
import { personal } from '../data';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/PageTransition';

export function About() {
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

        {/* 关于内容 */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* 标题 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-4">
                关于我
              </h1>
              <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
                探索我的故事、技能和热情所在
              </p>
            </motion.div>

            {/* 个人简介卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F5F5F7] rounded-3xl p-8 md:p-12 mb-8"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1F] mb-2">
                    我是 {personal.name}
                  </h2>
                  <p className="text-lg text-[#007AFF] mb-4">{personal.slogan}</p>
                  <p className="text-[#86868b] leading-relaxed">
                    {personal.bio}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 技能标签 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white border border-[#F5F5F7] rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-6 text-center">
                技能标签
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  '硬件设计',
                  '嵌入式开发',
                  'React',
                  'TypeScript',
                  'Node.js',
                  'AI 应用',
                  'PCB 设计',
                  '固件开发',
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-[#F5F5F7] text-[#86868b] rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: '#007AFF', color: 'white' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* 时间线 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-6 text-center">
                我的历程
              </h3>
              <div className="space-y-4">
                {[
                  { year: '2024', event: '开始 AI 应用开发学习' },
                  { year: '2023', event: '深入软件工程领域' },
                  { year: '2022', event: '硬件设计项目经验积累' },
                  { year: '2021', event: '硬件工程师职业生涯开始' },
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="flex items-center gap-4 p-4 bg-white border border-[#F5F5F7] rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <span className="text-xl font-bold text-[#007AFF] w-16">
                      {item.year}
                    </span>
                    <span className="text-[#1D1D1F]">{item.event}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 text-center"
            >
              <a href="/contact">
                <Button variant="primary">与我合作</Button>
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
