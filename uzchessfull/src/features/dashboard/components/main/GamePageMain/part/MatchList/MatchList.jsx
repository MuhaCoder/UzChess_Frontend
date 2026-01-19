import Var from "./MatchList.module.css";

export default function MatchList({info}){
    return(
        <>
            <div className={`${Var.mainContainer} ${info.number % 2 === 0 ? Var.dark : ""} ${info.number >= 6 ? Var.dark : ""}`}>
                <div className={Var.number}>
                    <span>{info.number}.</span>
                </div>
                <div className={Var.nameContainer}>
                    <div className={Var.name}>
                        <img src={info.win} alt="svg icon"/>
                        <span>{info.player1}</span>
                        <img src={info.flag1} alt="scg icon"/>
                    </div>
                    <div className={Var.name}>
                        {info.drow !== false ? (<img src={info.win} alt="svg icon"/>) : (<img src={info.lost} alt="svg icon"/>)}
                        <span>{info.player2}</span>
                        <img src={info.flag2} alt="svg icon"/>
                    </div>
                </div>
                <div className={Var.rating}>
                    <span>({info.points1})</span>
                    <span>({info.points2})</span>
                </div>
                <div className={Var.result}>
                    <span>{info.result1}</span>
                    <span>{info.result2}</span>
                </div>
                <div className={Var.gameType}>
                    <img src={info.typeIcon} alt="svg icon"/>
                    <p className={Var[info.gameType]}>{info.gameType}</p>
                </div>
                <div className={Var.gameHod}>
                    <span>{info.gameHod}</span>
                </div>
                <div className={Var.gameDate}>
                    <span>{info.dataDay} {info.dataMonth}, {info.dataYear}</span>
                </div>
            </div>
        </>
    )
}