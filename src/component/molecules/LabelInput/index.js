import { Input } from '../../atoms/Input';
import { StyledLabel } from './style';

export const LabelInput = ({ htmlFor, id, label, onChange, type, input }) => {
  return (
    <div>
      <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>
      <Input id={id} onChange={onChange} type={type} input={input} />
    </div>
  );
};
