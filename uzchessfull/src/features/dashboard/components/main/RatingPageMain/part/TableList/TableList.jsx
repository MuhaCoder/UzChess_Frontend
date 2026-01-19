import Var from "./TableList.module.css";

export default function TableList({info}){
    return(
        <>
            <div className={`${Var.container} ${info.id % 2 === 0 ? Var.dark : ""}`}>
                <div className={Var.numberCover}>
                    <img src={info.upIcon} alt="svg icon"/>
                    {info.number === 1 ? (<img src={info.firstIcon} alt="scg icon"/>)
                        : (<p>{info.number}</p>)}
                </div>
                <div className={Var.nameCover}>
                    <img src={info.playerIcon} alt="svg icon"/>
                    <span>{info.name}</span>
                    <img src={info.flagIcon} alt="svg icon"/>
                </div>
                <div className={Var.pointsCover}>
                    <p>{info.points1}</p>
                    {info.plus !== 0 ? (<span>+{info.plus}</span>) : null}
                </div>
                <p style={{width: '160px'}}>{info.points2}</p>
                <p>{info.points3}</p>
            </div>
        </>
    )
}