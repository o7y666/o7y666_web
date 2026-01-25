import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动
  useEffect(() => {
    const toggleVisibility = () => {
      // 当滚动超过 400px 时显示按钮
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8
        w-10 h-10
        bg-[#007AFF] text-white
        rounded-full
        flex items-center justify-center
        shadow-lg
        transition-all duration-300
        hover:bg-[#0066d6] hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007AFF]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
      aria-label="滚动到顶部"
    >
      <ArrowUp size={20} />
    </button>
  );
}
