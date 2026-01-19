import Var from "./ErrorElement.module.css";
import {Link} from "react-router-dom";

export default function ErrorElement({info}){
    return(
        <>
            <div className={Var.container} key={info.id}>
                <div className={Var.error}>
                    <h1>{info.h1}</h1>
                    <span>{info.title}</span>
                    <p>{info.text}</p>
                    <Link to="/">
                        <button>
                            <img src={info.btnIcon} alt="svg icon"/>
                            {info.btnText}
                        </button>
                    </Link>
                </div>
                <img src={info.image} alt="pnj image"/>
            </div>
        </>
    )
}