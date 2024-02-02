import { getIcon, getLocalDateTime } from "@/lib/weather-utils";
import Image from "next/image";
import React from "react";

const Forecast = ({ title, weather }: { title: string; weather: any }) => {
  const { data } = weather;
  return (
    <>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between gap-6 text-white">
        {data.slice(1, 6).map((obj: any, idx: number) => {
          const { datetime, weather, temp } = obj;
          const { icon, description } = weather;
          return (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center justify-around">
                <p className="font-light text-sm whitespace-nowrap">
                  {datetime}
                </p>
                <Image src={getIcon(icon)} alt="icon" width={50} height={50} />
                <p className="font-medium">{temp}&deg;</p>
                <p className="font-medium text-cyan-300 whitespace-nowrap">
                  {description}
                </p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Forecast;
