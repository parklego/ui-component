import React from "react";

import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <LabelStyled>{name}</LabelStyled>
        <InputStyled
          type={type}
          name={name}
          ref={ref}
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  }
);

export default Input;

const LabelStyled = styled.label`
  font-size: 1.2rem;
`;
const InputStyled = styled.input`
  font-size: 1.2rem;
  border: 1px solid black;
  margin-bottom: 12px;
  border-radius: 2px;
  padding: 4px;
`;
