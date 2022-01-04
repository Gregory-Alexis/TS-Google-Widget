import React from "react";

interface Props {
  setPolice: React.Dispatch<React.SetStateAction<string>>;
}

const SelectMenu: React.FC<Props> = ({ setPolice }) => {
  const policeHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setPolice((e.target as HTMLInputElement).value);
  };
  return (
    <div>
      <h1 className="font-bold pb-2">Afficher les polices</h1>
      <select className="rounded w-full" onChange={(e) => policeHandler(e)}>
        <option value="popularity">Les plus populaires</option>
        <option value="date">Les plus récentes</option>
        <option value="trending">Les plus tendances</option>
      </select>
    </div>
  );
};

export default SelectMenu;
