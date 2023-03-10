import "./stylesClass.css";
import ParicipantCard from "../../components/participant";
import { useState } from "react";
import { GameType } from "../../types/GameType";
import { gameData } from "../../fakeData";
import { ParticipantType } from "../../types/ParticipantType";
import { participants } from "../../fakeData";
import {
  CardSpan,
  ContainerCard,
  DivContainer,
  MainContent,
  TittleCard,
} from "../../styles/container";

export default function Main() {
  const [game, setGame] = useState<GameType>({ ...gameData });
  const [allParticipants, setAllParticipants] = useState<ParticipantType[]>([
    ...participants,
  ]);
  const [selectParticipant, setSelectParticipant] =
    useState<ParticipantType | null>();

  const [votedParticipant, setVotedParticipant] =
    useState<ParticipantType | null>();

  function handleSelect(id: string) {
    if (!game) {
      return;
    }

    if (votedParticipant || !game.isActive) {
      return;
    }

    const localParticipants = [...allParticipants];

    localParticipants.forEach((participant) => {
      if (participant.id === id) {
        if (participant.id === selectParticipant?.id) {
          setSelectParticipant(null);
          return;
        }

        setSelectParticipant(participant);
      }
    });
  }

  function handleVote() {
    setVotedParticipant(selectParticipant);
  }

  function handleClearVote() {
    setSelectParticipant(null);
    setVotedParticipant(null);
  }

  return (
    <MainContent>
      <DivContainer>
        <CardSpan>BIG BYTE BRASIL - BBB</CardSpan>
        <TittleCard>
          {game.isActive
            ? "Quem você gostaria de eliminar?"
            : "Votação encerrada!"}
        </TittleCard>
        <ContainerCard>
          {game?.gameParticipants.map((gameParticipant) => (
            <div key={gameParticipant.participant.id}>
              {votedParticipant?.id === gameParticipant.participant.id && (
                <span>✅ Você votou!</span>
              )}
              <ParicipantCard
                gameParticipant={gameParticipant}
                handleSelect={handleSelect}
                selected={selectParticipant}
                voted={votedParticipant}
              />
            </div>
          ))}
        </ContainerCard>
        {game.isActive && (
          <button
            className={`${selectParticipant ? "btn__yellow" : "btn__gray"}`}
            onClick={() =>
              votedParticipant ? handleClearVote() : handleVote()
            }
          >
            {votedParticipant ? "Votar novamente" : "Confirmar voto"}
          </button>
        )}
      </DivContainer>
    </MainContent>
  );
}
