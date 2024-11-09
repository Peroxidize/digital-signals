import { Button } from "./ui/button";

function NRZ_L({
  startingBit,
  stateList,
  changeState,
}: {
  startingBit: number;
  stateList: number[];
  changeState: Function;
}) {
  function getStyle(prev: any, curr: any) {
    if (prev === 0 && curr === 0) {
      return "border-b-2";
    } else if (prev === 0 && curr === 1) {
      return "border-l-2 border-t-2";
    } else if (prev === 1 && curr === 0) {
      return "border-l-2 border-b-2";
    } else {
      return "border-t-2";
    }
  }

  return (
    <>
      <div className="flex items-center flex-1">
        <h2 className="text-xl mr-4 min-w-[150px] max-w-[150px] text-right">NRZ-L</h2>
        {stateList.map((state, index) => {
          const prev = index === 0 ? startingBit : stateList[index - 1];

          return (
            <div key={"nrz-l" + index} className="relative overflow-visible">
              <div className="absolute left-1/2 top-[-54px] transform -translate-x-1/2">
                <Button
                  key={index}
                  className="text-lg"
                  onClick={() => changeState(index)}
                >
                  {state}
                </Button>
              </div>
              <div className="h-[80px] w-[80px] outline outline-1 outline-zinc-500 overflow-visible">
                <div className={`w-full h-full ${getStyle(prev, state)}`}></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NRZ_L;
