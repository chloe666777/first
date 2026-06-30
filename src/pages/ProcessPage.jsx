import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { processSteps } from '../data/siteData';

export default function ProcessPage() {
  return (
    <>
      <SEO title="工艺能力" description="ICEFORM 注塑冰晶盒制造工艺：从需求定义、模具开发到注塑成型、灌装密封和包装交付。" keywords="冰晶盒制造,注塑工艺,冰盒模具,冷链产品质量控制" />
      <PageHero image="/assets/home-process-bg.png" title="工艺能力页面横幅" />
      <section className="subpage subpage--with-hero">
      <div className="page-title">
        <span>Manufacturing</span>
        <h1>工艺能力</h1>
        <p>围绕注塑外壳、灌装密封和稳定量产，把官网展示从产品图扩展到制造可信度。</p>
      </div>

      <div className="process-timeline">
        {processSteps.map(([idx, title, desc]) => (
          <article className="timeline-card" key={idx}>
            <span>{idx}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
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
    </>
  );
}
