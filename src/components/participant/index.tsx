import "./stylesClass.css";
import { GameParticipantType } from "../../types/GameParticipantType";
import { ParticipantType } from "../../types/ParticipantType";
import {
  ParticipantCard,
  TittleCard,
  ImgCard,
} from "../../styles/componentCard";

interface IProps {
  gameParticipant: GameParticipantType;
  handleSelect: (id: string) => void;
  selected?: ParticipantType | null;
  voted?: ParticipantType | null;
}

export default function ParicipantCard({
  gameParticipant,
  handleSelect,
  selected,
  voted,
}: IProps) {
  const { participant } = gameParticipant;
  return (
    <div
      className={
        selected?.id === participant.id 
          ? `${"class__selected"}`
          : `${"class__default"}`
      }
      style={{
        filter: `
      ${voted && voted.id !== participant.id ? "grayscale(1.0)" : ""}
      `,
      }}
      onClick={() => handleSelect(participant.id)}
    >
      <ParticipantCard>
       <div>
       <TittleCard>{participant.name}</TittleCard>
        {participant.eliminated && (
          <p>Eliminado {gameParticipant.percent.toFixed(1)}%</p>
        )}
       </div>
        <ImgCard src={participant.avatar} alt="" />
      </ParticipantCard>
    </div>
  );
}
