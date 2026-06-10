const products = [
  {
    name: '标准长效冰晶盒',
    desc: '加厚筋位结构，适合生鲜配送、家庭冷藏和户外保温箱。',
    spec: '600ml / 900ml / 1200ml',
    image: '/assets/rectangular-cold-pack.jpg',
    tone: 'lime',
  },
  {
    name: '儿童苹果冰晶盒',
    desc: '圆润注塑边缘与趣味造型，适配母婴餐包与儿童午餐袋。',
    spec: '食品接触级材料',
    image: '/assets/apple-cold-pack.jpg',
    tone: 'pink',
  },
  {
    name: '轻薄午餐冰板',
    desc: '薄型板式轮廓，快速贴合饭盒、便当包和小型冷藏箱。',
    spec: '12mm 轻薄结构',
    image: '/assets/product-family.png',
    tone: 'blue',
  },
  {
    name: '医药冷链冰排',
    desc: '稳定蓄冷表现，面向试剂运输、疫苗冷藏与周转箱配套。',
    spec: '可定制温区',
    image: '/assets/product-family.png',
    tone: 'medical',
  },
];

const advantages = [
  ['一体注塑成型', '模具精度稳定，外壳抗压耐摔，适合批量供货。'],
  ['密封防漏结构', '瓶口与壳体匹配严密，运输和反复冷冻更安心。'],
  ['多规格定制', '颜色、容量、造型、LOGO 与包装可按渠道需求开发。'],
  ['冷链场景覆盖', '从午餐包到医药周转箱，提供系列化产品组合。'],
];

const applications = ['母婴餐包', '户外露营', '生鲜配送', '医药冷链'];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="ICEFORM 首页">
        <span className="brand-mark" />
        ICEFORM
      </a>
      <nav className="nav" aria-label="主导航">
        <a href="#products">产品系列</a>
        <a href="#scenes">应用场景</a>
        <a href="#process">工艺优势</a>
        <a href="#contact">联系我们</a>
      </nav>
      <a className="header-cta" href="#contact">获取报价</a>
    </header>
  );
}

function ProductCard({ product }) {
  return (
    <article className={`product-card ${product.tone}`}>
      <div className="product-media">
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <span>{product.spec}</span>
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="page" id="top">
      <Header />

      <main>
        <section className="hero">
          <div className="hero-copy">
            <h1>高性能冰晶盒解决方案</h1>
            <p>注塑成型冷链蓄冷产品，覆盖母婴、户外、医药与生鲜配送场景</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">获取报价</a>
              <a className="button secondary" href="#products">查看产品</a>
            </div>
            <div className="hero-proof" aria-label="核心能力">
              <strong>4</strong><span>大系列产品</span>
              <strong>72h</strong><span>模具打样响应</span>
              <strong>OEM</strong><span>颜色容量定制</span>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/assets/product-family.png" alt="ICEFORM 冰晶盒产品家族" />
          </div>
        </section>

        <section className="section products" id="products">
          <div className="section-heading">
            <h2>产品系列</h2>
            <p>从标准矩形冰晶盒到儿童造型款，统一的注塑工艺让每个 SKU 都具备稳定手感与可靠密封。</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard product={product} key={product.name} />
            ))}
          </div>
        </section>

        <section className="process-band" id="process">
          <div className="process-copy">
            <h2>稳定量产，从模具到交付</h2>
            <p>
              围绕冷链蓄冷产品的注塑结构、焊接密封与外观质感，提供从产品定义、模具开发到批量交付的一站式支持。
            </p>
          </div>
          <div className="advantage-list">
            {advantages.map(([title, text], index) => (
              <article className="advantage" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section scenes" id="scenes">
          <div className="section-heading narrow">
            <h2>应用场景</h2>
            <p>用一套产品语言覆盖不同渠道，让冷藏、保鲜和运输的展示更统一。</p>
          </div>
          <div className="scene-grid">
            {applications.map((item) => (
              <article className="scene" key={item}>
                <span />
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <h2>获取冰晶盒定制报价</h2>
            <p>提供容量、颜色、造型、包装与外贸渠道规格定制建议。</p>
          </div>
          <form className="quote-form">
            <label>
              <span>需求类型</span>
              <select defaultValue="产品批发">
                <option>产品批发</option>
                <option>OEM 定制</option>
                <option>医药冷链配套</option>
              </select>
            </label>
            <label>
              <span>联系电话</span>
              <input placeholder="请输入手机号或邮箱" />
            </label>
            <button type="submit">提交询价</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
