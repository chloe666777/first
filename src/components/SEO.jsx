import { useEffect } from 'react';

const DEFAULT_DESCRIPTION =
  'ICEFORM 注塑成型冰晶盒官方网站，展示母婴、户外、医药与生鲜配送冷链蓄冷产品。';

function setMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export default function SEO({ title, description = DEFAULT_DESCRIPTION, keywords }) {
  useEffect(() => {
    document.title = title ? `${title} | ICEFORM` : 'ICEFORM | 高性能冰晶盒解决方案';
    setMeta('description', description);
    setMeta('keywords', keywords);
  }, [description, keywords, title]);

  return null;
}
