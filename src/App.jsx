import { useMemo, useState } from 'react';

const navItems = [
  { id: 'products', label: '产品中心' },
  { id: 'solutions', label: '应用方案' },
  { id: 'process', label: '工艺能力' },
  { id: 'contact', label: '询价联系' },
];

const productCategories = ['全部', '保温箱配套', '母婴餐包', '医药冷链', 'OEM 定制'];

const products = [
  {
    name: '标准长效冰晶盒',
    category: '保温箱配套',
    desc: '加厚筋位结构与稳定蓄冷配方，适合生鲜配送、家庭冷藏和户外保温箱。',
    size: '600ml / 900ml / 1200ml',
    material: 'HDPE 外壳 + 冷媒凝胶',
    temp: '-18°C 冷冻蓄冷',
    lead: '现货规格 3-7 天',
    image: '/assets/rectangular-cold-pack.jpg',
    tone: 'lime',
  },
  {
    name: '儿童苹果冰晶盒',
    category: '母婴餐包',
    desc: '圆润边缘、趣味苹果造型与浅粉色外观，适配儿童午餐袋和母婴餐包。',
    size: '180ml / 260ml',
    material: '食品接触级 PE',
    temp: '0-8°C 保鲜',
    lead: '支持卡通外形定制',
    image: '/assets/apple-cold-pack.jpg',
    tone: 'pink',
  },
  {
    name: '轻薄午餐冰板',
    category: '母婴餐包',
    desc: '薄型板式结构，快速贴合饭盒、便当包和小型冷藏空间。',
    size: '12mm 轻薄结构',
    material: '磨砂半透外壳',
    temp: '短途保鲜 4-6h',
    lead: '颜色可按渠道定制',
    image: '/assets/product-family.png',
    tone: 'blue',
  },
  {
    name: '医药冷链冰排',
    category: '医药冷链',
    desc: '面向试剂运输、疫苗冷藏与周转箱配套，支持温区方案搭配。',
    size: '400g / 800g / 1600g',
    material: '高强度 HDPE',
    temp: '2-8°C / -15°C 可选',
    lead: '可配套验证方案',
    image: '/assets/product-family.png',
    tone: 'medical',
  },
  {
    name: '品牌 OEM 冰晶盒',
    category: 'OEM 定制',
    desc: '从外形、容量、颜色到模内纹理和包装，面向品牌渠道做差异化开发。',
    size: '按模具方案开发',
    material: 'PE / PP 可选',
    temp: '按冷媒配方匹配',
    lead: '72h 初步结构建议',
    image: '/assets/product-family.png',
    tone: 'custom',
  },
];

const solutionTabs = [
  {
    id: 'baby',
    label: '母婴餐包',
    title: '让儿童餐食在通勤和校园路上保持清爽',
    copy: '轻薄冰板与苹果造型冰晶盒组合，兼顾安全触感、趣味外观和短途保鲜效率。',
    points: ['圆角防磕碰', '食品接触级材料', '低温不脆裂', '可做品牌礼盒'],
  },
  {
    id: 'outdoor',
    label: '户外露营',
    title: '为保温箱和露营冷藏箱提供长效蓄冷',
    copy: '标准长效冰晶盒适合多尺寸保温箱堆叠，筋位设计降低变形风险。',
    points: ['多容量组合', '抗压筋位', '反复冷冻使用', '适合商超渠道'],
  },
  {
    id: 'fresh',
    label: '生鲜配送',
    title: '匹配社区团购、生鲜冷藏和短驳配送',
    copy: '按照箱体容量和配送时长搭配冰晶盒数量，提升冷量利用效率。',
    points: ['快速装箱', '规格稳定', '周转损耗低', '可做批量供货'],
  },
  {
    id: 'medical',
    label: '医药冷链',
    title: '面向 2-8°C 与低温转运的冷媒配套',
    copy: '根据周转箱、验证时长和温控区间，提供冰排尺寸与冷媒配方建议。',
    points: ['温区方案', '批次追溯', '耐摔外壳', '医药箱配套'],
  },
];

const processSteps = [
  ['01', '需求定义', '确认容量、温区、外形、颜色、包装和目标渠道。'],
  ['02', '结构评估', '输出筋位、壁厚、口部密封和堆叠方式建议。'],
  ['03', '模具开发', '按批量规模选择开模方案，控制尺寸稳定性。'],
  ['04', '注塑成型', '稳定注塑参数，保证外壳强度与表面质感。'],
  ['05', '灌装密封', '冷媒灌装、口部封合、气密与跌落检查。'],
  ['06', '包装交付', '按渠道包装、外箱唛头和物流方式完成交付。'],
];

function Header({ activePage, onNavigate }) {
  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={() => onNavigate('home')} aria-label="ICEFORM 首页">
        <span className="brand-mark" />
        ICEFORM
      </button>
      <nav className="nav" aria-label="主导航">
        {navItems.map((item) => (
          <button
            className={activePage === item.id ? 'active' : ''}
            type="button"
            key={item.id}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <button className="header-cta" type="button" onClick={() => onNavigate('contact')}>
        获取报价
      </button>
    </header>
  );
}

function ProductCard({ product, compact = false }) {
  return (
    <article className={`product-card ${product.tone} ${compact ? 'compact' : ''}`}>
      <div className="product-media">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-body">
        <div>
          <span className="category">{product.category}</span>
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
        </div>
        <dl className="spec-list">
          <div><dt>规格</dt><dd>{product.size}</dd></div>
          <div><dt>材质</dt><dd>{product.material}</dd></div>
          <div><dt>温区</dt><dd>{product.temp}</dd></div>
        </dl>
      </div>
    </article>
  );
}

function HomePage({ onNavigate }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>高性能冰晶盒解决方案</h1>
          <p>注塑成型冷链蓄冷产品，覆盖母婴、户外、医药与生鲜配送场景</p>
          <div className="hero-actions">
            <button className="button primary" type="button" onClick={() => onNavigate('contact')}>获取报价</button>
            <button className="button secondary" type="button" onClick={() => onNavigate('products')}>查看产品</button>
          </div>
          <div className="hero-proof feature-proof" aria-label="核心能力">
            <div><span className="line-icon cold" /><strong>长效蓄冷</strong><small>持久稳定</small></div>
            <div><span className="line-icon shield" /><strong>食品级材质</strong><small>安全无毒</small></div>
            <div><span className="line-icon leaf" /><strong>可重复使用</strong><small>环保耐用</small></div>
            <div><span className="line-icon factory" /><strong>注塑工艺</strong><small>品质稳定</small></div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/assets/product-family.png" alt="ICEFORM 冰晶盒产品家族" />
        </div>
      </section>

      <section className="home-products">
        <div className="home-section-intro">
          <h2>产品系列</h2>
          <p>多种规格与形态，满足不同行业与场景的冷链需求。</p>
          <button type="button" onClick={() => onNavigate('products')}>查看全部产品</button>
        </div>
        <div className="home-product-list">
          {products.slice(0, 4).map((product) => (
            <article className="home-product-card" key={product.name}>
              <img src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <button type="button" onClick={() => onNavigate('products')}>了解详情</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-process">
        <div className="home-section-intro">
          <h2>工艺优势</h2>
          <p>先进注塑工艺，造就稳定品质与出色性能。</p>
        </div>
        <div className="process-points">
          <article><span className="line-icon mold" /><h3>精密注塑成型</h3><p>结构紧密无渗漏，尺寸一致性高</p></article>
          <article><span className="line-icon molecule" /><h3>食品级HDPE原料</h3><p>安全无毒，耐低温，抗冲击</p></article>
          <article><span className="line-icon temp" /><h3>长效蓄冷配方</h3><p>相变材料优化，冷量释放均匀持久</p></article>
          <article><span className="line-icon secure" /><h3>多重质检保障</h3><p>气密性、跌落、低温循环全检</p></article>
        </div>
      </section>

      <section className="home-bottom">
        <div className="home-section-intro scene-intro">
          <h2>应用场景</h2>
          <p>广泛应用于多种冷链领域，为您的产品保驾护航。</p>
          <button type="button" onClick={() => onNavigate('solutions')}>探索更多场景</button>
        </div>
        <div className="scene-cards">
          {solutionTabs.map((item) => (
            <article key={item.id}>
              <div className={`scene-photo ${item.id}`} />
              <h3>{item.label}</h3>
            </article>
          ))}
        </div>
        <article className="quote-card">
          <h2>获取专属解决方案与报价</h2>
          <p>为您的业务提供专业高效的冷链蓄冷解决方案</p>
          <button type="button" onClick={() => onNavigate('contact')}>立即咨询</button>
          <div>
            <span>+86 400-888-ICEFORM</span>
            <span>sales@iceform.com</span>
            <span>中国 · 浙江</span>
          </div>
        </article>
      </section>
    </>
  );
}

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const visibleProducts = useMemo(
    () => products.filter((product) => activeCategory === '全部' || product.category === activeCategory),
    [activeCategory],
  );

  return (
    <section className="subpage">
      <div className="page-title">
        <span>Product Center</span>
        <h1>产品中心</h1>
        <p>按销售场景、容量规格和定制能力组织产品，让客户从浏览到询价路径更短。</p>
      </div>
      <div className="filter-bar">
        {productCategories.map((category) => (
          <button
            className={activeCategory === category ? 'selected' : ''}
            type="button"
            key={category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-grid detailed">
        {visibleProducts.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
      <div className="spec-table">
        <h2>选型参数</h2>
        <div className="table">
          <div className="row head"><span>系列</span><span>适用场景</span><span>推荐温区</span><span>交付方式</span></div>
          {products.map((product) => (
            <div className="row" key={product.name}>
              <span>{product.name}</span>
              <span>{product.category}</span>
              <span>{product.temp}</span>
              <span>{product.lead}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsPage() {
  const [active, setActive] = useState(solutionTabs[0].id);
  const solution = solutionTabs.find((item) => item.id === active);

  return (
    <section className="subpage">
      <div className="page-title">
        <span>Solutions</span>
        <h1>应用方案</h1>
        <p>不同客户不是只买一个冰盒，而是在寻找能匹配包装、温区和渠道的完整冷链小方案。</p>
      </div>
      <div className="solution-layout">
        <div className="solution-tabs">
          {solutionTabs.map((item) => (
            <button
              className={active === item.id ? 'selected' : ''}
              type="button"
              key={item.id}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <article className="solution-panel">
          <div>
            <h2>{solution.title}</h2>
            <p>{solution.copy}</p>
          </div>
          <ul>
            {solution.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
        <div className="scenario-board">
          <img src="/assets/product-family.png" alt="冷链场景产品组合" />
        </div>
      </div>
    </section>
  );
}

function ProcessPage() {
  return (
    <section className="subpage">
      <div className="page-title">
        <span>Manufacturing</span>
        <h1>工艺能力</h1>
        <p>围绕注塑外壳、灌装密封和稳定量产，把官网展示从产品图扩展到制造可信度。</p>
      </div>
      <div className="process-timeline">
        {processSteps.map(([index, title, copy]) => (
          <article className="timeline-card" key={index}>
            <span>{index}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <div className="quality-panel">
        <h2>质量控制重点</h2>
        <div>
          <span>外观毛边检查</span>
          <span>口部密封测试</span>
          <span>跌落抗压抽检</span>
          <span>冷冻循环验证</span>
          <span>包装唛头核对</span>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="subpage contact-page">
      <div className="page-title">
        <span>Inquiry</span>
        <h1>询价联系</h1>
        <p>填写需求后，可按容量、颜色、模具、包装和目标价格带继续深化报价。</p>
      </div>
      <div className="contact-shell">
        <div className="contact-aside">
          <h2>建议提前准备</h2>
          <p>目标容量、预计数量、使用场景、是否需要开模、是否需要品牌包装。</p>
          <div className="contact-lines">
            <span>sales@iceform.com</span>
            <span>+86 400-888-ICEFORM</span>
            <span>中国 · 浙江</span>
          </div>
        </div>
        <form className="quote-form expanded">
          <label><span>需求类型</span><select defaultValue="OEM 定制"><option>产品批发</option><option>OEM 定制</option><option>医药冷链配套</option></select></label>
          <label><span>预计数量</span><select defaultValue="3000-10000 件"><option>500-3000 件</option><option>3000-10000 件</option><option>10000 件以上</option></select></label>
          <label><span>产品场景</span><input placeholder="例如：儿童餐包 / 生鲜配送 / 医药箱" /></label>
          <label><span>联系方式</span><input placeholder="请输入手机号或邮箱" /></label>
          <label className="wide"><span>补充说明</span><textarea placeholder="容量、颜色、包装、目标温区或参考样品..." /></label>
          <button type="submit">提交询价</button>
        </form>
      </div>
    </section>
  );
}

function App() {
  const [activePage, setActivePage] = useState('home');

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page">
      <Header activePage={activePage} onNavigate={navigate} />
      <main>
        {activePage === 'home' && <HomePage onNavigate={navigate} />}
        {activePage === 'products' && <ProductsPage />}
        {activePage === 'solutions' && <SolutionsPage />}
        {activePage === 'process' && <ProcessPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>
    </div>
  );
}

export default App;
