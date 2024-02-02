import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { IoSearchOutline, IoLocationOutline } from "react-icons/io5";

const Inputs = ({
  setQuery,
}: {
  setQuery: Dispatch<SetStateAction<string>>;
}) => {
  const [inputState, setInputState] = useState<string>("");
  const [activeTemp, setActiveTemp] = useState<number>(0);
  const TEMP = ["C", "F"];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("query changed");
    setInputState("");
    setQuery(inputState);
  };

  return (
    <article className="flex flex-row justify-center my-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row w-3/4 items-center justify-center space-x-4"
      >
        <input
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
          type="text"
          placeholder="Seach City..."
          className="text-lg font-light p-2 pl-8 w-full shadow-xl focus:outline-none capitalize"
        />
        <button type="submit">
          <IoSearchOutline className="w-[25px] h-[25px] text-white cursor-pointer active:scale-90" />
        </button>
        <IoLocationOutline className="w-[25px] h-[25px] text-white cursor-pointer transition hover:scale-105" />
      </form>

      <div className="flex flex-row w-1/4 items-center justify-center">
        {TEMP.map((val: string, idx: number) => (
          <>
            <button
              key={idx}
              className={`active:scale-90 transition hover:text-slate-800 w-10 h-10 text-xl text-white font-light ${
                idx === activeTemp && "border"
              }`}
              onClick={() => setActiveTemp(idx)}
            >
              &deg;{val}
            </button>
            {idx < 1 && <p className="text-xl text-white mx-1">|</p>}
          </>
        ))}
      </div>
    </article>
  );
};

export default Inputs;
