import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { personal } from '../data';
import { socialLinks } from '../data';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/PageTransition';

export function Contact() {
  const currentYear = new Date().getFullYear();

  // 获取图标组件
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Github: <Github size={20} />,
      Linkedin: <Linkedin size={20} />,
      Mail: <Mail size={20} />,
    };
    return icons[iconName] || null;
  };

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

        {/* 联系内容 */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-4">
                联系我
              </h1>
              <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
                如果您有任何问题或合作意向，欢迎通过以下方式与我联系。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 联系信息卡片 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {/* 邮箱 */}
                <motion.div
                  className="bg-[#F5F5F7] rounded-2xl p-6"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#007AFF] rounded-full flex items-center justify-center">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm text-[#86868b] mb-1">邮箱</h3>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-[#1D1D1F] font-medium hover:text-[#007AFF]"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* 位置 */}
                <motion.div
                  className="bg-[#F5F5F7] rounded-2xl p-6"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#34C759] rounded-full flex items-center justify-center">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm text-[#86868b] mb-1">位置</h3>
                      <p className="text-[#1D1D1F] font-medium">中国</p>
                    </div>
                  </div>
                </motion.div>

                {/* 社交链接 */}
                <motion.div
                  className="bg-[#F5F5F7] rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-sm text-[#86868b] mb-4">社交媒体</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#86868b] hover:text-[#007AFF] hover:shadow-md transition-all duration-200"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {getIcon(link.icon)}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* 联系表单 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#F5F5F7] rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">
                  发送消息
                </h2>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('感谢您的留言！此功能演示暂未开放。');
                  }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-[#86868b] mb-2"
                    >
                      姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E5EA] focus:border-[#007AFF] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 transition-all duration-200"
                      placeholder="请输入您的姓名"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-[#86868b] mb-2"
                    >
                      邮箱
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E5EA] focus:border-[#007AFF] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 transition-all duration-200"
                      placeholder="请输入您的邮箱"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-[#86868b] mb-2"
                    >
                      留言内容
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E5EA] focus:border-[#007AFF] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 transition-all duration-200 resize-none"
                      placeholder="请输入您想说的话"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send size={18} className="mr-2" />
                    发送消息
                  </Button>
                </form>
              </motion.div>
            </div>

            {/* 底部版权 */}
            <motion.div
              className="text-center mt-16 pt-8 border-t border-[#F5F5F7]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-sm text-[#86868b]">
                © {currentYear} {personal.name}. All rights reserved.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
