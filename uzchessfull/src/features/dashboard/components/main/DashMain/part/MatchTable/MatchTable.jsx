import Var from "./MatchTable.module.css";

export default function MatchTable({info}){
    return(
        <>
            <div className={`${Var.match} ${info.id % 2 === 0 ? Var.dark : Var.light} ${info.id >= 5 ? Var.noneBorder : ""}`}>
                <div className={Var.playerName}>
                    <div className={Var.player}>
                        <img src={info.win} alt="svg icon"/>
                        <span>{info.player1}</span>
                    </div>
                    <div className={Var.player}>
                        {info.drow !== false ? (<img src={info.win} alt="svg icon"/>) : (<img src={info.lost} alt="svg icon"/>)}
                        <span>{info.player2}</span>
                    </div>
                </div>
                <div className={Var.pointsContainer}>
                    <span>({info.points1})</span>
                    <span>({info.points2})</span>
                </div>
                <div className={Var.resultContainer}>
                    <span>{info.result1}</span>
                    <span>{info.result2}</span>
                </div>
                <div className={Var.typeContainer}>
                    <img src={info.typeIcon} alt="svg icon"/>
                    <span className={Var[info.gameType]}>{info.gameType}</span>
                </div>
                <span className={Var.gameHod}>{info.gameHod}</span>
                <span className={Var.data}>{info.dataDay} {info.dataMonth}</span>
            </div>
        </>
    )
}