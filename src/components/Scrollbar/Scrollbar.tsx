import { Scrollbars } from 'react-custom-scrollbars-2';
import * as Styled from './styled';
import type { ScrollbarProps } from 'react-custom-scrollbars-2';

const Scrollbar: ForwardRefRenderFunction<
  Scrollbars,
  ScrollbarProps & { hideVertical?: boolean; hideHorizontal?: boolean }
> = (props, ref: Ref<Scrollbars>) => {
  const {
    height,
    children,
    autoHeightMin,
    autoHeight = true,
    autoHeightMax = 400,
    hideHorizontal = true,
    hideVertical,
  } = props;
  return (
    <Scrollbars
      ref={ref}
      autoHide
      height={height}
      autoHeight={autoHeight}
      autoHeightMax={height ? height : autoHeightMax}
      autoHeightMin={height ? height : autoHeightMin}
      {...props}
      renderView={(data) => (
        <Styled.ScrollView
          {...data}
          hideVertical={hideVertical}
          hideHorizontal={hideHorizontal}
        />
      )}
    >
      {children}
    </Scrollbars>
  );
};

export default forwardRef(Scrollbar);
