import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { GridItem } from '../data/types';

interface GridCardProps {
  item: GridItem;
  index?: number;
}

export function GridCard({ item, index = 0 }: GridCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        to={item.link}
        className="block bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
      >
        <h3 className="text-base font-semibold text-[#1D1D1F] mb-2">
          {item.title}
        </h3>
        {item.description && (
          <p className="text-xs text-[#86868b]">
            {item.description}
          </p>
        )}
      </Link>
    </motion.div>
  );
}
