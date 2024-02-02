import { getLocalDateTime } from "@/lib/weather-utils";

const TimeLocation = ({
  weather: { datetime, city_name, country_code },
}: {
  weather: any;
}) => {
  return (
    <>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {/* Tuesday, 31 May 2022 | Local time: 12:46 PM */}
          {datetime}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {city_name}, {country_code}
        </p>
      </div>
    </>
  );
};

export default TimeLocation;
