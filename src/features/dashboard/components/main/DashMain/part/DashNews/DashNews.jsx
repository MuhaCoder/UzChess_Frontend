import Var from "./DashNews.module.css";

export default function DashNews({info}) {
    return (
        <>
            <div className={`${Var.newsContainer} ${info.id >= 4 ? Var.noneBorder : ""}`}>
                <img className={Var.imageCover} src={info.image} alt="pnj image"/>
                <div className={Var.infoSection}>
                    <span>{info.dataMonth} {info.dataDay}, {info.dataYears}</span>
                    <div className={Var.titleWrapper}>
                        <h3>{info.text}</h3>
                        <img className={Var.iconCover} src={info.icon} alt="" />
                    </div>
                    <p>{info.pText}</p>
                </div>
            </div>
        </>
    )
}