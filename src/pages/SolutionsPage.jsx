import { useState } from 'react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { solutionTabs } from '../data/siteData';
import { Check } from 'lucide-react';

const solutionDetails = {
  baby: {
    image: '/assets/apple-cold-pack.jpg',
    alt: '儿童苹果造型冰晶盒',
    scene: '/assets/home-solutions-bg.png',
    stats: [
      ['适配包型', '午餐包、母婴包、便当袋'],
      ['保鲜时长', '短途 4-6 小时'],
      ['推荐产品', '苹果造型冰晶盒 + 轻薄冰板'],
    ],
    caseTitle: '儿童餐包品牌联名套装',
    caseCopy: '用苹果造型冷媒做礼盒配件，提升打开包装时的识别度，同时控制孩子接触边角的安全风险。',
    deliverables: ['外观颜色建议', '餐包摆放方案', '礼盒配套清单'],
  },
  outdoor: {
    image: '/assets/rectangular-cold-pack.jpg',
    alt: '户外保温箱长效冰晶盒',
    scene: '/assets/home-products-bg.png',
    stats: [
      ['适配包型', '保温箱、露营冷藏箱、车载箱'],
      ['保鲜时长', '长效蓄冷 8-12 小时'],
      ['推荐产品', '标准长效冰晶盒'],
    ],
    caseTitle: '露营渠道标准补货方案',
    caseCopy: '按箱体容量配置不同克重冰晶盒，便于门店做组合销售，也减少用户反复试错。',
    deliverables: ['容量搭配表', '堆叠方式建议', '渠道包装方案'],
  },
  fresh: {
    image: '/assets/product-family.png',
    alt: '生鲜配送冰晶盒组合',
    scene: '/assets/home-quality-bg.png',
    stats: [
      ['适配包型', '泡沫箱、周转箱、社区团购箱'],
      ['保鲜时长', '末端配送 6-10 小时'],
      ['推荐产品', '长效冰晶盒 + 周转冰板'],
    ],
    caseTitle: '区域生鲜平台周转优化',
    caseCopy: '按配送半径和箱体容积建立冷媒用量表，减少单箱过量投放，提高周转效率。',
    deliverables: ['单箱冷量建议', '周转损耗控制', '批量供货节奏'],
  },
  medical: {
    image: '/assets/product-family.png',
    alt: '医药冷链冰排组合',
    scene: '/assets/home-process-bg.png',
    stats: [
      ['适配包型', '医药周转箱、试剂箱、疫苗箱'],
      ['目标温区', '2-8°C / 低温转运'],
      ['推荐产品', '医药冷链冰排'],
    ],
    caseTitle: '试剂转运温区配置',
    caseCopy: '围绕周转时间和温控区间配置冰排尺寸，并预留验证记录和批次追溯信息。',
    deliverables: ['温区搭配建议', '验证测试配合', '批次追溯信息'],
  },
};

export default function SolutionsPage() {
  const [active, setActive] = useState(solutionTabs[0].id);
  const solution = solutionTabs.find((item) => item.id === active) || solutionTabs[0];
  const detail = solutionDetails[solution.id] || solutionDetails.baby;

  const onKeyDown = (e, idx) => {
    if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(e.key)) return;
    e.preventDefault();
    const dir = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : -1;
    setActive(solutionTabs[(idx + dir + solutionTabs.length) % solutionTabs.length].id);
  };

  return (
    <>
      <SEO
        title="应用方案"
        description="ICEFORM 面向母婴餐包、户外露营、生鲜配送和医药冷链提供冰晶盒、冰排与温区配置方案。"
        keywords="冷链方案,母婴餐包冰晶盒,生鲜配送冰盒,医药冷链冰排"
      />
      <PageHero image="/assets/home-solutions-bg.png" title="应用方案页面横幅" />
      <section className="subpage subpage--with-hero">

      <div className="solution-hero">
        <div className="page-title">
          <span>Solutions</span>
          <h1>应用方案</h1>
          <p>不同行业需要的不只是一个冰盒，而是一套能匹配包型、温区、周转时长和销售渠道的冷链小方案。</p>
        </div>
      </div>

      <div className="solution-tabs" role="tablist" aria-label="应用场景">
        {solutionTabs.map((item, idx) => (
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
            onKeyDown={(e) => onKeyDown(e, idx)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="solution-layout" role="tabpanel" id={`panel-${solution.id}`} aria-labelledby={`tab-${solution.id}`}>
        <div className="solution-panel">
          <div className="solution-panel__copy">
            <h2>{solution.title}</h2>
            <p>{solution.copy}</p>
            <div className="solution-stat-list">
              {detail.stats.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="solution-product">
            <img src={detail.image} alt={detail.alt} />
          </div>

          <ul className="solution-points">
            {solution.points.map((point) => (
              <li key={point}>
                <Check size={16} />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="scenario-board">
          <img src={detail.scene} alt={`${solution.label}应用场景`} />
          <div>
            <span>场景配置</span>
            <h3>{detail.caseTitle}</h3>
            <p>{detail.caseCopy}</p>
          </div>
        </div>

        <div className="solution-proof-grid">
          {detail.deliverables.map((item) => (
            <div className="solution-proof-card" key={item}>
              <Check size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
