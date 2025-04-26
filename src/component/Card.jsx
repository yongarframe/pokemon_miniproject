import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import { memo, useState } from "react";

const CardContainer = styled.section`
  background-color: white;
  width: 150px;
  border: 1px solid gray;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  border-bottom: 5px solid black;
  border-right: 5px solid black;
  &:hover {
    background-color: white;
    transform: scale(1.1);
    transition: 0.3s;
    filter: drop-shadow(0 0 30px rgb(0, 0, 0, 0.5));
    /* box-shadow: 10px 5px 5px gray; */
  }
  img {
    width: 120px;
  }
`;

const Spiner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f0f3f7;
  border-top: 5px solid red;
  border-radius: 50%;
  animation: rotatespinner 1s infinite;
  animation-timing-function: linear;

  @keyframes rotatespinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Card = memo(({ pokemon }) => {
  const [isImageLoading, setisImageLoading] = useState(true);
  const navigate = useNavigate();
  console.log("card");
  return (
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      {isImageLoading ? <Spiner></Spiner> : null}
      <img
        onLoad={() => setisImageLoading(false)}
        src={pokemon.front}
        style={{ display: isImageLoading ? "none" : "block" }}
      ></img>
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CardContainer>
  );
});
