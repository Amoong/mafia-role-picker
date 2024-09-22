import { FormEvent } from "react";
import "./Participants.css";

interface ParticipantsForm extends HTMLFormElement {
  participant: HTMLInputElement;
}

interface Props {
  participants: string[];
  addParticipant: (participant: string) => void;
}

function Participants(props: Props) {
  const onSubmit = (e: FormEvent<ParticipantsForm>) => {
    e.preventDefault();

    const $input = e.currentTarget.participant;

    props.addParticipant($input.value);
    $input.value = "";
  };

  return (
    <form action="#" onSubmit={onSubmit}>
      <fieldset>
        <legend>참가자 설정</legend>
        <input autoComplete="off" name="participant" type="text" />
        <button>추가</button>
        <br />
        <div className="participant-list">
          {props.participants.map((participant) => (
            <span className="participant-item">{participant}</span>
          ))}
        </div>
      </fieldset>
    </form>
  );
}

export default Participants;
