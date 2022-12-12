export default function Rsvp() {
  return (
    <div className="line-height: 1 relative flex flex-col items-center justify-center overflow-visible pb-12 pt-10 text-center sm:h-full lg:h-full">
      <h1
        style={{
          fontFamily: "Gogh",
          color: "white",
          letterSpacing: "0px"
        }}
        className="pb-2 text-3xl font-bold sm:text-5xl"
      >
        SAVE THE DATE
      </h1>
      <a
        style={{
          fontFamily: "Dolce Vita Light",

          color: "white",
        }}
        className="text-2xl sm:text-3xl"
      >
        {" "}
        December 17, 2022
      </a>
      <a
        style={{
          fontFamily: "Dolce Vita Light",
          color: "white",
        }}
        className="text-2xl sm:text-3xl"
      >
        11:00 AM - 8:00 PM PST
      </a>
      <a
        style={{
          fontFamily: "Dolce Vita Light",

          color: "white",
        }}
        className=" text-2xl sm:text-3xl"
      >
        Location: Laser Esports Arena
      </a>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          style={{
            fontFamily: "Dolce Vita",
            color: "white",
          }}
          className="block w-auto border border-white px-12 py-3 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-600 sm:w-auto"
          href="https://forms.gle/eWdnhABkQwTjZGpy7"
          target="_blank"
          rel="noreferrer"
        >
          RSVP TO SPECTATE
        </a>
        <a
          style={{
            fontFamily: "Dolce Vita",
            color: "white",
          }}
          className="block w-auto border border-white px-12 py-3 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-600 sm:w-auto"
          href="https://goo.gl/maps/NM9ba4yVqes9o1Z6A"
          target="_blank"
          rel="noreferrer"
        >
          Directions to Arena
        </a>
      </div>
    </div>
  );
}
