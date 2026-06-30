import SEO from '../components/SEO';
import { processSteps } from '../data/siteData';

export default function ProcessPage() {
  return (
    <section className="subpage">
      <SEO title="工艺能力" description="ICEFORM 展示注塑成型、灌装密封、质量控制和批量交付能力。" keywords="冰晶盒注塑,冰排生产,蓄冷剂灌装,冷链质量控制" />
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
