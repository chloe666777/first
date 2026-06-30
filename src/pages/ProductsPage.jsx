import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { productCategories, products } from '../data/siteData';
import { Search, ArrowUpDown } from 'lucide-react';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('default');

  const visibleProducts = useMemo(() => {
    const kw = query.trim().toLowerCase();
    const filtered = products.filter((p) => {
      const catMatch = activeCategory === '全部' || p.category === activeCategory;
      const kwMatch = !kw || `${p.name}${p.desc}${p.size}`.toLowerCase().includes(kw);
      return catMatch && kwMatch;
    });
    return [...filtered].sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name, 'zh-CN');
      if (sort === 'category') return a.category.localeCompare(b.category, 'zh-CN');
      return 0;
    });
  }, [activeCategory, query, sort]);

  return (
    <>
      <SEO title="产品中心" description="ICEFORM 冰晶盒产品中心，包含保温箱配套、母婴餐包、医药冷链和 OEM 定制系列。" keywords="冰晶盒产品,冰排规格,保温箱冰盒,医药冷链冰排" />
      <PageHero image="/assets/home-products-bg.png" title="产品中心页面横幅" />
      <section className="subpage subpage--with-hero">
      <div className="page-title">
        <span>Product Center</span>
        <h1>产品中心</h1>
        <p>按销售场景、容量规格和定制能力组织产品，让客户从浏览到询价路径更短。</p>
      </div>

      <div className="filter-bar">
        {productCategories.map((cat) => (
          <button className={activeCategory === cat ? 'selected' : ''} type="button" key={cat} onClick={() => setActiveCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div className="product-tools">
        <div style={{ position: 'relative' }}>
          <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--n400)' }} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜索产品、规格或场景" style={{ paddingLeft: 36 }} />
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="产品排序">
          <option value="default">默认排序</option>
          <option value="name">按名称排序</option>
          <option value="category">按类别排序</option>
        </select>
      </div>

      {visibleProducts.length ? (
        <div className="product-grid">
          {visibleProducts.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      ) : (
        <div className="empty-state">没有找到匹配产品，请调整关键词或分类。</div>
      )}

      <div className="spec-table">
        <h2>选型参数</h2>
        <div className="table">
          <div className="row head"><span>系列</span><span>适用场景</span><span>推荐温区</span><span>交付方式</span></div>
          {products.map((product) => (
            <div className="row" key={product.id}><span>{product.name}</span><span>{product.category}</span><span>{product.temp}</span><span>{product.lead}</span></div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
