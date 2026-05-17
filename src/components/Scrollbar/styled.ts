const verticalStyle = `
  overflow-y: hidden !important;
  margin-right: 0 !important;
`;

const horizontalStyle = `
  overflow-x: hidden !important;
  margin-bottom: 0 !important;
`;

export const ScrollView = styled('div')<{
  hideVertical: boolean;
  hideHorizontal: boolean;
}>(
  ({ hideVertical, hideHorizontal }) => css`
    ${hideVertical && verticalStyle};
    ${hideHorizontal && horizontalStyle};
  `,
);
