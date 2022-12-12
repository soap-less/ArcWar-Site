import Link from "next/link";

export default function Nav() {
  return (
    <div aria-label="Site Nav" className=" bg-black/60 px-6 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="relative flex grid basis-full grid-cols-2">
          <div>
            <Link href="/">
              <span className="sr-only">Logo</span>
              <img
                src="ArcWar-LettermarkSVG.svg"
                alt="The Valley Finals Logo"
                className="h-auto w-16"
              />
            </Link>
          </div>
          <div className="flex justify-end">
            <ul
              style={{
                fontFamily: "Dolce Vita Light",
                color: "white",
              }}
              className="flex items-center text-sm font-medium"
            >
              <li>
                <Link
                  className="rounded-lg px-2 py-2 hover:text-gray-400 sm:px-3"
                  href="https://www.twitch.tv/ivc_esports"
                  target="_blank"
                >
                  {" "}
                  Watch{" "}
                </Link>
              </li>
              <li className="sm:hidden">-</li>
              <li>
                <Link
                  className=" rounded-lg px-2 py-2 hover:text-gray-400 sm:px-3"
                  href="https://challonge.com/IVCArcticWarfare"
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
