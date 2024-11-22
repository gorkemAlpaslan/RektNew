import ClockCard from "./components/ClockCard";
import RektLogo from "./icons/RektLogo";



export default function Home() {
  const clocks = [
    { city: "CALIFORNIA", country: "US", timeZone: "America/Los_Angeles" },
    { city: "LONDON", country: "UK", timeZone: "Europe/London" },
    { city: "ANTALYA", country: "TR", timeZone: "Europe/Istanbul" },
  ];
  return (
    <div>
      <main className="w-full h-screen flex flex-col items-start justify-center ml-12 overflow-hidden">
        <div className="flex  flex flex-col gap-10">
          <div className="flex gap-3 text-4xl xl:text-8xl ">
            <div className="font-bold font-helvetica text-center">
              Coming Soon
            </div>
            <div className="w-[1em] h-[1em] rounded-lg bg-[#E35B2A]"></div>
          </div>
          <div className="text-sm xl:text-xl text-white flex flex-col gap-7 font-helvetica font-normal w-[70%]">
            <div>
              We&apos;re crafting something extraordinary!
            </div>
            <div>
              Our design and software studio is almost ready to launch. Get ready for innovative solutions, sleek designs, and technology that transforms ideas into reality.
            </div>
            <div>
              Stay tuned for updates—exciting things are on the horizon!
            </div>
          </div>
        </div>
        <div className="mt-[4em] xl:mt-[15em] flex justify-between items-start xl:items-center bg-transparent  flex-col xl:flex-row gap-14  xl:gap-28 font-plexMono mb-[6em]" >
          {clocks.map((clock, index) => (
            <ClockCard
              key={index}
              city={clock.city}
              country={clock.country}
              timeZone={clock.timeZone}
            />
          ))}
        </div>
        <RektLogo />
      </main>
    </div>
  );
}
