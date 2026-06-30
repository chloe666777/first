import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { caseStudies, certifications, products, solutionTabs } from '../data/siteData';

export default function HomePage() {
  return (
    <>
      <SEO
        title="高性能冰晶盒解决方案"
        description="ICEFORM 提供注塑成型冰晶盒、冰排与 OEM 定制服务，覆盖母婴餐包、户外露营、生鲜配送和医药冷链。"
        keywords="冰晶盒,冰排,冷链蓄冷,注塑成型冰盒,OEM冰袋"
      />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Injection molded cold pack systems</p>
          <h1>高性能冰晶盒解决方案</h1>
          <p>注塑成型冷链蓄冷产品，覆盖母婴、户外、医药与生鲜配送场景。</p>
          <div className="hero-actions">
            <Link className="button primary" to="/contact">获取报价</Link>
            <Link className="button secondary" to="/products">查看产品</Link>
          </div>
          <div className="hero-proof feature-proof" aria-label="核心能力">
            <div><span className="line-icon cold" /><strong>长效蓄冷</strong><small>持久稳定</small></div>
            <div><span className="line-icon shield" /><strong>食品级材质</strong><small>安全无毒</small></div>
            <div><span className="line-icon leaf" /><strong>可重复使用</strong><small>耐用环保</small></div>
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
          <Link to="/products">查看全部产品</Link>
        </div>
        <div className="home-product-list">
          {products.slice(0, 4).map((product) => (
            <article className="home-product-card" key={product.id}>
              <img src={product.image} alt={`${product.name} 产品图`} loading="lazy" />
              <div>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <Link to="/products">了解详情</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-section">
        <div className="home-section-intro">
          <h2>资质与案例</h2>
          <p>把 B2B 客户关心的合规、稳定和落地结果放到首屏之后。</p>
        </div>
        <div className="trust-grid">
          {certifications.map((item) => (
            <article key={item.title}><span>{item.title}</span><p>{item.copy}</p></article>
          ))}
        </div>
        <div className="case-grid">
          {caseStudies.map((item) => (
            <article key={item.company}>
              <strong>{item.company}</strong>
              <span>{item.industry}</span>
              <p>{item.challenge}</p>
              <h3>{item.result}</h3>
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
          <article><span className="line-icon molecule" /><h3>食品级 HDPE 原料</h3><p>安全无毒，耐低温，抗冲击</p></article>
          <article><span className="line-icon temp" /><h3>长效蓄冷配方</h3><p>冷量释放均匀持久</p></article>
          <article><span className="line-icon secure" /><h3>多重质检保障</h3><p>气密、跌落、低温循环全检</p></article>
        </div>
      </section>

      <section className="home-bottom">
        <div className="home-section-intro scene-intro">
          <h2>应用场景</h2>
          <p>广泛应用于多种冷链领域，为产品保驾护航。</p>
          <Link to="/solutions">探索更多场景</Link>
        </div>
        <div className="scene-cards">
          {solutionTabs.map((item) => (
            <article key={item.id}><div className={`scene-photo ${item.id}`} /><h3>{item.label}</h3></article>
          ))}
        </div>
        <article className="quote-card">
          <h2>获取专属解决方案与报价</h2>
          <p>为你的业务提供专业高效的冷链蓄冷解决方案。</p>
          <Link to="/contact">立即咨询</Link>
          <div><span>+86 400-888-ICEFORM</span><span>sales@iceform.com</span><span>中国 浙江</span></div>
        </article>
      </section>
    </>
  );
}
