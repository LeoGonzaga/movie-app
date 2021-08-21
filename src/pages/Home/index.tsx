import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import TextInput from "../../components/Inputs/TextInput";
import { Container, Wrapper } from "./styles";

type Movies = {
  title: string;
  poster_path: string;
  vote_average: number;
};
const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const getMovies = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=48c278a59589fa593d4cbec3598fec19"
    );
    let resJSON = await response.json();
    console.log(resJSON.results);
    setMovies(resJSON.results);
  };

  console.log(movies);
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <Container>
      <Wrapper>
        <TextInput />
      </Wrapper>
      <Wrapper>
        {movies.length > 0 &&
          movies.map((elem) => (
            <Card
              key={elem.title}
              name={elem.title}
              img={elem.poster_path}
              average={elem.vote_average}
            />
          ))}
      </Wrapper>
    </Container>
  );
};

export default Home;
