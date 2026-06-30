import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { caseStudies, certifications, products, solutionTabs } from '../data/siteData';
import { Snowflake, ShieldCheck, Recycle, Factory, Award, TrendingDown, ArrowRight, Leaf, Thermometer, FlaskConical, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const features = [
    { label: '长效蓄冷', desc: '持久稳定', icon: Snowflake },
    { label: '食品级材质', desc: '安全无毒', icon: ShieldCheck },
    { label: '可重复使用', desc: '耐用环保', icon: Recycle },
    { label: '注塑工艺', desc: '品质稳定', icon: Factory },
  ];

  return (
    <>
      <SEO title="高性能冰晶盒解决方案" description="ICEFORM 提供注塑成型冰晶盒、冰排与 OEM 定制服务，覆盖母婴餐包、户外露营、生鲜配送和医药冷链。" keywords="冰晶盒,冰排,冷链蓄冷,注塑成型冰盒,OEM冰袋" />

      <section className="hero hero--image">
        <img className="hero__bg" src="/assets/home-hero-bg.png" alt="" aria-hidden="true" />
        <div className="hero__content hero__content--panel">
          <p className="hero__eyebrow">Injection molded cold pack systems</p>
          <h1 className="hero__title">高性能冰晶盒解决方案</h1>
          <p className="hero__desc">注塑成型冷链蓄冷产品，覆盖母婴、户外、医药与生鲜配送场景。</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/contact">获取报价</Link>
            <Link className="btn btn--ghost" to="/products">查看产品 <ArrowRight size={16} /></Link>
          </div>
          <div className="feature-strip" aria-label="核心能力">
            {features.map((f) => (
              <div className="feature-strip__item" key={f.label}>
                <f.icon size={32} />
                <strong>{f.label}</strong>
                <small>{f.desc}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="module-showcase">
            <img className="module-showcase__bg" src="/assets/home-products-bg.png" alt="" aria-hidden="true" />
            <div className="module-showcase__copy">
              <span>Product series</span>
              <h2>产品系列</h2>
              <p>多种规格与形态，满足不同行业与场景的冷链需求。</p>
              <Link className="btn btn--primary btn--sm" to="/products">查看全部产品 <ArrowRight size={14} /></Link>
            </div>
          </div>
          <div className="product-home">
            {products.slice(0, 4).map((product) => (
              <Link to="/products" key={product.id} className="card" style={{ textDecoration: 'none' }}>
                <div className="card__img">
                  <img src={product.image} alt={`${product.name} 产品图`} loading="lazy" />
                </div>
                <div className="card__body">
                  <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>{product.name}</h3>
                  <p style={{ margin: '8px 0 0', color: 'var(--n500)', fontSize: 14, lineHeight: 1.6 }}>{product.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section__inner">
          <div className="module-showcase module-showcase--compact">
            <img className="module-showcase__bg" src="/assets/home-quality-bg.png" alt="" aria-hidden="true" />
            <div className="module-showcase__copy">
              <span>Quality proof</span>
              <h2>资质与案例</h2>
              <p>把 B2B 客户关心的合规、稳定和落地结果放到清晰可扫的位置。</p>
            </div>
          </div>
          <div className="trust-grid">
            {certifications.map((item) => (
              <div className="trust-card" key={item.title}>
                <Award size={36} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
          <div className="case-grid">
            {caseStudies.map((item) => (
              <div className="case-card" key={item.company}>
                <div className="case-card__company">{item.company}</div>
                <span className="case-card__industry">{item.industry}</span>
                <div className="case-card__result">
                  <TrendingDown size={14} style={{ verticalAlign: 'middle', marginRight: 4, color: 'var(--accent)' }} />
                  {item.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="module-showcase">
            <img className="module-showcase__bg" src="/assets/home-process-bg.png" alt="" aria-hidden="true" />
            <div className="module-showcase__copy">
              <span>Manufacturing capability</span>
              <h2>工艺优势</h2>
              <p>先进注塑工艺，造就稳定品质与出色性能。</p>
            </div>
          </div>
          <div className="process-grid">
            {[
              { icon: Factory, title: '精密注塑成型', desc: '结构紧密无渗漏，尺寸一致性高' },
              { icon: FlaskConical, title: '食品级 HDPE 原料', desc: '安全无毒，耐低温，抗冲击' },
              { icon: Thermometer, title: '长效蓄冷配方', desc: '冷量释放均匀持久' },
              { icon: CheckCircle, title: '多重质检保障', desc: '气密、跌落、低温循环全检' },
            ].map((item) => (
              <div className="process-card" key={item.title}>
                <item.icon size={28} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section__inner">
          <div className="module-showcase">
            <img className="module-showcase__bg" src="/assets/home-solutions-bg.png" alt="" aria-hidden="true" />
            <div className="module-showcase__copy">
              <span>Application scenarios</span>
              <h2>应用场景</h2>
              <p>广泛应用于多种冷链领域，为产品保驾护航。</p>
              <Link className="btn btn--primary btn--sm" to="/solutions">探索更多场景 <ArrowRight size={14} /></Link>
            </div>
          </div>
          <div className="scene-grid">
            {solutionTabs.map((item) => (
              <Link to="/solutions" className="scene-card" key={item.id}>
                <div className="scene-card__img">
                  <Leaf size={40} />
                </div>
                <h3>{item.label}</h3>
              </Link>
            ))}
          </div>
          <div className="quote-card" style={{ marginTop: 48 }}>
            <div>
              <h2>获取专属解决方案与报价</h2>
              <p>为你的业务提供专业高效的冷链蓄冷解决方案。</p>
            </div>
            <Link className="btn btn--primary" to="/contact" style={{ justifySelf: 'start' }}>立即咨询</Link>
            <div className="quote-card__meta">
              <span>+86 400-888-ICEFORM</span>
              <span>sales@iceform.com</span>
              <span>中国 浙江</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
