import React from "react";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Flex from "../../components/Flex/Container/Container";
import TextInput from "../../components/Inputs/TextInput";

import { Container } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <Flex align="center" direction="column" justify="center">
        <TextInput  />
        <PrimaryButton text="uai" color="#F99721" colorText="#fff" />
      </Flex>
    </Container>
  );
};

export default Login;
