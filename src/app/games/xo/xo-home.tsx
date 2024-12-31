import Header from "@/app/shared/header";
import Board from "./board";
import Button from "@/app/shared/button";
import Link from "next/link";

const XoHome = () => {
  return (
    <div>
      <Header heading={"Welcome to RP's TicTac"} />
      <Board size={3} />
      <Link href={"/"}>
        <Button text={"Back to Home"} />
      </Link>
    </div>
  );
};
export default XoHome;
