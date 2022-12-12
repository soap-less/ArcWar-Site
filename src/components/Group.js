function getTeamNameById(id, teams) {
    return teams.filter((team) => team.participant.group_player_ids[0] === id)[0].participant.display_name;
}

export default function Group({groupLetter, matches, teams}) {
    matches = matches.sort((a, b) => a.match.identifier.localeCompare(b.match.identifier)) // Sort matches by Identifier Letter
    console.log(matches);
    console.log(teams);
    return <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 853.8 457.69">
        <defs>
            <style>{`
                .cls-1 {
                    font-family: DolceVita, 'Dolce Vita', 'Dolce Vita Quite Regular';
                    font-size: 30.92px;
                }

                .cls-1,
                .cls-2,
                .cls-3,
                .cls-4,
                .cls-5 {
                    fill: #fff;
                }

                .cls-6 {
                    letter-spacing: 0em;
                }

                .cls-7 {
                    letter-spacing: -.05em;
                }

                .cls-8 {
                    fill: #424242;
                }

                .cls-8,
                .cls-3 {
                    font-size: 27.47px;
                }

                .cls-8,
                .cls-3,
                .cls-5 {
                    font-family: DolceVitaHeavy-Bold, 'Dolce Vita Heavy', 'Dolce Vita A Few Extra Pounds Heavy';
                    font-weight: 700;
                }

                .cls-4 {
                    font-family: DolceVitaLight, 'Dolce Vita Light', 'Dolce Vita Light Super Light';
                    font-size: 43.25px;
                }

                .cls-9 {
                    letter-spacing: -.08em;
                }

                .cls-5 {
                    font-size: 33.01px;
                }

                .cls-10 {
                    letter-spacing: -.36em;
                }

                .cls-11 {
                    letter-spacing: -.05em;
                }
            `}</style>
        </defs>
        <g id="Layer_1-2">
            <g>
                <path className="cls-2"
                    d="M301.13,419.58H41.45l-10.84,11.11,10.84,27H249.52s49.69,0,49.69,0l1.92-38.12Zm-4.37,35.54h-43.8l9.74-32.96h35.72l-1.66,32.96Z" />
                <path className="cls-2"
                    d="M301.13,371.63H41.45l-10.84,27,10.84,11.11H249.52s49.69,0,49.69,0l1.92-38.12Zm-4.37,35.54h-43.8l9.74-32.96h35.72l-1.66,32.96Z" />
                <text className="cls-4" transform="translate(36.84 36.77)">
                    <tspan x="0" y="0">GROUP {groupLetter}</tspan>
                </text><text className="cls-3" transform="translate(1.13 242.74)">
                    <tspan x="0" y="0">G2</tspan>
                </text><text className="cls-8" transform="translate(49.45 399.98)">
                    <tspan x="0" y="0">{matches[5] && matches[5].match.player1_id ? getTeamNameById(matches[5].match.player1_id, teams) : "G1 Loser"}</tspan>
                </text><text className="cls-8" transform="translate(49.45 447.93)">
                    <tspan x="0" y="0">{matches[5] && matches[5].match.player2_id ? getTeamNameById(matches[5].match.player2_id, teams) : "G2 Loser"}</tspan>
                </text><text className="cls-3" transform="translate(0 423.95)">
                    <tspan x="0" y="0">G4</tspan>
                </text><text className="cls-3" transform="translate(7.22 101.77)">
                    <tspan x="0" y="0">G1</tspan>
                </text>
                <polygon className="cls-2"
                    points="311.66 389.16 331.58 389.36 331.33 413.24 365.67 413.62 366.17 367.26 372.74 367.33 366.29 367.39 366.73 414.67 329.57 415 329.36 391.58 311.66 391.75 311.66 389.16" />
                <polygon className="cls-2"
                    points="311.66 436.44 329.38 436.63 329.63 413.24 365.67 413.62 366.17 367.26 372.74 367.33 366.29 367.39 366.73 414.67 331.38 415 331.6 438.85 311.66 439.03 311.66 436.44" />
                <g>
                    <polygon className="cls-2"
                        points="311.66 208.86 331.58 209.05 331.33 232.94 365.67 233.31 366.17 186.95 372.74 187.02 366.29 187.08 366.73 234.36 329.57 234.69 329.36 211.27 311.66 211.45 311.66 208.86" />
                    <polygon className="cls-2"
                        points="311.66 256.13 329.38 256.33 329.63 232.94 365.67 233.31 366.17 186.95 372.74 187.02 366.29 187.08 366.73 234.36 331.38 234.69 331.6 258.55 311.66 258.72 311.66 256.13" />
                </g>
                <g>
                    <polygon className="cls-2"
                        points="311.66 114.76 329.38 114.96 329.63 91.57 366.63 91.95 366.14 139.28 372.74 139.35 366.01 139.41 365.58 93 331.38 93.33 331.6 117.18 311.66 117.36 311.66 114.76" />
                    <polygon className="cls-2"
                        points="311.66 67.49 331.58 67.69 331.33 91.57 366.63 91.95 366.14 139.28 372.74 139.35 366.01 139.41 365.58 93 329.57 93.33 329.36 69.91 311.66 70.08 311.66 67.49" />
                </g>
                <polygon className="cls-2"
                    points="365.29 284.6 366.06 320.06 372.74 319.92 366.33 319.79 367.02 284.6 365.29 284.6" />
                <path className="cls-2"
                    d="M613.04,167.88h-219.33l-10.83,11.11,10.83,27h257.76l1.92-38.12h-40.35Zm35.98,35.54h-43.8l9.74-32.96h35.72l-1.66,32.96Z" />
                <path className="cls-2"
                    d="M613.04,301.14h-219.33l-10.83,11.11,10.83,27h257.76l1.92-38.12h-40.35Zm35.98,35.54h-43.8l9.74-32.96h35.72l-1.66,32.96Z" />
                <path className="cls-2"
                    d="M613.04,349.09h-219.33l-10.83,11.11,10.83,27h257.76l1.92-38.12h-40.35Zm35.98,35.54h-43.8l9.74-32.96h35.72l-1.66,32.96Z" />
                <text className="cls-5" transform="translate(623.27 198.1)">
                    <tspan x={matches[2] && matches[2].match.scores_csv.split("-")[1] === "1" ? "3" : "0"} y="0">{matches[2] && matches[2].match.scores_csv ? matches[2].match.scores_csv.split("-")[1] : "-"}</tspan>
                </text><text className="cls-5" transform="translate(623.27 150.15)">
                    <tspan x={matches[2] && matches[2].match.scores_csv.split("-")[0] === "1" ? "3" : "0"} y="0">{matches[2] && matches[2].match.scores_csv ? matches[2].match.scores_csv.split("-")[0] : "-"}</tspan>
                </text><text className="cls-3" transform="translate(353.16 172.26)">
                    <tspan x="0" y="0">G3</tspan>
                </text>
                <path className="cls-2"
                    d="M301.13,238.37H41.45l-10.84,11.11,10.84,27H249.52s49.69,0,49.69,0l1.92-38.12Zm-4.37,35.54h-43.8l9.74-32.96h35.72l-1.66,32.96Z" />
                <text className="cls-5" transform="translate(271 268.59)">
                    <tspan x={matches[1] && matches[1].match.scores_csv.split("-")[1] === "1" ? "3" : "0"} y="0">{matches[1] && matches[1].match.scores_csv ? matches[1].match.scores_csv.split("-")[1] : "-"}</tspan>
                </text><text className="cls-5" transform="translate(271 220.64)">
                    <tspan x={matches[1] && matches[1].match.scores_csv.split("-")[0] === "1" ? "3" : "0"} y="0">{matches[1] && matches[1].match.scores_csv ? matches[1].match.scores_csv.split("-")[0] : "-"}</tspan>
                </text><text className="cls-5" transform="translate(271 401.85)">
                    <tspan x={matches[5] && matches[5].match.scores_csv.split("-")[0] === "1" ? "3" : "0"} y="0">{matches[5] && matches[5].match.scores_csv ? matches[5].match.scores_csv.split("-")[0] : "-"}</tspan>
                </text><text className="cls-5" transform="translate(271 449.8)">
                    <tspan x={matches[5] && matches[5].match.scores_csv.split("-")[1] === "1" ? "3" : "0"} y="0">{matches[5] && matches[5].match.scores_csv ? matches[5].match.scores_csv.split("-")[1] : "-"}</tspan>
                </text>
                <path className="cls-2"
                    d="M260.78,190.42H41.45l-10.84,27,10.84,11.11H299.21l1.92-38.12h-40.35Zm35.98,35.54h-43.8l9.74-32.96h35.72l-1.66,32.96Z" />
                <path className="cls-2"
                    d="M260.78,97.34H41.45l-10.84,11.11,10.84,27H299.21l1.92-38.12h-40.35Zm35.98,35.54h-43.8l9.74-32.96h35.72l-1.66,32.96Z" />
                <text className="cls-5" transform="translate(271 127.62)">
                    <tspan x={matches[0] && matches[0].match.scores_csv.split("-")[1] === "1" ? "3" : "0"} y="0">{matches[0] && matches[0].match.scores_csv ? matches[0].match.scores_csv.split("-")[1] : "-"}</tspan>
                </text><text className="cls-5" transform="translate(271 79.67)">
                    <tspan x={matches[0] && matches[0].match.scores_csv.split("-")[0] === "1" ? "3" : "0"} y="0">{matches[0] && matches[0].match.scores_csv ? matches[0].match.scores_csv.split("-")[0] : "-"}</tspan>
                </text>
                <path className="cls-2"
                    d="M260.78,49.39H41.45l-10.84,27,10.84,11.11H299.21l1.92-38.12h-40.35Zm35.98,35.54h-43.8l9.74-32.96h35.72l-1.66,32.96Z" />
                <text className="cls-5" transform="translate(623.27 331.36)">
                    <tspan x={matches[6] && matches[6].match.scores_csv.split("-")[0] === "1" ? "3" : "0"} y="0">{matches[6] && matches[6].match.scores_csv ? matches[6].match.scores_csv.split("-")[0] : "-"}</tspan>
                </text><text className="cls-5" transform="translate(623.27 379.31)">
                    <tspan x={matches[6] && matches[6].match.scores_csv.split("-")[1] === "1" ? "3" : "0"} y="0">{matches[6] && matches[6].match.scores_csv ? matches[6].match.scores_csv.split("-")[1] : "-"}</tspan>
                </text><text className="cls-8" transform="translate(401.72 329.49)">
                    <tspan x="0" y="0">{matches[6] && matches[6].match.player1_id ? getTeamNameById(matches[6].match.player1_id, teams) : "G3 Loser"}</tspan>
                </text><text className="cls-8" transform="translate(401.72 377.44)">
                    <tspan x="0" y="0">{matches[6] && matches[6].match.player2_id ? getTeamNameById(matches[6].match.player2_id, teams) : "G4 Winner"}</tspan>
                </text><text className="cls-3" transform="translate(352.99 353.47)">
                    <tspan x="0" y="0">G5</tspan>
                </text><text className="cls-8" transform="translate(49.45 266.72)">
                    <tspan x="0" y="0">{matches[1] && matches[1].match.player2_id ? getTeamNameById(matches[1].match.player2_id, teams) : "Seed 3"}</tspan>
                </text><text className="cls-8" transform="translate(49.45 218.77)">
                    <tspan x="0" y="0">{matches[1] && matches[1].match.player1_id ? getTeamNameById(matches[1].match.player1_id, teams) : "Seed 2"}</tspan>
                </text><text className="cls-8" transform="translate(49.45 77.8)">
                    <tspan x="0" y="0">{matches[0] && matches[0].match.player1_id ? getTeamNameById(matches[0].match.player1_id, teams) : "Seed 1"}</tspan>
                </text><text className="cls-8" transform="translate(49.45 125.74)">
                    <tspan x="0" y="0">{matches[0] && matches[0].match.player2_id ? getTeamNameById(matches[0].match.player2_id, teams) : "Seed 4"}</tspan>
                </text>
                <polygon className="cls-2" points="663.01 342.45 732.33 344.28 663.01 345.9 663.01 342.45" /><text className="cls-1"
                    transform="translate(743.44 157.78)">
                    <tspan x="0" y="0">Winner</tspan>
                    <tspan x="-11.5" y="30.92">Ad</tspan>
                    <tspan className="cls-10" x="24.21" y="30.92">v</tspan>
                    <tspan x="30.67" y="30.92">ances</tspan>
                </text><text className="cls-1" transform="translate(743.44 338.99)">
                    <tspan x="0" y="0">Winner</tspan>
                    <tspan x="-11.5" y="30.92">Ad</tspan>
                    <tspan className="cls-10" x="24.21" y="30.92">v</tspan>
                    <tspan x="30.67" y="30.92">ances</tspan>
                </text>
                <polygon className="cls-2" points="663.01 161.24 732.33 163.07 663.01 164.69 663.01 161.24" />
                <path className="cls-2"
                    d="M613.04,119.93h-219.33l-10.83,27,10.83,11.11h257.76l1.92-38.12h-40.35Zm35.98,35.54h-43.8l9.74-32.96h35.72l-1.66,32.96Z" />
                <text className="cls-8" transform="translate(401.72 148.28)">
                    <tspan x="0" y="0">{matches[2] && matches[2].match.player1_id ? getTeamNameById(matches[2].match.player1_id, teams) : "G1 Winner"}</tspan>
                </text><text className="cls-8" transform="translate(401.72 196.23)">
                    <tspan x="0" y="0">{matches[2] && matches[2].match.player2_id ? getTeamNameById(matches[2].match.player2_id, teams) : "G2 Winner"}</tspan>
                </text>
            </g>
        </g>
    </svg>
}