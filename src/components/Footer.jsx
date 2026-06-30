import { Link } from 'react-router-dom';
import { contactInfo, products, solutionTabs } from '../data/siteData';
import { ArrowUp } from 'lucide-react';
import LogoMark from './LogoMark';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link className="footer-brand" to="/">
            <LogoMark />
            ICEFORM
          </Link>
          <p>注塑成型冰晶盒制造商，为冷链、餐包、户外和医药运输提供稳定蓄冷方案。</p>
        </div>
        <div className="footer-contact">
          <span>{contactInfo.phone}</span>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <span>{contactInfo.location}</span>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <h2>产品系列</h2>
          {products.slice(0, 5).map((product) => (
            <Link key={product.id} to="/products">{product.name}</Link>
          ))}
        </div>
        <div>
          <h2>应用场景</h2>
          {solutionTabs.map((item) => (
            <Link key={item.id} to="/solutions">{item.label}</Link>
          ))}
        </div>
        <div>
          <h2>关于</h2>
          <Link to="/process">工艺能力</Link>
          <Link to="/contact">联系询价</Link>
          <a href={`mailto:${contactInfo.email}`}>资料下载</a>
        </div>
      </div>
      <p className="footer-bottom">&copy; {year} ICEFORM. All rights reserved.</p>
    </footer>
  );
}
