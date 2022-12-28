import { ChangeEventHandler } from "react";
import * as S from "./styles";

export interface I_TextInputProps {
  placeholder?: string;
  type?: "text" | "number";
  name?: string;
  value?: string;
  min?: number;
  max?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

export const TextInput: React.FC<I_TextInputProps> = ({
  type,
  name,
  value,
  min,
  max,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <label>
      {placeholder}
      <S.Error>{error}</S.Error>
      <S.Input
        type={type}
        name={name}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
    </label>
  );
};
