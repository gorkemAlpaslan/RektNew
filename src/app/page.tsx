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
      <main className="w-full h-screen flex flex-col items-start justify-center ml-12 ">
        <div className="text-xl flex  flex flex-col gap-10">
          <div className="flex gap-3">
            <div className="text-8xl font-bold font-helvetica">
              Coming Soon
            </div>
            <div className="w-[4.875em] h-[4.875em] rounded-lg bg-[#E35B2A]"></div>
          </div>
          <div className="text-xl text-white flex flex-col gap-7 font-helvetica font-normal w-[70%]">
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
        <div className="mt-[15em] mb-[5em] flex justify-between items-center bg-transparent gap-28 font-plexMono " >
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
