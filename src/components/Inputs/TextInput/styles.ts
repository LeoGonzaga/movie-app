import styled from "styled-components";

type Style = {
  color: string;
};
export const Container = styled.input<Style>`
  border: 1px solid #ccc;
  height: 2rem;
  width: 20rem;
  border-radius: 4px;
  color: ${(props) => props.color};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;
