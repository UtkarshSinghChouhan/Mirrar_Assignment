import { IoMdSunny } from "react-icons/io";
import { IoWaterOutline } from "react-icons/io5";
import {
  FaTemperatureThreeQuarters,
  FaWind,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa6";
import { WiSunset } from "react-icons/wi";
import Image from "next/image";
import { getIcon, getLocalDateTime } from "@/lib/weather-utils";

const TempDetail = ({
  weather: {
    description,
    icon,
    sunrise,
    sunset,
    wind_spd,
    // humidity,
    // feels_like,
    max_temp,
    min_temp,
  },
}: {
  weather: any;
}) => {
  return (
    <>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{description}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <Image src={getIcon(icon)} alt="icon" width={80} height={80} />
        <p className="text-5xl">34&deg;</p>
        <div className="flex flex-col space-y-2">
          {/* <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureThreeQuarters className="mr-1 w-4 h-4" />
            <span className="font-medium ml-1">
              Real feel: {feels_like}&deg;
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <IoWaterOutline className="mr-1 w-4 h-4" />
            <span className="font-medium ml-1">Humidity: {humidity}%</span>
          </div> */}
          <div className="flex font-light text-sm items-center justify-center">
            <FaWind className="mr-1 w-4 h-4" />
            <span className="font-medium ml-1">Wind: {wind_spd} km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <IoMdSunny className="text-white w-8 h-8" />
        <p className="font-light whitespace-nowrap">
          Rise:{" "}
          <span className="font-medium ml-1 whitespace-nowrap">{sunrise}</span>
        </p>
        <p className="font-light whitespace-nowrap">|</p>

        <WiSunset className="text-white w-10 h-10" />
        <p className="font-light whitespace-nowrap">
          Set:{" "}
          <span className="font-medium ml-1 whitespace-nowrap">{sunset}</span>
        </p>
        <p className="font-light whitespace-nowrap">|</p>

        <FaArrowUp className="text-white w-6 h-6" />
        <p className="font-light whitespace-nowrap">
          Max:{" "}
          <span className="font-medium ml-1 whitespace-nowrap">
            {max_temp}&deg;
          </span>
        </p>
        <p className="font-light whitespace-nowrap">|</p>

        <FaArrowDown className="text-white w-6 h-6" />
        <p className="font-light whitespace-nowrap">
          Min:{" "}
          <span className="font-medium ml-1 whitespace-nowrap">
            {min_temp}&deg;
          </span>
        </p>
      </div>
    </>
  );
};

export default TempDetail;
