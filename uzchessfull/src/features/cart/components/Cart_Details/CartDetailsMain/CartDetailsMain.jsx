import Var from "./CartDetailsMain.module.css";
import {Link} from "react-router-dom";
import {useRef} from "react";
import {cartDialog} from "../../../data/data.js";
import CartDialog from "../CartDialog/CartDialog.jsx";

export default function CartDetailsMain({info}){
    const dialogRef = useRef(null);
    const closeDialog = () => {
        dialogRef.current?.close();
    };

    function formatPrice(price) {
        return new Intl.NumberFormat("uz", {minimumFractionDigits: 2}).format(price).replaceAll(',', '.')
    }

    return(
        <>
            <main className={Var.main}>
                <section className={Var.detailsSection}>
                    <h1 className={Var.h1}>{info.h1}</h1>
                    <div className={Var.inputCover} style={{marginTop: "16px"}}>
                        <p>{info.input}</p>
                        <label>
                            <input type="text" placeholder={info.inputText}/>
                        </label>
                    </div>
                    <div className={Var.inputContainer}>
                        <div className={Var.numberInput}>
                            <p>{info.telInput}</p>
                            <div className={Var.input}>
                                <span>+{info.telInputLabel}</span>
                                <label>
                                    <input type="number" className={Var.numberInput} placeholder={info.telInputText}/>
                                </label>
                            </div>
                        </div>
                        <div className={Var.inputCover}>
                            <p>{info.emailInput}</p>
                            <label>
                                <input type="email" placeholder={info.emailInputText}/>
                            </label>
                        </div>
                    </div>
                    <div className={Var.btnContainer}>
                        <Link to='/cart'><button className={Var.btnCancel}>{info.btnCancel}</button></Link>
                        <div>
                            {cartDialog.map(info => <CartDialog key={info.id} info={info} dialogRef={dialogRef} closeDialog={closeDialog}/>)}
                            <button className={Var.btnAgree} onClick={() => dialogRef.current.showModal()}>{info.btnAgree}</button>
                        </div>
                    </div>
                </section>
                <section className={Var.terminalSection}>
                    <div className={Var.total}>
                        <p>{info.total}</p>
                        <span>{formatPrice(info.totalCash)} {info.uzs}</span>
                    </div>
                    <div className={Var.deliveryContainer}>
                        <div className={Var.cashCover}>
                            <p>{info.delivery}</p>
                            <span>{info.free}</span>
                        </div>
                        <div className={Var.cashCover}>
                            <p>{info.deliveryCash}</p>
                            <span>{info.free}</span>
                        </div>
                    </div>
                    <div className={Var.hasBorder}>
                        <p>{info.pay}</p>
                        <span>{formatPrice(info.payCash)} {info.uzs}</span>
                    </div>
                    <div className={Var.discountContainer}>
                        <div className={Var.cashCover}>
                            <p>{info.discount}</p>
                            <span>{formatPrice(info.discountCash)} {info.uzs} ({info.cashPercent}%)</span>
                        </div>
                        <div className={Var.cashCover}>
                            <p>{info.coupon}</p>
                            <span>{info.couponCode}</span>
                        </div>
                        <div className={Var.cashCover}>
                            <p>{info.payCashType}</p>
                            <span>{info.free}</span>
                        </div>
                    </div>
                    <div className={Var.infoContainer}>
                        <div className={Var.imageBox}>
                            <img src={info.infoIcon} alt="svg icon"/>
                        </div>
                        <p>{info.infoText}</p>
                    </div>
                </section>
            </main>
        </>
    )
}