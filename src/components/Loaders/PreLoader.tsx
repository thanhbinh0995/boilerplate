import * as Styled from './styled';

const PreLoader: FunctionComponent<{
  width?: string;
  height?: string;
  size?: string;
}> = ({ width, height, size }) => (
  <Styled.PreLoader width={width} height={height}>
    <Styled.DotElement size={size} />
    <Styled.DotElement size={size} />
    <Styled.DotElement size={size} />
  </Styled.PreLoader>
);

PreLoader.defaultProps = {
  width: '100vw',
  height: '100vh',
  size: '16px',
};

export default PreLoader;
