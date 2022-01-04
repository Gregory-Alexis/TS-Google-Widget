import React from "react";
import InputText from "./InputText";
import SelectMenu from "./SelectMenu";
import SelectRange from "./SelectRange";

interface Props {
  setPolice: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;
}

const SelectApp: React.FC<Props> = ({
  setPolice,
  text,
  setText,
  range,
  setRange,
}) => {
  return (
    <div className="lg:w-80 ">
      <SelectMenu setPolice={setPolice} />
      <InputText text={text} setText={setText} />
      <SelectRange range={range} setRange={setRange} />
    </div>
  );
};

export default SelectApp;
