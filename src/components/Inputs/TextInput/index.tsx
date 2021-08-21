import React from "react";

import { Container } from "./styles";

type TextInputType = {
  color: string;
};
const TextInput: React.FC<TextInputType> = ({ color }) => {
  return <Container color={color} />;
};

export default TextInput;
