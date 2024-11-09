import { useEffect, useState } from "react";

function BIPOLAR_AMI({
  startingBit,
  stateList,
}: {
  startingBit: number;
  stateList: number[];
}) {
  const [stylesListTop, setStylesListTop] = useState<string[]>([]);
  const [stylesListBottom, setStylesListBottom] = useState<string[]>([]);

  useEffect(() => {
    const tempStyleListTop: string[] = [];
    const tempStyleListBottom: string[] = [];
    let isHigh = startingBit;

    stateList.forEach((curr, index) => {
      const prev = index === 0 ? startingBit : stateList[index - 1];

      if (isHigh === 1 && prev === 1 && curr === 1) {
        tempStyleListTop.push("border-l-2");
        tempStyleListBottom.push("border-l-2 border-b-2 border-r-2");
        isHigh = 0;
      } else if (isHigh === 0 && prev === 1 && curr === 1) {
        tempStyleListTop.push("border-l-2 border-t-2 border-r-2");
        tempStyleListBottom.push("border-l-2");
        isHigh = 1;
      } else if (prev === 0 && curr === 0) {
        tempStyleListTop.push("border-b-[1px]");
        tempStyleListBottom.push("border-t-[1px]");
      } else if (isHigh === 1 && prev === 0 && curr === 1) {
        tempStyleListTop.push("");
        tempStyleListBottom.push("border-l-2 border-b-2 border-r-2");
        isHigh = 0;
      } else if (isHigh === 0 && prev === 0 && curr === 1) {
        tempStyleListTop.push("border-l-2 border-t-2 border-r-2");
        tempStyleListBottom.push("");
        isHigh = 1;
      } else if (prev === 1 && curr === 0) {
        tempStyleListTop.push("border-b-[1px]");
        tempStyleListBottom.push("border-t-[1px]");
      }
    });

    let lastTop = tempStyleListTop[tempStyleListTop.length - 1];
    let lastBottom = tempStyleListBottom[tempStyleListBottom.length - 1];
    
    lastTop += " border-r-[0px]";
    lastBottom += " border-r-[0px]";

    tempStyleListTop[tempStyleListTop.length - 1] = lastTop;
    tempStyleListBottom[tempStyleListBottom.length - 1] = lastBottom;

    setStylesListTop(tempStyleListTop);
    setStylesListBottom(tempStyleListBottom);
  }, [startingBit, stateList]);

  return (
    <>
      <div className="flex items-center flex-1">
        <h2 className="text-xl mr-4 min-w-[150px] max-w-[150px] text-right text-wrap">
          Bipolar AMI
        </h2>
        <div className="flex">
          {stateList.map((_, index) => {
            return (
              <div
                key={"nrz-i" + index}
                className="h-[80px] w-[80px] outline outline-1 outline-zinc-500 overflow-visible"
              >
                <div className={`w-full h-1/2 ${stylesListTop[index]}`}></div>
                <div
                  className={`w-full h-1/2 ${stylesListBottom[index]}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BIPOLAR_AMI;
