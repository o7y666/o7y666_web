import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../data';

export function Footer() {
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
    <footer className="bg-[#F5F5F7] py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* 社交链接 */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[#86868b] hover:text-[#007AFF]
                transition-colors duration-200
              "
              aria-label={link.name}
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {getIcon(link.icon)}
            </motion.a>
          ))}
        </motion.div>

        {/* 版权信息 */}
        <motion.div
          className="text-center text-sm text-[#86868b]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>© {currentYear} o7y666. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
