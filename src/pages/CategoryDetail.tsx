import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { categories, projects } from '../data';
import { ProjectCard } from '../components/ProjectCard';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { PageTransition } from '../components/PageTransition';

export function CategoryDetail() {
  // 获取 URL 参数中的分类 ID
  const { id } = useParams<{ id: string }>();

  // 查找对应的分类
  const category = categories.find((c) => c.id === id);

  // 过滤该分类下的所有项目
  const categoryProjects = projects.filter((p) => p.categoryId === id);

  // 如果分类不存在，显示 404
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">分类不存在</h1>
        <Link to="/">
          <Button variant="primary">返回首页</Button>
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* 返回链接 */}
        <div className="py-6 px-6">
          <Link
            to="/"
            className="inline-flex items-center text-[#007AFF] hover:underline"
          >
            <ArrowLeft size={20} className="mr-2" />
            返回首页
          </Link>
        </div>

        {/* 分类标题 */}
        <section className="px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-[#1D1D1F] mb-4">
              {category.name}
            </h1>
            {category.description && (
              <p className="text-xl text-[#86868b]">
                {category.description}
              </p>
            )}
          </div>
        </section>

        {/* 项目列表 */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            {categoryProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            ) : (
              <p className="text-[#86868b]">暂无项目</p>
            )}
          </div>
        </section>

        {/* 页脚 */}
        <Footer />
      </div>
    </PageTransition>
  );
}
