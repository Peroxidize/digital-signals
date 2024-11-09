import { useEffect, useState } from "react";

function NRZ_I({
  startingBit,
  stateList,
}: {
  startingBit: number;
  stateList: number[];
}) {
  const [stylesList, setStylesList] = useState<string[]>([]);

  useEffect(() => {
    const tempStyleList: string[] = [];
    let isActive = startingBit;

    stateList.forEach((curr) => {
      if (isActive === 0 && curr === 0) {
        tempStyleList.push("border-b-2");
      } else if (isActive === 0 && curr === 1) {
        isActive = 1;
        tempStyleList.push("border-l-2 border-t-2");
      } else if (isActive === 1 && curr === 0) {
        tempStyleList.push("border-t-2");
      } else {
        isActive = 0;
        tempStyleList.push("border-l-2 border-b-2");
      }
    });

    setStylesList(tempStyleList);
  }, [startingBit, stateList]);

  return (
    <>
      <div className="flex items-center flex-1">
        <h2 className="text-xl mr-4 min-w-[150px] max-w-[150px] text-right">NRZ-I</h2>
        <div className="flex">
          {stateList.map((_, index) => {
            return (
              <div
                key={"nrz-i" + index}
                className="h-[80px] w-[80px] outline outline-1 outline-zinc-500 overflow-visible"
              >
                <div className={`w-full h-full ${stylesList[index]}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NRZ_I;
