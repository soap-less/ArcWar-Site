export default function About() {
  return (
    <div className="line-height:1 overflow-x-hidden flex flex-col items-center justify-center text-center lg:h-full py-4 sm:p-5">
      <p
        style={{
          fontFamily: "Dolce Vita Light",
          color: "white",
        }}
        className="py-4 text-2xl font-bold sm:text-3xl grid grid-cols-10"
      >
        <span className="col-span-10 md:col-span-6 md:col-start-3"><span style={{fontFamily: "Gogh", color: "white", letterSpacing: "0px"}}>8 TEAMS</span> FROM ACROSS SOUTHERN CALIFORNIA COMPETE in a COD:MWII tournament at the Laser Esports Arena.</span>
      </p>
      <div className="flex flex-wrap justify-center gap-4 p-5">
        <div className="">
          <a
            style={{
              fontFamily: "Dolce Vita",
              color: "white",
            }}
            className="block w-auto  border border-white-600 px-12 py-3 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-600 sm:w-auto"
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
