import { render } from '@testing-library/react';
import ProductCard from './ProductCard';
import { products } from '../data/siteData';

describe('ProductCard', () => {
  it('matches snapshot', () => {
    const { container } = render(<ProductCard product={products[0]} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
