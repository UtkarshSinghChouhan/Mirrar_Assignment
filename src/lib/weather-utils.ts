/**
 *
 * @param obj
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
 * @param iconCode
 * @returns
 */
export const getIcon = (iconCode: string) => {
  return `/icons/${iconCode}.png`;
};

/**
 *
 * @param celsius
 * @returns
 */
export function celsiusToFahrenheit(celsius: number) {
  var fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

/**
 *
 * @param fahrenheit
 * @returns
 */
export function fahrenheitToCelsius(fahrenheit: number) {
  var celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

export default getFormattedWeatherData;
