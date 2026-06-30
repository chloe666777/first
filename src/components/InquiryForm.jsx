import { useState } from 'react';
import { contactInfo } from '../data/siteData';
import { Send, RotateCcw, CheckCircle, AlertCircle, LoaderCircle } from 'lucide-react';

export const initialInquiryForm = {
  type: 'OEM 定制',
  quantity: '3000-10000 件',
  scenario: '',
  contact: '',
  message: '',
};

const CONTACT_PATTERN = /^((1[3-9]\d{9})|([\w.+-]+@[\w-]+(\.[\w-]+)+))$/;
const inquiryEndpoint = import.meta.env.VITE_INQUIRY_ENDPOINT;

export function validateInquiryForm(form) {
  const errors = {};
  if (!form.scenario.trim()) errors.scenario = '请填写产品场景。';
  if (!form.contact.trim()) {
    errors.contact = '请填写手机号或邮箱。';
  } else if (!CONTACT_PATTERN.test(form.contact.trim())) {
    errors.contact = '请输入有效的手机号或邮箱。';
  }
  if (!form.message.trim()) errors.message = '请补充需求说明。';
  return errors;
}

async function submitInquiry(form) {
  if (!inquiryEndpoint) {
    throw new Error('询价提交服务尚未配置，请设置 VITE_INQUIRY_ENDPOINT。');
  }

  const response = await fetch(inquiryEndpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...form,
      source: 'iceform-official-site',
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error('提交失败，请稍后重试或直接发送邮件联系。');
  }
}

export default function InquiryForm() {
  const [form, setForm] = useState(initialInquiryForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus('idle');
    setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validateInquiryForm(form);
    setErrors(next);
    setSubmitError('');

    if (Object.keys(next).length) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      await submitInquiry(form);
      setStatus('success');
      setForm(initialInquiryForm);
    } catch (error) {
      setStatus('submit-error');
      setSubmitError(error.message);
    }
  };

  const resetForm = () => {
    setForm(initialInquiryForm);
    setErrors({});
    setStatus('idle');
    setSubmitError('');
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate>
      <label>
        <span>需求类型</span>
        <select value={form.type} onChange={(e) => updateField('type', e.target.value)}>
          <option>产品批发</option>
          <option>OEM 定制</option>
          <option>医药冷链配套</option>
        </select>
      </label>
      <label>
        <span>预计数量</span>
        <select value={form.quantity} onChange={(e) => updateField('quantity', e.target.value)}>
          <option>500-3000 件</option>
          <option>3000-10000 件</option>
          <option>10000 件以上</option>
        </select>
      </label>
      <label>
        <span>产品场景 *</span>
        <input
          value={form.scenario}
          onChange={(e) => updateField('scenario', e.target.value)}
          placeholder="例如：儿童餐包 / 生鲜配送 / 医药箱"
          required
        />
        {errors.scenario && <small className="field-error">{errors.scenario}</small>}
      </label>
      <label>
        <span>联系方式 *</span>
        <input
          value={form.contact}
          onChange={(e) => updateField('contact', e.target.value)}
          placeholder="手机号或邮箱"
          required
        />
        {errors.contact && <small className="field-error">{errors.contact}</small>}
      </label>
      <label className="wide">
        <span>补充说明 *</span>
        <textarea
          value={form.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="容量、颜色、包装、目标温区或参考样品..."
          required
        />
        {errors.message && <small className="field-error">{errors.message}</small>}
      </label>
      {status === 'success' && (
        <p className="form-note success">
          <CheckCircle size={16} /> 询价信息已提交，我们会尽快联系你。
        </p>
      )}
      {status === 'error' && (
        <p className="form-note error">
          <AlertCircle size={16} /> 请先完善标记字段。
        </p>
      )}
      {status === 'submit-error' && (
        <p className="form-note error">
          <AlertCircle size={16} /> {submitError} 也可以发送邮件至 {contactInfo.email}。
        </p>
      )}
      <div className="form-actions">
        <button className="btn btn--primary" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? <LoaderCircle className="spin" size={16} /> : <Send size={16} />}
          {status === 'submitting' ? '提交中' : '提交询价'}
        </button>
        <button className="btn btn--ghost" type="button" onClick={resetForm}>
          <RotateCcw size={16} /> 重置
        </button>
      </div>
    </form>
  );
}
