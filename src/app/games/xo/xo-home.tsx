import Header from "@/app/shared/header";
import Board from "./board";

const XoHome = () => {
  return (
    <div>
      <Header heading={"Welcome to RP's TicTac"} />
      <Board size={5} />
    </div>
  );
};
export default XoHome;
