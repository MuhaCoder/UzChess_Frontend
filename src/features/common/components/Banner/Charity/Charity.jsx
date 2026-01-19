import Var from "./Charity.module.css";

export default function Charity({info}){
    return(
        <>
            <div className={Var.charityContainer}>
                <img src={info.icon} alt="svg icon"/>
                <div className={Var.textContainer}>
                    <h4>{info.title}</h4>
                    <p>{info.text}</p>
                </div>
                <button>soon</button>
            </div>
        </>
    )
}