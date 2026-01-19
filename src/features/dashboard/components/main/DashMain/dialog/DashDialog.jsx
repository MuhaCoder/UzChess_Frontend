import Var from "./DashDialog.module.css";
import {useState} from "react";

export default function DashDialog({info, closeDialog, dialogRef}){
    const [hover, setHover] = useState(false);

    return(
        <>
            <dialog ref={dialogRef}>
                <div className={Var.dialogContainer}>
                    <img className={Var.imageCover} src={info.logo} alt="svg icon"/>
                    <div className={Var.closeBtn} onClick={closeDialog}
                         onMouseEnter={() => setHover(true)}
                         onMouseLeave={() => setHover(false)}>
                        <img src={hover ? info.cancelGray : info.cancelWhite} alt="svg icon"/>
                    </div>
                    <div className={Var.dialogMain}>
                        <div className={Var.infoSection}>
                            <img src={info.icon} alt="png image"/>
                            <h1>{info.title}</h1>
                            <p>{info.text}</p>
                            <button className={Var.logIn}>{info.btnText1}</button>
                            <button className={Var.signUp}>{info.btnText2}</button>
                        </div>
                        <img src={info.image} alt="png image"/>
                    </div>
                </div>
            </dialog>
        </>
    )
}