import React from "react";

const Header = ({ heading }: { heading: string }) => {
  return (
    <div className="text-5xl animate-bounce  my-4 text-center text-violet-400 font-serif">
      {heading}
    </div>
  );
};

export default Header;
