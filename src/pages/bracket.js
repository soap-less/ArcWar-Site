import useSWR from 'swr';
import FinalBracket from '../components/FinalBracket';
import Group from '../components/Group';
import Head from 'next/head'

const fetcher = (...args) => {
  return fetch(...args).then(res => res.json())
}

export default function Home() {
  // Fetch Matches
  const { data: matches, error: matchesError } = useSWR("/api/matches",
  fetcher, {
    revalidateIfStale: true,
    refreshInterval: 60000,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  
  const { data: teams, error: teamsError } = useSWR("/api/teams",
  fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  if (!matches || !teams) return <>
    <Head>
      <title>Arctic Warfare | Bracket</title>
      <meta
        name="description"
        content="Arctic Warfare: A COD: Modern Warfare II Collegiate Tournament by Irvine Valley College"
      />
    </Head>
    <div style={{height: "100vh"}}>
      <h1 className="text-4xl" style={{fontFamily: "Gogh", color: "white", letterSpacing: "0px"}}>LOADING...</h1>
    </div>
  </>
  if (matchesError) return <>{toString(matchesError)}</>;
  if (teamsError) return <>{toString(teamsError)}</>;

  let groupIds = []
  matches.forEach((match) => {
    if(!groupIds.includes(match.match.group_id)) groupIds.push(match.match.group_id);
  })

  return (
    <>
      <Head>
        <title>Arctic Warfare | Bracket</title>
        <meta
          name="description"
          content="Arctic Warfare: A COD: Modern Warfare II Collegiate Tournament by Irvine Valley College"
        />
      </Head>
      <div className="grid grid-cols-12 mx-2 sm:gap-10 p-5">
        <div className="col-span-12 py-4 pt-8">
          <div className="py-4 font-bold text-base sm:text-2xl md:text-3xl"
            style={{
              fontFamily: "Dolce Vita Light",
              color: "white",
              letterSpacing: "2px", 
              textAlign: "center"
            }}
          >
            <h1 style={{fontFamily: "Gogh", color: "white", letterSpacing: "0px"}} className="text-2xl sm:text-4xl md:text-5xl">TOURNAMENT BRACKET</h1>
            <a href="https://challonge.com/IVCArcticWarfare" style={{textDecoration: "underline"}} target="_blank" rel="noreferrer">CLICK TO VIEW IN CHALLONGE.COM</a>
          </div>
        </div>
        <div className="xl:col-span-6 col-span-12 py-10 ">
          <Group groupLetter={"A"} matches={matches.filter((match) => match.match.group_id === groupIds[0])} teams={teams}/>
        </div>
        <div class="xl:col-span-6 col-span-12 py-10 ">
          <Group groupLetter={"B"} matches={matches.filter((match) => match.match.group_id === groupIds[1])} teams={teams}/>
        </div>
        <div class="md:col-start-2 md:col-span-10 py-10 col-span-12 border-t-2">
          <FinalBracket matches={matches.filter((match) => !match.match.group_id)} teams={teams}/>
        </div>
      </div>
    </>
  )
}
