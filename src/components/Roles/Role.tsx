interface Props {
  roleName: string;
  num: number;
  setNum: (num: number) => void;
}

function Role(props: Props) {
  const onClickMinusBtn = () => {
    if (props.num <= 0) {
      return;
    }

    props.setNum(props.num - 1);
  };

  return (
    <div>
      <span>{props.roleName}</span>
      <button onClick={onClickMinusBtn}>-</button>
      <span>{props.num}</span>
      <button onClick={() => props.setNum(props.num + 1)}>+</button>
    </div>
  );
}

export default Role;
