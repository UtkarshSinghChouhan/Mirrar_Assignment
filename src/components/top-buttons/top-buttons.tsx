import { CITIES } from "@/data/top-buttons-data";
import { ICities } from "@/models/interfaces";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const TopButtons = ({
  setQuery,
}: {
  setQuery: Dispatch<SetStateAction<string>>;
}) => {
  const [itemsToRender, setItemsToRender] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = document.documentElement.clientWidth;
      const newItemsToRender = width <= 768 ? 3 : 5;
      setItemsToRender(newItemsToRender);
    };

    handleResize(); // Call initially

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
