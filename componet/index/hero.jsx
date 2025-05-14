import HeroImage from "@/public/index.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative w-full h-[84vh]">
      <Image 
        src={HeroImage}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-md">
        Nieruchomości w Słońcu  </h1>
        <h2 className="text-white text-lg md:text-2xl mt-4"> {/* Add margin-top */}
        Wiktoria Niemczewska Twoja agentka nieruchomości
        </h2>
      </div>
    </main>
  );
}
