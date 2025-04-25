import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const CardContainer = styled.section`
  width: 150px;
  border: 1px solid gray;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  img {
    width: 120px;
  }
`;

export const Card = ({ pokemon }) => {
  const navigate = useNavigate();
  return (
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <img src={pokemon.front}></img>
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CardContainer>
  );
};
