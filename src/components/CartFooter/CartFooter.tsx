import * as Styled from './styled';

type Props = {};

export function CartFooter(props: Props) {
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <Styled.Title>Subtotal:</Styled.Title>
        <Styled.Price>$XXXXX.XX HKD</Styled.Price>
      </Styled.Item>
      <Styled.Item>
        <Styled.Title>Taxes &amp; Duties:</Styled.Title>
        <Styled.Price>$XXX.XX HKD</Styled.Price>
      </Styled.Item>
      <Styled.Item>
        <Styled.Title>Shipping:</Styled.Title>
        <Styled.Price>$XX.XX HKD</Styled.Price>
      </Styled.Item>
      <Styled.FooterItem>
        <Styled.FooterTitle>Order Total:</Styled.FooterTitle>
        <Styled.FooterPrice>$XXXXX.XX HKD</Styled.FooterPrice>
      </Styled.FooterItem>
    </Styled.Wrapper>
  );
}
