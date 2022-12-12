export default function IVCInfo() {
    return <div className="bg-black/60">
        <div className="mx-10 grid gap-4 lg:grid-cols-8 lg:gap-0">
            <div className="mt-5 mb-5 text-center text-white sm:col-end-5 sm:text-left lg:col-start-2 lg:mx-6 ">
            <h5
                className="mb-2 font-bold uppercase"
                style={{ fontFamily: "Dolce Vita" }}
            >
                What is Irvine Valley College (IVC) Esports?
            </h5>
            <a
                className="mt-5"
                style={{
                fontFamily: "Dolce Vita Light",
                }}
            >
                Students and faculty involved in the IVC Esports program are part of
                a 100+ member team that brings esports to Irvine Valley College
                through competition, career development, and community building.
            </a>
            </div>
            <div className=" col-start-5 col-end-9 ml-10 mt-5 mb-5 hidden md:block">
            <img src="./arena.jpg" width={300} alt={"Photo of Players Competing in the Laser Arena"} />
            </div>
      </div>
    </div>
}