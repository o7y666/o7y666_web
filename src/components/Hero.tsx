import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { personal } from '../data';
import { Button } from './Button';

interface HeroProps {
  onContactClick?: () => void;
}

// 动画变体
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="h-[45vh] min-h-[350px] flex flex-col items-center justify-center text-center px-6 bg-[#F5F5F7]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* 头像 */}
        <motion.img
          src={personal.avatar}
          alt={personal.name}
          className="w-40 h-40 rounded-full object-cover mb-6"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        />
        {/* 标题 */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-3"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          我是 {personal.name}
        </motion.h1>
        {/* Slogan */}
        <motion.p
          className="text-lg text-[#86868b] mb-6 max-w-2xl"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {personal.slogan}
        </motion.p>
        {/* CTA 按钮 */}
        <motion.div
          className="flex gap-4"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button variant="primary">
            了解更多
          </Button>
          <Button variant="secondary" onClick={onContactClick}>
            联系方式 <ArrowRight className="inline ml-2" size={16} />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
