import styled from "styled-components";

type Style = {
  align: string;
  justify: string;
  direction: string;
};
export const Container = styled.div<Style>`
  display: flex;
  align-items: ${(props) => (props.align ? props.align : "initial")};
  justify-content: ${(props) => (props.justify ? props.justify : "initial")};
  flex-direction: ${(props) => (props.direction ? props.direction : "initial")}; ;
`;
