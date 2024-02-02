import { IoWaterOutline } from "react-icons/io5";
import { FaDirections } from "react-icons/fa";
import { FaWind, FaArrowUp, FaArrowDown } from "react-icons/fa6";
import Image from "next/image";
import { getIcon } from "@/lib/weather-utils";

const TempDetail = ({
  weather: { description, icon, wind_spd, wind_dir, rh, max_temp, min_temp },
}: {
  weather: any;
}) => {
  return (
    <>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{description}</p>
      </div>

      <div className="cursor-pointer flex flex-col w-full lg:flex-row items-center justify-between text-white border border-slate-300 p-5 rounded-2xl hover:shadow-lg shadow-md">
        <Image src={getIcon(icon)} alt="icon" width={80} height={80} />
        <div className=" flex flex-col items-center">
          <p className="text-5xl">34&deg;</p>
          <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm pt-3">
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
        </div>
        <div className="flex flex-col space-y-2 mt-8 lg:mt-0">
          <div className="flex font-light text-sm items-center justify-start">
            <FaWind className="mr-1 w-4 h-4" />
            <span className="font-medium ml-1">Wind: {wind_spd} kmph</span>
          </div>
          <div className="flex font-light text-sm items-center justify-start">
            <FaDirections className="mr-1 w-4 h-4" />
            <span className="font-medium ml-1">Wind: {wind_dir}&deg;</span>
          </div>
          <div className="flex font-light text-sm items-center justify-start">
            <IoWaterOutline className="mr-1 w-4 h-4" />
            <span className="font-medium ml-1">Humidity: {rh}%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempDetail;
