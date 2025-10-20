export type WeatherType = "clear-sky" | "mainly-clear" | "partly-cloudy" | "overcast" | "foggy" | "drizzle" | "rainy" | "snow-fall" | "thunderstorm" | "windy";
export type WindDirection = "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW" | "N";

export type WeatherIcon = {
  [key: number]: {
    type: WeatherType,
    label: string,
    icon: React.ReactNode,
  };
}

export type CurrentWeather = {
  date: string;
  temp: number;
  code: number;
  icon: React.ReactNode;
  wind: {
    speed: number;
    direction: {
      angle: number;
      direction: string;
    };
  };
}

export type DailyWeather = {
  date: string;
  code: number;
  temp: number;
  icon: React.ReactNode;
}

export type OpenMeteoResponseCurrentData = {
  current_weather: {
    time: string;
    weathercode: number;
    temperature: number;
    windspeed: number;
    winddirection: number;
  };
}

export type OpenMeteoResponseDailyData = {
  daily: {
    time: string;
    weathercode: number;
    temp: number;
  };
}