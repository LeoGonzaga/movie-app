import React from "react";

import { Container, ActionButton, Avarage } from "./styles";
type CardType = {
  name: string;
  img: string;
  average: number;
};
const Card: React.FC<CardType> = ({ name, img, average }) => {
  return (
    <Container>
      <ActionButton>
        <img src="https://cdn.iconscout.com/icon/free/png-256/heart-hospital-2134368-1796638.png" alt="" />
      </ActionButton>
      <img
        width="100%"
        src={"https://image.tmdb.org/t/p/w500/" + img}
        alt={name}
      />
      {/* <Avarage>{average.toString()}</Avarage> */}
    </Container>
  );
};

export default Card;
