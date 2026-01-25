import { useNavigate } from 'react-router-dom';
import { categories, gridItems } from '../data';
import { Hero } from '../components/Hero';
import { CategorySection } from '../components/CategorySection';
import { GridCard } from '../components/GridCard';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/PageTransition';

export function Home() {
  const navigate = useNavigate();

  // 跳转到联系方式页面
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero 组件 */}
        <Hero onContactClick={handleContactClick} />

        {/* 分类区块 */}
        {categories.map((category, index) => (
          <CategorySection key={category.id} category={category} index={index} />
        ))}

        {/* 底部网格区域 */}
        <section className="py-16 px-6 bg-[#F5F5F7]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gridItems.map((item, index) => (
                <GridCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <Footer />
      </div>
    </PageTransition>
  );
}
