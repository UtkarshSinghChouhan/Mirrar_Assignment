/**
 *
 * @param data
 * @returns
 */
const formatCurrentWeather = (obj: any) => {
  const { city_name, country_code, data } = obj;
  const {
    datetime,
    weather,
    max_temp,
    min_temp,
    temp,
    rh,
    wind_dir,
    wind_spd,
  } = data[0];
  const { icon, description } = weather;

  return {
    city_name,
    country_code,
    datetime,
    max_temp,
    min_temp,
    temp,
    wind_dir,
    wind_spd,
    icon,
    description,
    data,
    rh,
  };
};

/**
 *
 * @param searchParams
 * @returns
 */
const getWeatherData = async (searchParams: string) => {
  try {
    const res = await fetch(
      // `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchParams}&key=${process.env.API_KEY}`
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchParams}&key=0efc9b93180741c281f8c53cd081c06c`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("error", err);
  }
};

/**
 *
 * @param searchParam
 * @returns
 */
const getFormattedWeatherData = async (searchParam: string) => {
  const formattedCurrentWeather = await getWeatherData(searchParam).then(
    (data) => formatCurrentWeather(data)
  );

  return formattedCurrentWeather;
};

/**
 *
 * @param timestamp
 * @param timezoneOffset
 * @returns
 */
export const getLocalDateTime = (timestamp: number, timezoneOffset: number) => {
  // Convert timestamp to milliseconds
  const milliseconds = timestamp * 1000;
  // Create a new Date object
  const dateObject = new Date(milliseconds);

  // Apply timezone offset
  const offsetMilliseconds = timezoneOffset * 1000;
  const localTimeMilliseconds = dateObject.getTime() + offsetMilliseconds;
  const localTime = new Date(localTimeMilliseconds);

  // Get local date, day, and time components
  const localDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    localTime
  );
  const localDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(localTime);
  const localTimeStr = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(localTime);

  return {
    localDay: localDay,
    localDate: localDate,
    localTime: localTimeStr,
  };
};

/**
 *
 * @param iconCode
 * @returns
 */
export const getIcon = (iconCode: string) => {
  return `/icons/${iconCode}.png`;
};

export default getFormattedWeatherData;
