import { useCallback } from "react";
import axios from "axios";
import { type CurrentWeather, type OpenMeteoResponseCurrentData, type OpenMeteoResponseDailyData, type DailyWeather} from "../types";


export const useWeather = () => {
  // Urls
  const urlCurrent = useCallback(({ lat, lon }: { lat: number, lon: number }) =>
    `https://api.open-meteo.com/v1/forecast?` + `latitude=${lat}&longitude=${lon}&current_weather=true`, []);
  const urlDaily = useCallback(({ lat, lon }: { lat: number, lon: number }) =>
    `https://api.open-meteo.com/v1/forecast?` + `latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,windgusts_10m_max,sunrise,sunset,weathercode,uv_index_max,precipitation_sum&timezone=auto`, []);
  const urlLocation = useCallback((city: string) =>
    `https://geocoding-api.open-meteo.com/v1/search?` + `name=${city}`, []);

  
  const _getWindDirection = (direction: number) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
    const index = Math.round(direction / 45) % 8;
    return {
      direction: directions[index],
      angle: direction,
    }
  }

  const _currentWeatherTransform = (data: OpenMeteoResponseCurrentData): CurrentWeather => {
    return {
      date: new Date(data.current_weather.time).toISOString(),
      code: data.current_weather.weathercode,
      temp: data.current_weather.temperature,
      icon: data.current_weather.weathercode,
      wind: {
        speed: data.current_weather.windspeed,
        direction: _getWindDirection(data.current_weather.winddirection),
      },
    }
  }

  const _dailyWeatherTransform = (data: OpenMeteoResponseDailyData): DailyWeather => {
    return {
      date: new Date(data.daily.time).toISOString(),
      code: data.daily.weathercode,
      temp: data.daily.temp,
      icon: data.daily.weathercode,
    }
  }

  const currentWeather = useCallback(async ({ lat, lon }: { lat: number, lon: number }) => {
  try {
      const response = await axios.get(urlCurrent({ lat, lon }));
      return _currentWeatherTransform(response.data);
    } catch (error) {
      console.error(error);
      return null;
  }
  }, [urlCurrent]);

  const dailyWeather = useCallback(async ({ lat, lon }: { lat: number, lon: number }) => {
    try {
      const response = await axios.get(urlDaily({ lat, lon }));
      return _dailyWeatherTransform(response.data);
    } catch (error) {
      console.error(error);
      return null;
    }
  }, [urlDaily]);

  const location = useCallback(async ({ city }
    : { city: string }) => {
    try {
      const response = await axios.get(urlLocation(city));
      console.log(response.data);
      return {
        lat: response.data.results[0].latitude,
        lon: response.data.results[0].longitude,
        city: response.data.results[0].name,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }, [urlLocation]);

  return { currentWeather, dailyWeather, location}
}
