import { useState } from "react";
import "./App.css";
import Roles from "./components/Roles/Roles";
import Participants from "./components/Participants";
import Results from "./components/Results";

function App() {
  const [mafiaNum, setMafiaNum] = useState(0);
  const [policeNum, setPoliceNum] = useState(0);
  const [doctorNum, setDoctorNum] = useState(0);
  const [spyNum, setSpyNum] = useState(0);
  const [psychicNum, setPsychicNum] = useState(0);

  const [participants, setParticipants] = useState<string[]>([]);

  const [result, setResult] = useState<
    { roleName: string; participants: string[] }[]
  >([]);

  const addParticipant = (participant: string) =>
    setParticipants((prev) => [...prev, participant]);

  const roleInfoList = [
    { name: "마피아", num: mafiaNum, setNum: setMafiaNum },
    { name: "경찰", num: policeNum, setNum: setPoliceNum },
    { name: "의사", num: doctorNum, setNum: setDoctorNum },
    { name: "스파이", num: spyNum, setNum: setSpyNum },
    { name: "영매", num: psychicNum, setNum: setPsychicNum },
  ];

  const availableRoles = roleInfoList.filter((role) => role.num > 0);

  const resultPlaceHolder = availableRoles.map(({ name }) => ({
    roleName: name,
    participants: [],
  }));

  const onClickPickBtn = () => {
    let numToPick = availableRoles.reduce((sum, role) => sum + role.num, 0);

    const participantsPool = [...participants];
    let poolSize = participantsPool.length;

    let selectedParticipants: string[] = [];

    while (numToPick > 0) {
      const selectedIndex = Math.floor(Math.random() * poolSize);
      selectedParticipants.push(participantsPool[selectedIndex]);
      participantsPool[selectedIndex] = participantsPool[poolSize - 1];

      poolSize--;
      numToPick--;
    }

    let startIdx = 0;

    const pickResult = availableRoles.map((role) => {
      const roleWithParticipants = {
        roleName: role.name,
        participants: selectedParticipants.slice(startIdx, startIdx + role.num),
      };

      startIdx += role.num;

      return roleWithParticipants;
    });

    setResult(pickResult);
  };

  return (
    <div className="App">
      <Roles RoleInfoList={roleInfoList} />
      <Participants
        participants={participants}
        addParticipant={addParticipant}
      />
      <Results result={result.length > 0 ? result : resultPlaceHolder} />
      <button onClick={onClickPickBtn}>뽑기</button>
    </div>
  );
}

export default App;
