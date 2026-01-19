import Var from "./Footer.module.css";

export default function Footer({info}){
    return(
        <>
            <footer className={Var.footer}>
                <img src={info.icon} alt={info.alt}/>
                <div className={Var.textContainer}>
                    <span>{info.text1}</span>
                    <span>{info.text2}</span>
                    <span>{info.text3}</span>
                    <span>{info.text4}</span>
                </div>
                <div className={Var.iconContainer}>
                    <img src={info.inst} alt={info.alt}/>
                    <img src={info.tel} alt={info.alt}/>
                    <img src={info.tube} alt={info.alt}/>
                    <img src={info.twit} alt={info.alt}/>
                    <img src={info.face} alt={info.alt}/>
                </div>
                <div className={Var.bottom}>
                    <span>{info.title}</span>
                    <img src={info.image} alt={info.alt}/>
                    <span>{info.name}</span>
                </div>
            </footer>
        </>
    )
}