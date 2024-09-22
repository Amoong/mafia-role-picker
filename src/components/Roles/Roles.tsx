import { RoleInfo } from "../../types";
import Role from "./Role";

interface Props {
  RoleInfoList: RoleInfo[];
}

function Roles(props: Props) {
  return (
    <fieldset>
      <legend>직업 설정</legend>
      {props.RoleInfoList.map((roleInfo) => (
        <Role
          key={roleInfo.name}
          roleName={roleInfo.name}
          num={roleInfo.num}
          setNum={roleInfo.setNum}
        />
      ))}
    </fieldset>
  );
}

export default Roles;
