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
    )} hover:${computeBackground(value, true)} rounded-lg`;
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
  switch (value) {
    case "F":
      return "bg-grey-" + (500 + (hover ? 200 : 0)).toString();
    case "-":
      return "bg-purple-" + (400 + (hover ? 200 : 0)).toString();
    case "0":
      return "bg-red-" + (700 + (hover ? 200 : 0)).toString();
    case "-1":
      return "bg-blue-" + (500 + (hover ? 200 : 0)).toString();
    case "1":
      return "bg-green-" + (400 + (hover ? 200 : 0)).toString();
    case "2":
      return "bg-green-" + (600 + (hover ? 200 : 0)).toString();
    case "3":
      return "bg-yellow-" + (400 + (hover ? 200 : 0)).toString();
    case "4":
      return "bg-yellow-" + (600 + (hover ? 200 : 0)).toString();
    case "5":
      return "bg-amber-" + (300 + (hover ? 200 : 0)).toString();
    case "6":
      return "bg-amber-" + (500 + (hover ? 200 : 0)).toString();
    case "7":
      return "bg-red-" + (200 + (hover ? 200 : 0)).toString();
    case "8":
      return "bg-red-" + (300 + (hover ? 200 : 0)).toString();

    default:
      return "bg-amber-" + (500 + (hover ? 200 : 0)).toString();
  }
};

export default Block;
