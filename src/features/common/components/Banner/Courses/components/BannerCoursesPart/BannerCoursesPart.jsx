import Var from "./BannerCoursesPart.module.css";

export default function BannerCoursesPart({info}){
    function formatRating(watch) {
        return new Intl.NumberFormat("uz", {minimumFractionDigits: 0}).format(watch)
    }

    return(
        <>
            <div className={`${Var.container} ${info.id >= 4 ? Var.noneBorder : ""}`}>
                <div className={Var.image}>
                    <img src={info.image} alt={info.alt}/>
                </div>
                <div className={Var.infoSection}>
                    <p>{info.title}</p>
                    <div className={Var.eyeAndRating}>
                        <div className={Var.rating}>
                            <img src={info.starIcon} alt="svg icon"/>
                            <span>{info.rating}</span>
                        </div>
                        <div className={Var.eye}>
                            <img src={info.eyeIcon} alt="svg icon"/>
                            <span>{formatRating(info.watch)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}