"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Weather {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    condition: {
      icon: string;
    };
  };
}

export default function WeatherApi() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const URL =
    "http://api.weatherapi.com/v1/current.json?key=8922b8fb33474200b39232711243101&q=Buenos Aires&aqi=no";
  useEffect(() => {
    const weatherApi = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setWeather(data);
    };
    weatherApi();
  }, []);
  return (
    <Link
      className="hover:underline flex items-center gap-5 w-max"
      href="https://www.google.com/maps/place/Buenos+Aires,+CABA/@-34.6156548,-58.5156987,12z/data=!4m6!3m5!1s0x95bcca3b4ef90cbd:0xa0b3812e88e88e87!8m2!3d-34.6036844!4d-58.3815591!16zL20vMDFseTVt?entry=ttu"
      target="_blank"
    >
      <div>
        <p>
          {weather?.location.name}, {weather?.location.country}
        </p>
      </div>
      <div className="flex items-center">
        <p>{weather?.current.temp_c}°C</p>
        {weather?.current.condition.icon && (
          <Image
            className="w-auto h-auto"
            src={`https:${weather.current.condition.icon}`}
            alt="weather"
            width={40}
            height={40}
            priority
          />
        )}
      </div>
    </Link>
  );
}
