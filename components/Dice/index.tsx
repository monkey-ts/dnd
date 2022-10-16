import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

type DiceConfig = {
  side: number;
  svg: string;
  dieState: [string, Dispatch<SetStateAction<string>>];
};

export default function Dice(config: DiceConfig) {
  const [roll, setRoll] = useState<number>(-1);
  const [effect, setEffect] = useState<boolean>(false);
  const [activeDie, setActiveDie] = config.dieState;

  const getAltText = (): string => {
    return `An SVG of a d${config.side}`;
  };

  const getTitle = (): string => {
    return `d${config.side}`;
  };

  const rollDie = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();

    const rollRNG = Math.floor(Math.random() * config.side) + 1;
    setEffect(true);
    setRoll(rollRNG);
    setActiveDie(getTitle());
    setTimeout(() => {
      setEffect(false);
    }, 2000)
  };

  const renderRoll = () => {
    if (roll === -1) return;
    if (getTitle() !== activeDie) return;
    return <p className="mx-4 lg:my-2 lg:mx-0">You rolled {roll}</p>;
  };

  return (
    <div
      onClick={rollDie}
      className="px-6 select-none text-center flex items-center py-4 lg:flex-col lg:w-32"
    >
      <Image
        src={config.svg}
        height={64}
        width={64}
        alt={getAltText()}
        title={getTitle()}
        className={`select-none ${effect && "animate-spin"}`}
      />
      {renderRoll()}
    </div>
  );
}
