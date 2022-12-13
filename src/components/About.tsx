import TeamCarousel from "./TeamCarousel";

export default function About() {
  return (
    <div className="line-height:1 overflow-x-hidden flex-col grid grid-cols-10 items-center justify-center text-center lg:h-full py-4 sm:p-5">
      { Date.now() / 1000 < 1671303000
        ? <div className="md:col-span-6 md:col-start-3 lg:col-span-4 lg:col-start-4 col-span-10">
          <TeamCarousel />
        </div>
        : <></>
      }
      <div className="col-span-10 grid grid-cols-10">
        <p
          style={{
            fontFamily: "Dolce Vita Light",
            color: "white",
          }}
          className="py-4 text-2xl font-bold sm:text-3xl col-span-10 md:col-span-6 md:col-start-3 row-span-full"
        >
          <span style={{fontFamily: "Gogh", color: "white", letterSpacing: "0px"}}>8 TEAMS</span> FROM ACROSS SOUTHERN CALIFORNIA COMPETE in a COD:MWII tournament at the Laser Esports Arena.
        </p>
      </div>
      <div className="col-span-10 flex flex-wrap justify-center gap-4 p-5">
        <div className="">
          <a
            style={{
              fontFamily: "Dolce Vita",
              color: "white",
            }}
            className="block w-auto border border-white-600 px-12 py-3 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-600 sm:w-auto"
            href="https://twitch.tv/ivc_esports"
            target="_blank"
            rel="noreferrer"
          >
            {'WATCH THE BATTLE UNFOLD LIVE ON TWITCH.TV'}
          </a>
        </div>
      </div>
    </div>
  );
}
