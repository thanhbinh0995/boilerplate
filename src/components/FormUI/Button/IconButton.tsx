const IconButton: FunctionComponent<{ icon: ReactNode } & IconButtonProps> = ({
  icon,
  color,
  size,
  disabled,
  children,
  onClick,
}) => {
  return (
    <MUIIconButton
      size={size}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {children}
    </MUIIconButton>
  );
};

export default IconButton;
