import { useState } from "react";

import Nav from "./components/nav.tsx";
import NRZ_L from "./components/nrz-l.tsx";
import NRZ_I from "./components/nrz-i.tsx";
import BIPOLAR_AMI from "./components/bipolar-ami.tsx";
import PSEUDOTERNARY from "./components/pseudoternary.tsx";
import MANCHESTER from "./components/manchester.tsx";
import DIFFERENTIAL_MANCHESTER from "./components/differential-manchester.tsx";

function App() {
  const [bits, setBits] = useState(1);
  const [startingBit, setStartingBit] = useState(0);
  const [stateList, setStateList] = useState<number[]>([0]);

  function addState() {
    const temp = [...stateList];
    temp.push(0);
    setStateList(temp);
  }

  function removeState() {
    if (stateList.length <= 1) {
      console.log("The number of states can't be lower than 1");
      return;
    }

    const temp = [...stateList];
    temp.pop();
    setStateList(temp);
  }

  function changeState(index: number) {
    if (index >= stateList.length - 1 && index < 0) {
      console.log("index out of range");
      return;
    }

    const temp = [...stateList];
    temp[index] = temp[index] === 0 ? 1 : 0;
    setStateList(temp);
  }

  return (
    <>
      <div className="h-full w-full py-10 flex flex-col items-center overflow-x-auto">
        <Nav
          bits={bits}
          startingBit={startingBit}
          setBits={setBits}
          setStartingBit={setStartingBit}
          addState={addState}
          removeState={removeState}
        />
        <div className="mt-[75px] px-10 w-full flex flex-col gap-4 transition-all">
          <NRZ_L
            startingBit={startingBit}
            stateList={stateList}
            changeState={changeState}
          />
          <NRZ_I
            startingBit={startingBit}
            stateList={stateList}
          />
          <BIPOLAR_AMI
            startingBit={startingBit}
            stateList={stateList}
          />
          <PSEUDOTERNARY
            startingBit={startingBit}
            stateList={stateList}
          />
          <MANCHESTER
            startingBit={startingBit}
            stateList={stateList}
          />
          <DIFFERENTIAL_MANCHESTER
            startingBit={startingBit}
            stateList={stateList}
          />
        </div>
      </div>
    </>
  );
}

export default App;
