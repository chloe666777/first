import { useMemo, useState } from 'react';
import { contactInfo } from '../data/siteData';

const initialForm = {
  type: 'OEM 定制',
  quantity: '3000-10000 件',
  scenario: '',
  contact: '',
  message: '',
};

function validate(form) {
  const errors = {};
  if (!form.scenario.trim()) errors.scenario = '请填写产品场景。';
  if (!form.contact.trim()) {
    errors.contact = '请填写手机号或邮箱。';
  } else if (!/^((1[3-9]\d{9})|([\w.+-]+@[\w-]+(\.[\w-]+)+))$/.test(form.contact.trim())) {
    errors.contact = '请输入有效的手机号或邮箱。';
  }
  if (!form.message.trim()) errors.message = '请补充容量、温区或包装需求。';
  return errors;
}

export default function InquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`ICEFORM 询价 - ${form.type}`);
    const body = encodeURIComponent(
      `需求类型：${form.type}\n预计数量：${form.quantity}\n产品场景：${form.scenario}\n联系方式：${form.contact}\n补充说明：${form.message}`,
    );
    return `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  }, [form]);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus('idle');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus('error');
      return;
    }

    setStatus('success');
    window.location.href = mailtoHref;
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setStatus('idle');
  };

  return (
    <form className="quote-form expanded" onSubmit={handleSubmit} noValidate>
      <label>
        <span>需求类型</span>
        <select value={form.type} onChange={(event) => updateField('type', event.target.value)}>
          <option>产品批发</option>
          <option>OEM 定制</option>
          <option>医药冷链配套</option>
        </select>
      </label>
      <label>
        <span>预计数量</span>
        <select value={form.quantity} onChange={(event) => updateField('quantity', event.target.value)}>
          <option>500-3000 件</option>
          <option>3000-10000 件</option>
          <option>10000 件以上</option>
        </select>
      </label>
      <label>
        <span>产品场景 *</span>
        <input
          value={form.scenario}
          onChange={(event) => updateField('scenario', event.target.value)}
          placeholder="例如：儿童餐包 / 生鲜配送 / 医药箱"
          required
        />
        {errors.scenario && <small className="field-error">{errors.scenario}</small>}
      </label>
      <label>
        <span>联系方式 *</span>
        <input
          value={form.contact}
          onChange={(event) => updateField('contact', event.target.value)}
          placeholder="请输入手机号或邮箱"
          required
        />
        {errors.contact && <small className="field-error">{errors.contact}</small>}
      </label>
      <label className="wide">
        <span>补充说明 *</span>
        <textarea
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          placeholder="容量、颜色、包装、目标温区或参考样品..."
          required
        />
        {errors.message && <small className="field-error">{errors.message}</small>}
      </label>
      {status === 'success' && <p className="form-note success">已为你打开邮件草稿，也可以继续修改后再次提交。</p>}
      {status === 'error' && <p className="form-note error">请先完善标记字段。</p>}
      <div className="form-actions">
        <button type="submit">提交询价</button>
        <button type="button" className="ghost" onClick={resetForm}>
          重置
        </button>
      </div>
    </form>
  );
}
