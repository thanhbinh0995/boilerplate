const Button: FunctionComponent<{ label?: string } & LoadingButtonProps> = ({
  label,
  variant = 'contained',
  color,
  loading,
  disabled,
  size = 'medium',
  type = 'button',
  startIcon,
  endIcon,
  fullWidth,
  onClick,
}) => {
  return (
    <MUILoadingButton
      disableElevation
      variant={variant}
      color={color}
      loading={loading}
      disabled={disabled}
      size={size}
      type={type}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      fullWidth={fullWidth}
    >
      {label}
    </MUILoadingButton>
  );
};

export default Button;
