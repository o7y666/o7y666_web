import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

/**
 * 页面过渡动画组件
 * 为页面切换添加动画效果
 */
interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  // 页面切换动画配置
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      rotate: -0.5,
    },
    animate: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      rotate: 0.5,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      key={location.pathname}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
