import MessageError from 'components/MessageError';
import * as Styled from './styled';

const Input: FunctionComponent<
  {
    inputRef?: Ref<HTMLInputElement>;
    control: Control<App.Any>;
    name: string;
    rules?: Omit<
      RegisterOptions,
      'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
    >;
    hideClear?: boolean;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    onClear?: () => void;
  } & TextFieldProps
  // eslint-disable-next-line max-lines-per-function
> = ({
  inputRef,
  control,
  name,
  rules,
  defaultValue,
  type,
  label,
  size,
  placeholder,
  multiline,
  rows,
  maxRows,
  hideClear,
  inputProps,
  hiddenLabel,
  minRows,
  disabled,
  startAdornment,
  endAdornment,
  helperText,
  required,
  onChange,
  onBlur,
  onFocus,
  onClear,
  onKeyDown,
}) => {
  const { field, formState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const errorMessage = get(formState, ['errors', name]);
  const hasError = !isEmpty(errorMessage);

  const inputType = useMemo<TextFieldProps['type']>(() => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    }
    return type;
  }, [showPassword, type]);

  const clearValue = (): void => {
    field.onChange('');
    handleBlur();
    onClear();
  };

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleMouseDown = (event: ReactMouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const renderEyeIcon = (): ReactNode => {
    if (type === 'password') {
      return (
        <Styled.RightIcon onClick={toggleShowPassword}>
          {showPassword ? (
            <EyeIcon color={theme.palette.lynch} size={16} />
          ) : (
            <EyeSlashIcon color={theme.palette.lynch} size={16} />
          )}
        </Styled.RightIcon>
      );
    }
    return null;
  };

  const renderClearIcon = (): ReactNode => {
    if (hideClear) {
      return null;
    }
    return (
      <Styled.RightIcon onClick={clearValue} onMouseDown={handleMouseDown}>
        <XCircleIcon color={theme.palette.lynch} />
      </Styled.RightIcon>
    );
  };

  const renderSuffixIcons = (): ReactNode => {
    if (field.value) {
      return (
        <Styled.RightIcons>
          {renderEyeIcon()}
          {renderClearIcon()}
        </Styled.RightIcons>
      );
    }
    return null;
  };

  const renderError = () => {
    if (hasError) {
      return (
        <Styled.ErrorMessage>
          <MessageError errors={formState.errors} name={name} />
        </Styled.ErrorMessage>
      );
    }
    return null;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    field.onChange(event);
    onChange(event.target.value);
  };

  const handleBlur = () => {
    field.onBlur();
    onBlur();
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={() => (
        <MUITextField
          inputRef={inputRef}
          fullWidth
          type={inputType}
          InputProps={{
            endAdornment: endAdornment || renderSuffixIcons(),
            startAdornment,
          }}
          error={hasError}
          label={label}
          placeholder={placeholder}
          size={size}
          multiline={multiline}
          rows={rows}
          hiddenLabel={hiddenLabel}
          minRows={minRows}
          maxRows={maxRows}
          disabled={disabled}
          autoComplete={type === 'password' ? 'new-password' : 'off'}
          helperText={helperText || renderError()}
          required={required}
          name={field.name}
          value={field.value}
          inputProps={inputProps}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
        />
      )}
    />
  );
};

export default Input;
