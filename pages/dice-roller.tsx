import { useState } from "react"
import Dice from "../components/Dice"

export default function DiceRoller() {
  /* Todo: style page  */
  const [activeDie, setActiveDie] = useState<string>("");

  return (
    <div>
      <div className="text-2xl font-serif text-center my-5">Dice Roller</div>

      {/* Todo: style dice container */}
      <div className="flex flex-col items-start lg:flex-row lg:justify-center">
        <Dice svg="/d20.svg" side={20} dieState={[activeDie, setActiveDie]} />
        <Dice svg="/d12.svg" side={12} dieState={[activeDie, setActiveDie]} />
        <Dice svg="/d10.svg" side={10} dieState={[activeDie, setActiveDie]} />
        <Dice svg="/d8.svg" side={8} dieState={[activeDie, setActiveDie]} />
        <Dice svg="/d6.svg" side={6} dieState={[activeDie, setActiveDie]} />
        <Dice svg="/d4.svg" side={4} dieState={[activeDie, setActiveDie]} />
      </div>
    </div>
  )
}