import CartHeader from 'components/CartHeader';
import CartItem from 'components/CartItem';
import CartFooter from 'components/CartFooter';
import { products } from './rawData';
import * as Styled from './styled';

export default function HomeContainer() {
  return (
    <Styled.Wrapper>
      <CartHeader />
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <CartFooter />
    </Styled.Wrapper>
  );
}
