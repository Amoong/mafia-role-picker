interface Props {
  result: { roleName: string; participants: string[] }[];
}

function Results(props: Props) {
  return (
    <table>
      <thead>
        <tr>
          <td>직업</td>
          <td>참가자</td>
        </tr>
      </thead>
      <tbody>
        {props.result.map((info) => (
          <tr key={info.roleName}>
            <td>{info.roleName}</td>
            <td>{info.participants}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Results;
