import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root borderRadius={"lg"} overflow="hidden">
        <Image src={game.background_image} />
        <Card.Header fontSize="medium">{game.name}</Card.Header>
        <Card.Body padding={3}></Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
