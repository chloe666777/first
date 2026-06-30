import InquiryForm from '../components/InquiryForm';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { contactInfo, faqs } from '../data/siteData';
import { HelpCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <SEO title="询价联系" description="联系 ICEFORM 获取冰晶盒、冰排、保温箱配套和 OEM 定制报价。" keywords="冰晶盒询价,冰排报价,OEM冰晶盒定制" />
      <PageHero image="/assets/page-contact-hero.png" title="询价联系页面横幅" />
      <section className="subpage subpage--with-hero contact-page">
      <div className="page-title">
        <span>Inquiry</span>
        <h1>询价联系</h1>
        <p>填写需求后，可按容量、颜色、模具、包装和目标价格继续深化报价。</p>
      </div>

      <div className="contact-shell">
        <div className="contact-aside">
          <h2>建议提前准备</h2>
          <p>目标容量、预计数量、使用场景、是否需要开模、是否需要品牌包装。</p>
          <div className="contact-lines">
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <span>{contactInfo.phone}</span>
            <span>{contactInfo.location}</span>
          </div>
        </div>
        <InquiryForm />
      </div>

      <div className="faq-section">
        <h2><HelpCircle size={20} style={{ verticalAlign: 'middle', marginRight: 6 }} />常见问题</h2>
        <div>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
