import Header from "@/app/shared/header";
import Board from "./board";

const XoHome = () => {
  return (
    <div>
      <Header heading={"Welcome to XO"} />
      <Board size={3} />
    </div>
  );
};
export default XoHome;
