export default ({
  value,
  onClick,
  disabled,
  winner,
}: {
  value: "X" | "O" | "-";
  onClick: Function;
  winner?: boolean;
  disabled: boolean;
}) => {
  const btnClass = `border-solid border-black border-2 w-20 h-20 text-xl
  } font-extrabold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100 ${computeBackground(
    value,
    winner,
    false
  )} hover:${computeBackground(value, winner, true)}`;
  return (
    <button className={btnClass} onClick={() => onClick()} disabled={disabled}>
      {value}
    </button>
  );
};

const computeBackground = (
  value: "X" | "O" | "-",
  winner?: boolean,
  hover?: boolean
) => {
  if (winner) {
    return "bg-green-" + (hover ? "700" : "500");
  }
  return "bg-amber-" + (hover ? "700" : value === "-" ? "600" : "400");
};
