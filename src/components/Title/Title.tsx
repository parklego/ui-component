import { ReactNode } from "react";
import styled from "styled-components";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <TitleStyle>{children}</TitleStyle>;
};

export default Title;

const TitleStyle = styled.h1`
  color: ${(props) => props.theme.color};
  font-size: 2.5rem;
  text-align: center;
  font-weight: 400;
  margin: 1rem;
`;
