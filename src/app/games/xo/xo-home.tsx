import Header from "@/app/shared/header";
import Board from "./board";

export default () => {
  return (
    <div>
      <Header heading={"Welcome to XO"} />
      <Board />
    </div>
  );
};
