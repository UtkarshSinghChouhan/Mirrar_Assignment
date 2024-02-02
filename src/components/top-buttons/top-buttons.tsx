import { CITIES } from "@/data/top-buttons-data";
import { ICities } from "@/models/interfaces";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const TopButtons = ({
  setQuery,
}: {
  setQuery: Dispatch<SetStateAction<string>>;
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const itemsToRender = screenWidth <= 768 ? 3 : 5;
  return (
    <>
      <div className="flex items-center justify-around my-6">
        {CITIES.slice(0, itemsToRender).map((data: ICities) => (
          <button
            key={data.id}
            className="text-white text-lg font-medium capitalize active:scale-95 hover:text-slate-800"
            onClick={() => setQuery(data.title)}
          >
            {data.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default TopButtons;
