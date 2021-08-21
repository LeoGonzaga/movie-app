import styled from "styled-components";

type Style = {
  color: string;
  colorText: string;
};
export const Container = styled.button<Style>`
  background-color: ${(props) => props.color};
  width: 10rem;
  height: 2rem;
  color: ${(props) => props.colorText};
  border: 0px;
  border-radius: 8px;
`;
