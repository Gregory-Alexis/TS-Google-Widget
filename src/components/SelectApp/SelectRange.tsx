import React from "react";

interface Props {
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;
}

const SelectRange: React.FC<Props> = ({ range, setRange }) => {
  const rangeHandler = (e: React.FormEvent) => {
    setRange(Number((e.target as HTMLInputElement).value));
  };

  return (
    <div className="pt-8">
      <h1 className="font-bold pb-2">Taille de police</h1>
      <input
        type="range"
        className="w-full"
        min="8"
        max="48"
        step="1"
        value={range}
        onChange={(e) => rangeHandler(e)}
      />
    </div>
  );
};

export default SelectRange;
