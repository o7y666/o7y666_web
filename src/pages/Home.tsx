import { useNavigate } from 'react-router-dom';
import { categories, gridItems } from '../data';
import { Hero } from '../components/Hero';
import { CategorySection } from '../components/CategorySection';
import { GridCard } from '../components/GridCard';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/PageTransition';

// 淡色系背景配置
const sectionBackgrounds = [
  'bg-[#F0F7FF]', // 浅蓝
  'bg-[#F0FFF4]', // 浅绿
  'bg-[#F5F3FF]', // 浅紫
  'bg-[#FFF7ED]', // 浅橙
];

export function Home() {
  const navigate = useNavigate();

  // 跳转到联系方式页面
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero 组件 - 柔和灰蓝渐变 */}
        <Hero onContactClick={handleContactClick} />

        {/* Hero 和第一个分类之间的间隔 */}
        <div className="h-4 bg-white" />

        {/* 分类区块 */}
        {categories.map((category, index) => (
          <div key={category.id}>
            {/* 分类背景 */}
            <div className={sectionBackgrounds[index % sectionBackgrounds.length]}>
              <CategorySection category={category} index={index} />
            </div>
            {/* 分类之间的间隔（白色，最后一个不需要） */}
            {index < categories.length - 1 && (
              <div className="h-4 bg-white" />
            )}
          </div>
        ))}

        {/* 最后一个分类和底部网格之间的间隔 */}
        <div className="h-4 bg-white" />

        {/* 底部网格区域 */}
        <section className="py-16 px-6">
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
