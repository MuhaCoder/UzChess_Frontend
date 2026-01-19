import Var from "./ContactInfo.module.css";

export default function ContactInfo({info}) {
    return (
        <>
            <div className={Var.container}>
                <img src={info.icon} alt="svg icon"/>
                <div className={Var.text}>
                    <span>{info.title}</span>
                    <p>{info.text}</p>
                </div>
            </div>
        </>
    )
}