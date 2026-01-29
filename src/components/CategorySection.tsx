import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Category } from '../data/types';
import { Button } from './Button';

interface CategorySectionProps {
  category: Category;
  index?: number;
}

// 动画变体
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export function CategorySection({ category, index = 0 }: CategorySectionProps) {
  // 交替布局：偶数索引图片在左，奇数索引图片在右
  const isEven = index % 2 === 0;

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col lg:flex-row gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
          {/* 图片区域 - 40% */}
          <motion.div
            className="w-full lg:w-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            transition={{ duration: 0.6 }}
          >
            <img
              src={category.coverImage}
              alt={category.name}
              className="w-full h-[280px] lg:h-[320px] object-cover rounded-2xl shadow-sm"
            />
          </motion.div>

          {/* 内容区域 - 60% */}
          <motion.div
            className="w-full lg:w-3/5 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1F] mb-3">
              {category.name}
            </h2>
            {category.description && (
              <p className="text-base text-[#86868b] mb-6 leading-relaxed">
                {category.description}
              </p>
            )}
            <Link to={`/category/${category.id}`}>
              <Button variant="secondary">
                查看更多 <ArrowRight className="inline ml-2" size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
