import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

function Nav({
  bits,
  startingBit,
  setBits,
  setStartingBit,
  addState,
  removeState,
}: {
  bits: number;
  startingBit: number;
  setBits: Function;
  setStartingBit: Function;
  addState: Function;
  removeState: Function;
}) {
  function changeStartingBit() {
    setStartingBit(startingBit === 0 ? 1 : 0);
  }

  function increaseCounter() {
    setBits(bits + 1);
    addState();
  }

  function decreaseCounter() {
    if (bits <= 1) {
      return;
    }

    setBits(bits - 1);
    removeState();
  }

  return (
    <>
      <nav className="flex items-center flex-wrap">
        <h3 className="text-lg mr-4">Number of bits: {bits}</h3>
        <div className="flex flex-col gap-1">
          <Button variant="outline" size="icon" onClick={increaseCounter}>
            <ChevronUp className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={decreaseCounter}>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <h3 className="ml-6 text-lg">Starting bit:</h3>
        <Button
          className="ml-2"
          variant="outline"
          size="icon"
          onClick={changeStartingBit}
        >
          {startingBit}
        </Button>
      </nav>
    </>
  );
}

export default Nav;
