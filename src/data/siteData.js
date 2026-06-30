export const navItems = [
  { label: '首页', path: '/' },
  { label: '产品中心', path: '/products' },
  { label: '应用方案', path: '/solutions' },
  { label: '工艺能力', path: '/process' },
  { label: '询价联系', path: '/contact' },
];

export const productCategories = ['全部', '保温箱配套', '母婴餐包', '医药冷链', 'OEM 定制'];

export const products = [
  {
    id: 'standard-long-lasting',
    name: '标准长效冰晶盒',
    category: '保温箱配套',
    desc: '加厚筋位结构与稳定蓄冷配方，适合生鲜配送、家庭冷藏和户外保温箱。',
    size: '600ml / 900ml / 1200ml',
    material: 'HDPE 外壳 + 蓄冷凝胶',
    temp: '-18°C 冷冻蓄冷',
    lead: '现货规格 3-7 天',
    image: '/assets/rectangular-cold-pack.jpg',
  },
  {
    id: 'apple-kids-pack',
    name: '儿童苹果冰晶盒',
    category: '母婴餐包',
    desc: '圆润边缘、趣味苹果造型与浅粉色外观，适配儿童午餐袋和母婴餐包。',
    size: '180ml / 260ml',
    material: '食品接触级 PE',
    temp: '0-8°C 保鲜',
    lead: '支持卡通外形定制',
    image: '/assets/apple-cold-pack.jpg',
  },
  {
    id: 'slim-lunch-board',
    name: '轻薄午餐冰板',
    category: '母婴餐包',
    desc: '薄型板式结构，快速贴合饭盒、便当包和小型冷藏空间。',
    size: '12mm 轻薄结构',
    material: '磨砂半透外壳',
    temp: '短途保鲜 4-6h',
    lead: '颜色可按渠道定制',
    image: '/assets/product-family.png',
  },
  {
    id: 'medical-cold-chain',
    name: '医药冷链冰排',
    category: '医药冷链',
    desc: '面向试剂运输、疫苗冷藏与周转箱配套，支持温区方案搭配。',
    size: '400g / 800g / 1600g',
    material: '高强度 HDPE',
    temp: '2-8°C / -15°C 可选',
    lead: '可配套验证方案',
    image: '/assets/product-family.png',
  },
  {
    id: 'brand-oem',
    name: '品牌 OEM 冰晶盒',
    category: 'OEM 定制',
    desc: '从外形、容量、颜色到模内纹理和包装，面向品牌渠道做差异化开发。',
    size: '按模具方案开发',
    material: 'PE / PP 可选',
    temp: '按蓄冷配方匹配',
    lead: '72h 初步结构建议',
    image: '/assets/product-family.png',
  },
];

export const solutionTabs = [
  {
    id: 'baby',
    label: '母婴餐包',
    title: '让儿童餐食在通勤和校园路上保持清爽',
    copy: '轻薄冰板与苹果造型冰晶盒组合，兼顾安全触感、趣味外观和短途保鲜效率。',
    points: ['圆角防碰撞', '食品接触级材料', '低温不脆裂', '可做品牌礼盒'],
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
    points: ['快速装箱', '规格稳定', '周转损耗低', '可批量供货'],
  },
  {
    id: 'medical',
    label: '医药冷链',
    title: '面向 2-8°C 与低温转运的冷媒配套',
    copy: '根据周转箱、验证时长和温控区间，提供冰排尺寸与冷媒配方建议。',
    points: ['温区方案', '批次追溯', '耐摔外壳', '医药箱配套'],
  },
];

export const processSteps = [
  ['01', '需求定义', '确认容量、温区、外形、颜色、包装和目标渠道。'],
  ['02', '结构评估', '输出筋位、壁厚、口部密封和堆叠方式建议。'],
  ['03', '模具开发', '按批量规模选择开模方案，控制尺寸稳定性。'],
  ['04', '注塑成型', '稳定注塑参数，保证外壳强度与表面质感。'],
  ['05', '灌装密封', '蓄冷剂灌装、口部封合、气密与跌落检查。'],
  ['06', '包装交付', '按渠道包装、外箱唛头和物流方式完成交付。'],
];

export const certifications = [
  { title: 'FDA 接触材料', copy: '面向出口渠道的食品接触材料合规支持。' },
  { title: 'ISO 9001', copy: '稳定的生产过程、抽检记录与批次管理。' },
  { title: '食品级检测', copy: '可按项目提供第三方检测报告。' },
  { title: '温控验证', copy: '医药与生鲜场景可配合完成温区验证。' },
];

export const caseStudies = [
  {
    company: '区域生鲜电商平台',
    industry: '生鲜配送',
    challenge: '夏季末端配送温度波动大，冰袋损耗率高。',
    result: '换用长效冰晶盒后，周转损耗下降 42%，单箱冷量更稳定。',
  },
  {
    company: '儿童餐包品牌',
    industry: '母婴餐包',
    challenge: '需要安全、轻薄且有记忆点的配套冷媒产品。',
    result: '定制苹果造型冰晶盒，成为礼盒套装的高识别度配件。',
  },
];

export const faqs = [
  ['最小起订量是多少？', '现货标准规格可小批量起订，OEM 开模项目会根据结构复杂度和颜色数量单独评估。'],
  ['可以定制颜色和造型吗？', '可以。支持容量、外形、颜色、Logo、外包装和冷媒配方的组合定制。'],
  ['是否支持医药冷链温区验证？', '支持按周转箱、目标温区和运输时长提供冰排搭配建议，并配合验证测试。'],
  ['样品周期通常多久？', '现货样品通常 3-7 天寄出，定制结构需先完成方案评估。'],
];

export const contactInfo = {
  email: import.meta.env.VITE_INQUIRY_EMAIL || 'sales@iceform.com',
  phone: '+86 400-888-ICEFORM',
  location: '中国 浙江',
};
