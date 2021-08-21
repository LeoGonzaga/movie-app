import React from "react";

import { Container } from "./styles";
type CardType = {
  name: string;
  img: string;
};
const Card: React.FC<CardType> = ({ name, img }) => {
  return (
    <Container>
      <img width="100%" src={"https://image.tmdb.org/t/p/w500/" + img} alt={name} />
    </Container>
  );
};

export default Card;
