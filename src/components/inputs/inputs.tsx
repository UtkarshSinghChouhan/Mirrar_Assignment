import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { IoSearchOutline, IoLocationOutline } from "react-icons/io5";

const Inputs = ({
  setQuery,
}: {
  setQuery: Dispatch<SetStateAction<string>>;
}) => {
  const [inputState, setInputState] = useState<string>("");

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
        <button
          name="metric"
          className="active:scale-90 transition hover:text-slate-400 text-xl text-white font-light"
        >
          &deg;C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="active:scale-90 transition hover:text-slate-400 text-xl text-white font-light"
        >
          &deg;F
        </button>
      </div>
    </article>
  );
};

export default Inputs;
