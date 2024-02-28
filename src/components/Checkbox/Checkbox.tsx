import React from "react";
import styled from "styled-components";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ name, value, ...props }, ref) => {
    return (
      <CheckboxWrapper>
        <CheckboxStyled
          type="checkbox"
          name={name}
          id={name}
          ref={ref}
          {...props}
        />
        <LabelStyled htmlFor={name}>{value}</LabelStyled>
      </CheckboxWrapper>
    );
  }
);

export default Checkbox;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxStyled = styled.input`
  appearance: none;

  width: 18px;
  height: 18px;
  border: 1px solid #000;
  border-radius: 2px;
  cursor: pointer;

  &:checked {
    width: 18px;
    height: 18px;
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Black_check.svg/1200px-Black_check.svg.png");
    background-size: cover;
    background-position: center;
  }
`;

const LabelStyled = styled.label`
  padding-left: 5px;
  font-size: 16px;
  cursor: pointer;
`;
