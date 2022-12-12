function getTeamNameById(id, teams) {
    return teams.filter((team) => team.participant.id === id)[0].participant.display_name;
}

export default function FinalBracket({ matches, teams }){
    console.log(teams);
    console.log(matches);

    return <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1313.73 364.28">
        <defs>
            <style>{`
                .cls-finals-1,
                .cls-finals-2,
                .cls-finals-3,
                .cls-finals-4 {
                    fill: #fff;
                }

                .cls-finals-5 {
                    letter-spacing: 0em;
                }

                .cls-finals-5,
                .cls-finals-6,
                .cls-finals-7 {
                    font-family: DolceVitaLight, 'Dolce Vita Light', 'Dolce Vita Light Super Light';
                }

                .cls-finals-6 {
                    letter-spacing: -.13em;
                }

                .cls-finals-8 {
                    fill: #303030;
                }

                .cls-finals-8,
                .cls-finals-9,
                .cls-finals-3 {
                    font-family: DolceVitaHeavy-Bold, 'Dolce Vita Heavy', 'Dolce Vita A Few Extra Pounds Heavy';
                }

                .cls-finals-8,
                .cls-finals-4 {
                    font-size: 39.08px;
                }

                .cls-finals-2 {
                    font-family: DolceVitaLight, 'Dolce Vita Light', 'Dolce Vita Light Super Light';
                    font-size: 43.98px;
                }

                .cls-finals-3 {
                    font-size: 46.96px;
                }
            `}</style>
        </defs>
        <g id="Layer_1-2">
            <g>
                <g>
                    <polygon className="cls-finals-1"
                        points="447.21 268.08 475.54 268.36 475.19 302.33 524.04 302.86 524.74 236.92 534.09 237.02 524.93 237.11 525.54 304.36 472.69 304.83 472.38 271.52 447.21 271.77 447.21 268.08" />
                    <polygon className="cls-finals-1"
                        points="447.21 335.32 472.41 335.6 472.77 302.33 524.04 302.86 524.74 236.92 534.09 237.02 524.93 237.11 525.54 304.36 475.26 304.83 475.57 338.76 447.21 339.01 447.21 335.32" />
                </g>
                <g>
                    <polygon className="cls-finals-1"
                        points="447.21 134.24 472.41 134.52 472.77 101.25 525.4 101.78 524.71 169.12 534.09 169.22 524.52 169.3 523.91 103.28 475.26 103.75 475.57 137.68 447.21 137.93 447.21 134.24" />
                    <polygon className="cls-finals-1"
                        points="447.21 67 475.54 67.28 475.19 101.25 525.4 101.78 524.71 169.12 534.09 169.22 524.52 169.3 523.91 103.28 472.69 103.75 472.38 70.44 447.21 70.68 447.21 67" />
                </g><text className="cls-finals-4" transform="translate(564.02 133.56)">
                    <tspan className="cls-finals-9" x="0" y="0">GRAND FINALS </tspan>
                    <tspan className="cls-finals-7" x="249.25" y="0">BO5</tspan>
                </text>
                <path className="cls-finals-1"
                    d="M432.23,310.06H15.41l-15.41,15.81,15.41,38.41H358.82s70.69,0,70.69,0l2.73-54.22Zm-6.22,50.55h-62.3l13.85-46.89h50.81l-2.36,46.89Z" />
                <text className="cls-finals-3" transform="translate(392.68 353.04)">
                    <tspan x={matches[1] && matches[1].match.scores_csv.split("-")[1] === "1" ? "3" : "0"} y="0">{matches[1] && matches[1].match.scores_csv ? matches[1].match.scores_csv.split("-")[1] : "-"}</tspan>
                </text><text className="cls-finals-3" transform="translate(392.68 284.84)">
                    <tspan x={matches[1] && matches[1].match.scores_csv.split("-")[0] === "1" ? "3" : "0"} y="0">{matches[1] && matches[1].match.scores_csv ? matches[1].match.scores_csv.split("-")[0] : "-"}</tspan>
                </text>
                <path className="cls-finals-1"
                    d="M374.84,241.85H15.41L0,280.27l15.41,15.81H429.5l2.73-54.22h-57.4Zm51.18,50.55h-62.3l13.85-46.89h50.81l-2.36,46.89Z" />
                <path className="cls-finals-1"
                    d="M374.84,109.45H15.41L0,125.26l15.41,38.41H429.5l2.73-54.22h-57.4Zm51.18,50.55h-62.3l13.85-46.89h50.81l-2.36,46.89Z" />
                <text className="cls-finals-3" transform="translate(392.68 152.52)">
                <tspan x={matches[0] && matches[0].match.scores_csv.split("-")[1] === "1" ? "3" : "0"} y="0">{matches[0] && matches[0].match.scores_csv ? matches[0].match.scores_csv.split("-")[1] : "-"}</tspan>
                </text><text className="cls-finals-3" transform="translate(392.68 84.32)">
                    <tspan x={matches[0] && matches[0].match.scores_csv.split("-")[0] === "1" ? "3" : "0"} y="0">{matches[0] && matches[0].match.scores_csv ? matches[0].match.scores_csv.split("-")[0] : "-"}</tspan>
                </text>
                <path className="cls-finals-1"
                    d="M374.84,41.25H15.41L0,79.66l15.41,15.81H429.5l2.73-54.22h-57.4Zm51.18,50.55h-62.3l13.85-46.89h50.81l-2.36,46.89Z" />
                <text className="cls-finals-8" transform="translate(26.8 350.38)">
                    <tspan x="0" y="0">{matches[1] && matches[1].match.player2_id ? getTeamNameById(matches[1].match.player2_id, teams) : "2ND SEED GROUP A"}</tspan>
                </text><text className="cls-finals-8" transform="translate(26.8 282.18)">
                    <tspan x="0" y="0">{matches[1] && matches[1].match.player1_id ? getTeamNameById(matches[1].match.player1_id, teams) : "1ST SEED GROUP B"}</tspan>
                </text><text className="cls-finals-8" transform="translate(26.8 81.66)">
                    <tspan x="0" y="0">{matches[0] && matches[0].match.player1_id ? getTeamNameById(matches[0].match.player1_id, teams) : "1ST SEED GROUP A"}</tspan>
                </text><text className="cls-finals-8" transform="translate(26.8 149.86)">
                    <tspan x="0" y="0">{matches[0] && matches[0].match.player2_id ? getTeamNameById(matches[0].match.player2_id, teams) : "2ND SEED GROUP B"}</tspan>
                </text>
                <path className="cls-finals-1"
                    d="M957.83,209.8h-393.9l-15.41,15.81,15.41,38.41h448.57l2.73-54.22h-57.4Zm51.18,50.55h-62.3l13.85-46.89h50.81l-2.36,46.89Z" />
                <text className="cls-finals-3" transform="translate(975.67 252.87)">
                    <tspan x={matches[2] && matches[2].match.scores_csv.split("-")[1] === "1" ? "3" : "0"} y="0">{matches[2] && matches[2].match.scores_csv ? matches[2].match.scores_csv.split("-")[1] : "-"}</tspan>
                </text><text className="cls-finals-3" transform="translate(975.67 184.66)">
                    <tspan x={matches[2] && matches[2].match.scores_csv.split("-")[0] === "1" ? "3" : "0"} y="0">{matches[2] && matches[2].match.scores_csv ? matches[2].match.scores_csv.split("-")[0] : "-"}</tspan>
                </text>
                <path className="cls-finals-1"
                    d="M957.83,141.59h-393.9l-15.41,38.41,15.41,15.81h448.57l2.73-54.22h-57.4Zm51.18,50.55h-62.3l13.85-46.89h50.81l-2.36,46.89Z" />
                <text className="cls-finals-8" transform="translate(575.31 182)">
                    <tspan x="0" y="0">{matches[2] && matches[2].match.player1_id ? getTeamNameById(matches[2].match.player1_id, teams) : "SEMI FINAL A WINNER"}</tspan>
                </text><text className="cls-finals-8" transform="translate(575.31 250.2)">
                    <tspan x="0" y="0">{matches[2] && matches[2].match.player2_id ? getTeamNameById(matches[2].match.player2_id, teams) : "SEMI FINAL B WINNER"}</tspan>
                </text><text className="cls-finals-2" transform="translate(1157.1 200.59)">
                    <tspan x="0" y="0">grand</tspan>
                    <tspan x="-34.47" y="43.98">chAMPION</tspan>
                </text>
                <polygon className="cls-finals-1" points="1031.54 200.35 1123.85 202.96 1031.54 205.26 1031.54 200.35" /><text
                    className="cls-finals-4" transform="translate(15.41 33.22)">
                    <tspan className="cls-finals-9" x="0" y="0">SEMI FINAL a </tspan>
                    <tspan className="cls-finals-7" x="225.92" y="0">BO</tspan>
                    <tspan className="cls-finals-7" x="275.92" y="0">3</tspan>
                </text><text className="cls-finals-4" transform="translate(15.41 233.82)">
                    <tspan className="cls-finals-9" x="0" y="0">SEMI FINAL b </tspan>
                    <tspan className="cls-finals-5" x="221.66" y="0">BO</tspan>
                    <tspan className="cls-finals-5" x="271.66" y="0">3</tspan>
                </text>
            </g>
        </g>
    </svg>
}