import { render } from '@testing-library/react';
import InquiryForm, { initialInquiryForm, validateInquiryForm } from './InquiryForm';

describe('validateInquiryForm', () => {
  it('requires scenario, contact, and message', () => {
    expect(validateInquiryForm(initialInquiryForm)).toEqual({
      scenario: '请填写产品场景。',
      contact: '请填写手机号或邮箱。',
      message: '请补充需求说明。',
    });
  });

  it('rejects invalid contact values', () => {
    expect(
      validateInquiryForm({
        ...initialInquiryForm,
        scenario: '生鲜配送',
        contact: 'invalid-contact',
        message: '需要 3000 件标准冰晶盒',
      }),
    ).toEqual({ contact: '请输入有效的手机号或邮箱。' });
  });

  it('accepts email and mobile contact values', () => {
    const baseForm = {
      ...initialInquiryForm,
      scenario: '医药冷链',
      message: '需要 2-8°C 冰排方案',
    };

    expect(validateInquiryForm({ ...baseForm, contact: 'buyer@example.com' })).toEqual({});
    expect(validateInquiryForm({ ...baseForm, contact: '13800138000' })).toEqual({});
  });
});

describe('InquiryForm', () => {
  it('matches snapshot', () => {
    const { container } = render(<InquiryForm />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
