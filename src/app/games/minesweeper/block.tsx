const Block = ({
  value,
  onClick,
  onRightClick,
  disabled,
}: {
  value: string;
  onClick: () => void;
  onRightClick: () => void;
  disabled: boolean;
}) => {
  const btnClass = `border-solid border-black border-2 w-20 h-20 text-xl
    } font-extrabold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100 ${computeBackground(
      value,
      false
    )} hover:${computeBackground(value, true)}`;
  return (
    <button
      className={btnClass}
      onClick={() => onClick()}
      disabled={disabled}
      onContextMenu={(event) => {
        event.preventDefault();
        onRightClick();
      }}
    >
      {value}
    </button>
  );
};

const computeBackground = (value: string, hover?: boolean) => {
  if (value === "F") {
    return "bg-grey-" + (500 + (hover ? 200 : 0)).toString();
  }
  if (value === "-") {
    return "bg-blue-" + (500 + (hover ? 200 : 0)).toString();
  }
  if (value === "0") {
    return "bg-red-" + (500 + (hover ? 200 : 0)).toString();
  }
  return "bg-amber-" + (500 + (hover ? 200 : 0)).toString();
};

export default Block;
