import { useEffect } from 'react';

const DEFAULT_TITLE = 'ICEFORM | 高性能冰晶盒解决方案';
const DEFAULT_DESCRIPTION =
  'ICEFORM 注塑成型冰晶盒官方网站，展示母婴、户外、医药与生鲜配送冷链蓄冷产品。';

function setMeta(name, content) {
  if (!content) return () => {};

  let tag = document.querySelector(`meta[name="${name}"]`);
  const created = !tag;
  const previousContent = tag?.getAttribute('content');

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    tag.setAttribute('data-managed-by', 'iceform-seo');
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);

  return () => {
    if (!tag) return;

    if (created) {
      tag.remove();
      return;
    }

    if (previousContent === null) {
      tag.removeAttribute('content');
      return;
    }

    tag.setAttribute('content', previousContent);
  };
}

export default function SEO({ title, description = DEFAULT_DESCRIPTION, keywords }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} | ICEFORM` : DEFAULT_TITLE;

    const cleanupDescription = setMeta('description', description);
    const cleanupKeywords = setMeta('keywords', keywords);

    return () => {
      document.title = previousTitle;
      cleanupDescription();
      cleanupKeywords();
    };
  }, [description, keywords, title]);

  return null;
}
