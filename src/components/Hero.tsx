import Image from "next/image";
import WeatherApi from "./WeatherApi";
import hero from "../../public/me.jpeg";

export default function Hero() {
  return (
    <section className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-3">Felipe Bolgar</h1>
        <p className="max-w-[420px]">
          Full Stack Developer focused on React, TypeScript, Astro and Node.
        </p>
        <WeatherApi />
      </div>
      <div>
        <Image
          className="w-auto h-auto rounded-md"
          src={hero}
          alt="hero"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
