import React from "react";

import { Container } from "./styles";

type ButtonType = {
  text: string;
  color: string;
  colorText: string;
};
const PrimaryButton: React.FC<ButtonType> = ({ text, color, colorText }) => {
  return (
    <Container color={color} colorText={colorText}>
      {text}
    </Container>
  );
};

export default PrimaryButton;
