import { ChangeEventHandler, ReactNode } from "react";
import * as S from "./styles";

export interface I_SelectProps {
  placeholder?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  error?: string;
  children?: ReactNode;
}

export const Select: React.FC<I_SelectProps> = ({
  placeholder,
  name,
  onChange,
  error,
  children,
}) => {
  return (
    <label>
      {placeholder}
      <S.ErrorSelect>{error}</S.ErrorSelect>
      <S.Select name={name} onChange={onChange}>
        <S.Option hidden disabled selected />
        {children}
      </S.Select>
    </label>
  );
};
