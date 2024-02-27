import React from "react";

import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isRequired: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, label, isRequired, value, placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <LabelStyled>
          {label}
          {isRequired && <span> *</span>}
        </LabelStyled>

        <div>
          <InputStyled
            type={type}
            name={name}
            ref={ref}
            placeholder={placeholder}
            {...props}
          />
          <span>{value}</span>
        </div>
      </div>
    );
  }
);

export default Input;

const LabelStyled = styled.label`
  display: inline;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;
const InputStyled = styled.input`
  width: ${(props) => (props.type === "checkbox" ? "5%" : "100%")};
  font-size: 1.2rem;
  border: 1px solid black;
  margin-bottom: 12px;
  border-radius: 2px;
  padding: 4px;

  margin-right: 5px;
`;
