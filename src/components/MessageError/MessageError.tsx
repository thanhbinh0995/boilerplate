import * as Styled from './styled';

const MessageError: FunctionComponent<{
  errors: FieldErrors<FieldValues>;
  name: string;
}> = ({ errors, name }) => {
  return (
    <>
      {flatten([errors]).map((error, idx) => {
        const field = get(error, name);
        return <Styled.Error key={idx}>{get(field, 'message')}</Styled.Error>;
      })}
    </>
  );
};

export default MessageError;
