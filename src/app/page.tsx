import Menu from "./home/menu";
import Header from "./shared/header";

export default function Home() {
  return (
    <div className="grid grid-rows-5 justify-center">
      <Header heading="Welcome to RP's Game Arena" />
      <div className="my-2">
        <Menu />
      </div>
    </div>
  );
}
