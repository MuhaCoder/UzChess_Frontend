import Var from "./ContactMain.module.css";
import {useState} from "react";
import {contactComponent, contactDialog} from "../../../data/data.js";
import ContactInfo from "../part/ContactInfo.jsx";
import {useRef} from "react";
import ContactDialog from "../dialog/ContactDialog/ContactDialog.jsx";

export default function ContactMain({info}) {
    const [click, setClick] = useState(false)
    const dialogRef = useRef(null);
    const closeDialog = () => {
        dialogRef.current?.close();
    };

    return (
        <>
            <main className={Var.main}>
                <section className={Var.container}>
                    <div className={Var.mainContainer}>
                        <h1>{info.h1}</h1>
                        <div className={Var.submitContainer}>
                            <section className={Var.submitSection}>
                                <div className={Var.inputContainer}>
                                    <div className={Var.inputCover}>
                                        <p>{info.nameText}</p>
                                        <label>
                                            <input className={Var.nameInput} type="text" placeholder={info.nameInput}/>
                                        </label>
                                    </div>
                                    <div className={Var.inputCover}>
                                        <p>{info.telText}</p>
                                        <div className={Var.input}>
                                            <label htmlFor='input'>+{info.telInput}</label>
                                            <input id='input' className={Var.telInput} type="tel" maxlength="9"
                                                   pattern="\d*" placeholder={info.telPlaceholder}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={Var.text}>
                                    <p>{info.text}</p>
                                    <label>
                                        <textarea className={Var.textInput} cols="9999" rows="9999"
                                                  placeholder={info.textInput}></textarea>
                                    </label>
                                </div>
                                <div className={Var.markContainer}>
                                    <div className={Var.mark}>
                                        <div className={Var.box} onClick={() => setClick(!click)}>
                                            {(click) === true ? (<img src={info.mark} alt="svg icon"/>) : ""}
                                        </div>
                                        <p>{info.use} <span>{info.blueWord1}</span> {info.and} <span>{info.blueWord2}</span> {info.agree}</p>
                                    </div>
                                    {contactDialog.map(info => <ContactDialog key={info} info={info} dialogRef={dialogRef} closeDialog={closeDialog}/>)}
                                    <button className={Var.btn} onClick={() => dialogRef.current.showModal()}>{info.btnText}</button>
                                </div>
                            </section>
                            <section className={Var.infoSection}>
                                {contactComponent.map(info => <ContactInfo key={info.id} info={info}/>)}
                            </section>
                        </div>
                    </div>
                    <div className={Var.mapContainer}>
                        <img className={Var.image} src={info.map} alt="pnj image"/>
                        <button className={Var.Btn}>
                            <img src={info.mapBtnIcon} alt="svg icon"/>
                            {info.mapBtnText}
                        </button>
                        <div className={Var.plus}>
                            <img src={info.mapRed} alt="svg icon"/>
                        </div>
                        <div className={Var.minus}>
                            <img src={info.mapMinus} alt="svg icon"/>
                        </div>
                        <div className={Var.target}>
                            <img src={info.mapTarget} alt="svg icon"/>
                        </div>
                    </div>
                </section>
                <section className={Var.bannerSection}>
                    <img style={{width: '326px', height: '192px'}} src={info.banner1} alt="pnj image"/>
                    <img style={{width: '326px', height: '471px'}} src={info.banner2} alt="pnj image"/>
                </section>
            </main>
        </>
    )
}