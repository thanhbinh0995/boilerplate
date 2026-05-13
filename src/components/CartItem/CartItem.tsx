import * as Styled from './styled';

const CartItem: FunctionComponent<{ product: ProductManagement.Product }> = (
  props,
) => {
  const { product } = props;
  const { brand, name, code, color, price, image } = product;

  console.log(product)
  
  return (
    <Styled.Wrapper>
      <Styled.ProductImgWrapper>
        {image ? (
          <Styled.ProductImg src={image} alt="Example" />
        ) : (
          <Styled.EmptyImg />
        )}
      </Styled.ProductImgWrapper>
      <Styled.ProductInfo>
        <Styled.ProductBrand>{brand}.</Styled.ProductBrand>
        <Styled.ProductName>{name}</Styled.ProductName>
        <Styled.ProductColor>Color: {color}</Styled.ProductColor>
        <Styled.ProductCode>{code}</Styled.ProductCode>
      </Styled.ProductInfo>
      <Styled.Price>${price} HKD</Styled.Price>
    </Styled.Wrapper>
  );
};

export default CartItem;
