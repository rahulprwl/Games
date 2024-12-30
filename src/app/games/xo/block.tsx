export default ({ value }: { value?: "X" | "O" | "-" }) => {
  const padding = !value || value === "-" ? 6 : 4;
  return (
    <button
      className={`border-solid border-black border-2 w-20 h-20 text-xl bg-amber-600 font-extrabold`}
    >
      {value ?? "-"}
    </button>
  );
};
