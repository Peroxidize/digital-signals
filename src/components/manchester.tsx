import { useEffect, useState } from "react";

function MANCHESTER({
  startingBit,
  stateList,
}: {
  startingBit: number;
  stateList: number[];
}) {
  const [stylesListLeft, setStylesListLeft] = useState<string[]>([]);
  const [stylesListRight, setStylesListRight] = useState<string[]>([]);

  useEffect(() => {
    const tempStyleListLeft: string[] = [];
    const tempStyleListRight: string[] = [];

    stateList.forEach((curr, index) => {
      const prev = index === 0 ? startingBit : stateList[index - 1];

      if (prev === 0 && curr === 0) {
        tempStyleListLeft.push("border-l-2 border-t-2");
        tempStyleListRight.push("border-l-2 border-b-2");
      } else if (prev === 0 && curr === 1) {
        tempStyleListLeft.push("border-b-2 border-r-2");
        tempStyleListRight.push("border-t-2");
      } else if (prev === 1 && curr === 0) {
        tempStyleListLeft.push("border-t-2");
        tempStyleListRight.push("border-l-2 border-b-2");
      } else {
        tempStyleListLeft.push("border-l-2 border-b-2");
        tempStyleListRight.push("border-l-2 border-t-2");
      }
    });

    let lastRight = tempStyleListRight[tempStyleListRight.length - 1];

    lastRight += " border-r-[0px]";

    tempStyleListRight[tempStyleListRight.length - 1] = lastRight;

    setStylesListLeft(tempStyleListLeft);
    setStylesListRight(tempStyleListRight);
  }, [startingBit, stateList]);

  return (
    <>
      <div className="flex items-center flex-1">
        <h2 className="text-xl mr-4 min-w-[150px] max-w-[150px] text-right text-wrap">
          Manchester
        </h2>
        <div className="flex">
          {stateList.map((_, index) => {
            return (
              <div
                key={"nrz-i" + index}
                className="flex h-[80px] w-[80px] outline outline-1 outline-zinc-500 overflow-visible"
              >
                <div className={`w-1/2 h-full ${stylesListLeft[index]}`}></div>
                <div className={`w-1/2 h-full ${stylesListRight[index]}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MANCHESTER;
