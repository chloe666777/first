import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <section className="subpage not-found">
      <SEO title="页面未找到" description="你访问的 ICEFORM 页面不存在，请返回首页或产品中心继续浏览。" />
      <span>404</span>
      <h1>页面没有找到</h1>
      <p>链接可能已经更新。你可以回到首页，或直接查看产品中心。</p>
      <div className="hero-actions">
        <Link className="button primary" to="/">返回首页</Link>
        <Link className="button secondary" to="/products">查看产品</Link>
      </div>
    </section>
  );
}
