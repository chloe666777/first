import { useState } from 'react';
import SEO from '../components/SEO';
import { solutionTabs } from '../data/siteData';

export default function SolutionsPage() {
  const [active, setActive] = useState(solutionTabs[0].id);
  const solution = solutionTabs.find((item) => item.id === active);

  const onKeyDown = (event, index) => {
    if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (index + direction + solutionTabs.length) % solutionTabs.length;
    setActive(solutionTabs[nextIndex].id);
  };

  return (
    <section className="subpage">
      <SEO
        title="应用方案"
        description="ICEFORM 面向母婴餐包、户外露营、生鲜配送和医药冷链提供冰晶盒与冰排搭配方案。"
        keywords="冷链方案,母婴餐包冰盒,生鲜配送冰袋,医药冷链冰排"
      />
      <div className="page-title">
        <span>Solutions</span>
        <h1>应用方案</h1>
        <p>不同客户不是只买一个冰盒，而是在寻找能匹配包装、温区和渠道的完整冷链小方案。</p>
      </div>
      <div className="solution-layout">
        <div className="solution-tabs" role="tablist" aria-label="应用场景">
          {solutionTabs.map((item, index) => (
            <button
              id={`tab-${item.id}`}
              className={active === item.id ? 'selected' : ''}
              type="button"
              key={item.id}
              role="tab"
              aria-selected={active === item.id}
              aria-controls={`panel-${item.id}`}
              tabIndex={active === item.id ? 0 : -1}
              onClick={() => setActive(item.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <article className="solution-panel" id={`panel-${solution.id}`} role="tabpanel" aria-labelledby={`tab-${solution.id}`}>
          <div>
            <h2>{solution.title}</h2>
            <p>{solution.copy}</p>
          </div>
          <ul>
            {solution.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </article>
        <div className="scenario-board">
          <img src="/assets/product-family.png" alt="冷链场景产品组合" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
