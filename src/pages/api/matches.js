// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let challongeRes = await fetch("https://api.challonge.com/v1/tournaments/IVCArcticWarfare/matches.json?api_key=" + process.env.CHALLONGE_KEY)
  
  return res.status(challongeRes.status).json(await challongeRes.json())
}
