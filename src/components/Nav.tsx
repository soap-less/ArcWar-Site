import Link from "next/link";

export default function Nav() {
  return (
    <div aria-label="Site Nav" className=" bg-black/60 px-3 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between" style={{letterSpacing: "2px"}}>
        <div className="relative flex justify-between basis-full">
            <Link href="/"  className="h-auto w-12 md:w-16 2xl:w-24 flex justify-items-start align-center">
                <img
                  src="ArcWar-LettermarkSVG.svg"
                  alt="Arctic Warfare Logo"
                />
            </Link>
          <div className="flex justify-end">
            <ul
              style={{
                fontFamily: "Dolce Vita Light",
                color: "white",
              }}
              className="flex items-center text-sm 2xl:text-xl font-medium"
            >
              <li>
                <Link
                  className="rounded-lg px-2 py-2 hover:text-gray-400 sm:px-3"
                  href="https://www.twitch.tv/ivc_esports"
                >
                  {" "}
                  Watch{" "}
                </Link>
              </li>
              <li className="sm:hidden">-</li>
              <li>
                <Link
                  className=" rounded-lg px-2 py-2 hover:text-gray-400 sm:px-3"
                  href="/bracket"
                  target="_blank"
                >
                  {" "}
                  Bracket{" "}
                </Link>
              </li>
              <li className="sm:hidden">-</li>
              <li>
                <Link
                  className="rounded-lg px-2 py-2 hover:text-gray-400 sm:px-3"
                  href="https://forms.gle/eWdnhABkQwTjZGpy7"
                  target="_blank"
                >
                  {" "}
                  RSVP{" "}
                </Link>
              </li>
              <li className="sm:hidden">-</li>
              <li>
                <Link
                  className="rounded-lg px-2 py-2 hover:text-gray-400 sm:px-3"
                  href="https://drive.google.com/drive/folders/1Wr_Vtj_IMpQPladClg2xmaW90VmPfVDZ?usp=sharing"
                  target="_blank"
                >
                  {" "}
                  Press Kit{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
