import * as Styled from './styled';

const SpinLoading: FunctionComponent<
  { size?: number; color?: keyof Theme['palette'] } & BoxProps
> = ({ size, color, ...props }) => (
  <Styled.SpinLoading size={size} spinColor={color} {...props} />
);

SpinLoading.defaultProps = {
  size: 32,
  color: 'smalt',
  width: '100%',
};

export default SpinLoading;
