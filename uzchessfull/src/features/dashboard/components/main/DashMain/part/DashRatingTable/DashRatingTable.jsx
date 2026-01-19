import Var from "./DashRatingTable.module.css";

export default function DashRatingTable({info}){
    const red = [<img src={info.arrowDown} alt="svg icon"/>,
        <span className={Var.numberRed}>{info.arrowNumber}</span>]
    const green = [<img src={info.arrowUp} alt="svg icon"/>,
        <span className={Var.numberGreen}>{info.arrowNumber}</span>]
    const minus = <img src={info.arrowMinus} alt="svg icon"/>

    return(
        <>
            <div className={`${Var.rating} ${info.id >= 5 ? Var.noneBorder : ""}`}>
                <div className={Var.container}>
                    {info.titleIcon !== 0 ? (<img className={Var.image} src={info.titleIcon} alt="svg icon"/>)
                        : (<span className={Var.number}>{info.titleNumber}.</span>)}
                    <div className={Var.titleContainer}>
                        <p>{info.title}</p>
                        <div className={Var.arrow}>
                            {info.arrowUp !== 0 ? (green) : info.arrowDown !== 0 ? (red) : (minus)}
                        </div>
                    </div>
                </div>
                <div className={Var.points}>
                    <p>{info.points}</p>
                    {info.plusPoints >= 0 ?
                        (<span className={Var.numberGreen}>+{info.plusPoints}</span>)
                        : <span className={Var.numberRed}>{info.plusPoints}</span>}
                </div>
            </div>
        </>
    )
}