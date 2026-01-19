import Var from "./BannerBookPart.module.css";

export default function BannerBookPart({info}) {
    return (
        <>
            <div className={`${Var.container} ${info.id >= 4 ? Var.noneBorder : ""} ${info.id <= 1 ? Var.nonePadding : ""}`}>
                <img src={info.image} alt={info.alt}/>
                <div className={Var.textContainer}>
                    <p>{info.title}</p>
                    <span>{info.name}</span>
                </div>
            </div>
        </>
    )
}