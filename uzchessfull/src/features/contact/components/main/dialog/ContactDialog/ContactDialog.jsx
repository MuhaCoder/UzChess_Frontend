import Var from "./ContactDialog.module.css";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function ContactDialog({info, dialogRef, closeDialog}){
    const [hover, setHover] = useState(false);

    return(
        <dialog ref={dialogRef}>
            <div className={Var.dialogContainer}>
                <div className={Var.container}>
                    <img className={Var.image} src={info.icon} alt="svg icon"/>
                    <h3>{info.title}</h3>
                    <p>{info.text}</p>
                    <Link to="/courses">
                        <button className={Var.textBtn}>{info.btnText}</button>
                    </Link>
                </div>
                <button className={Var.closeBtn} onClick={closeDialog}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}>
                    <img src={hover ? info.cancelGray : info.cancelWhite} alt="svg icon"/>
                </button>
            </div>
        </dialog>
    )
}