import styled from "styled-components";

type Style = {
  color: string;
  colorText: string;
};
export const Container = styled.button<Style>`
  width: 10rem;
  height: 2.3rem;
  color: ${(props) => props.colorText};
  border: 0px;
  border-radius: 8px;
  background: rgb(249, 151, 33);
  background: linear-gradient(
    90deg,
    rgba(249, 151, 33, 1) 0%,
    rgba(252, 95, 55, 1) 100%
  );
`;
