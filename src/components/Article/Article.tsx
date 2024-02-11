import { ReactNode } from "react";
import styled from "styled-components";

interface ArticleProps {
  children: ReactNode;
}

const Article = ({ children }: ArticleProps) => {
  return <ArticleStyle>{children}</ArticleStyle>;
};

export default Article;

const ArticleStyle = styled.div`
  width: 50%;
  margin: 50px auto;
  font-size: 1.5em;
  color: ${(props) => props.theme.color};
`;
