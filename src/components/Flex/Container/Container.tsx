import React from "react";

import { Container } from "./styles";

type FlexStyle = {
  direction: string;
  align: string;
  justify: string;
  children: any;
};
const Flex: React.FC<FlexStyle> = ({ children, align, direction, justify }) => {
  return (
    <Container align={align} direction={direction} justify={justify}>
      {children}
    </Container>
  );
};

export default Flex;
