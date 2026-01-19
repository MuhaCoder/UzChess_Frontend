import Var from "./CartDialog.module.css";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function CartDialog({info, dialogRef, closeDialog}){
    const [hover, setHover] = useState(false);

    return(
        <dialog ref={dialogRef}>
            <div className={Var.container}>
                <section className={Var.infoSection}>
                    <div className={Var.imageCover}>
                        <img src={info.image} alt="svg icon"/>
                    </div>
                    <h1>{info.title}</h1>
                    <p>{info.text}</p>
                    <div className={Var.codeContainer}>
                        <span>{info.codeText}</span>
                        <div className={Var.codeCover}>
                            <p>{info.code}</p>
                            <div className={Var.image}>
                                <img src={info.icon} alt="svg icon"/>
                            </div>
                        </div>
                    </div>
                    <Link to='/'><button className={Var.btn}>{info.btnText}</button></Link>
                </section>
                <button className={Var.closeBtn} onClick={closeDialog}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}>
                    <img src={hover ? info.cancelGray : info.cancelWhite} alt="svg icon"/>
                </button>
            </div>
        </dialog>
    )
}