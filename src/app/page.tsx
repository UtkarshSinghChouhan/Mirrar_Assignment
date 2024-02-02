"use client";
import Forecast from "@/components/forecast";
import Inputs from "@/components/inputs";
import TempDetail from "@/components/temp-detail/temp-detail";
import TimeLocation from "@/components/time-location";
import TopButtons from "@/components/top-buttons";
import getFormattedWeatherData from "@/lib/weather-utils";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [weather, setWeather] = useState<any>(null);
  const [loader, setLoader] = useState<boolean>(false);

  const [query, setQuery] = useState<string>("berlin");

  const fetchData = async () => {
    setLoader(true);
    try {
      const data = await getFormattedWeatherData(query);
      setWeather(data);
    } catch (err) {
      toast("⚠️ Invalid city name");
      setQuery("berlin");
    }

    setLoader(false);
  };

  useEffect(() => {
    // fetchData();
  }, [query]);

  console.log("weather", weather);

  return (
    <>
      <section className="mx-auto my-4 py-5 px-32 max-w-screen-xl w-fit h-fit shadow-xl shadow-gray-400 bg-gradient-to-br  from-violet-300 to-pink-300 flex flex-col justify-center text-slate-700">
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} />

        {!loader && weather ? (
          <>
            <TimeLocation weather={weather} />
            <TempDetail weather={weather} />
            <Forecast title={`forecast`} weather={weather} />
          </>
        ) : (
          <Image
            src={`/grid.svg`}
            alt="loader"
            width={60}
            height={60}
            unoptimized
            priority
            className="self-center"
          />
        )}
      </section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
