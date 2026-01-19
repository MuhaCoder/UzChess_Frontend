import Var from "./Curs.module.css";
import {useState} from "react";

export default function Curs({info}) {
    const [burn, setBurn] = useState(false)

    function formatPrice(price) {
        return new Intl.NumberFormat("uz", {minimumFractionDigits: 2})
            .format(price).replaceAll(',', '.')
    }

    function formatRating(rating) {
        return new Intl.NumberFormat("uz", {minimumFractionDigits: 1}).format(rating)
            .replaceAll(',', '.')
    }

    return (
        <>
            <div className={Var.curs}>
                <section className={Var.imageSection}>
                    <img className={Var.imageCover} src={info.cursImage} alt="pnj image"/>
                    <div className={Var.imageRating}>
                        <img src={info.ratingIcon} alt="svg icon"/>
                        <span>{formatRating(info.rating)}</span>
                    </div>
                    <div className={Var.imageLang}>{info.cursLang}</div>
                </section>
                <section className={Var.infoSection}>
                    <div className={Var.title}>
                        <h2>{info.title}</h2>
                        <p>{info.master}</p>
                    </div>
                    <div className={Var.price}>
                        {!info.oldPrice && !info.newPrice ? (
                            <span className={Var.free}>{info.free}</span>
                        ) : info.oldPrice && !info.newPrice ? (
                            <span className={Var.oldPrice}>{formatPrice(info.oldPrice)} uzs</span>
                        ) : !info.oldPrice && info.newPrice ? (
                            <span className={Var.newPrice}>{formatPrice(info.newPrice)} uzs</span>
                        ) : (<>
                            <span className={Var.oldPrice}>{formatPrice(info.oldPrice)} uzs</span>
                            <span className={Var.newPrice}>{formatPrice(info.newPrice)} uzs</span>
                        </>)}
                    </div>
                    <div className={Var.navAndHeart}>
                        <div className={Var.cursNav}>
                            <div className={Var.navSec}>
                                <img src={info.levelIcon} alt="svg icon"/>
                                <span>{info.levelText}</span>
                            </div>
                            <div className={Var.line}></div>
                            <div className={Var.navSec}>
                                <img src={info.sIcon} alt="svg icon"/>
                                <span>{info.sText} ta bo‘lim</span>
                            </div>
                            <div className={Var.line}></div>
                            <div className={Var.navSec}>
                                <img src={info.directionIcon} alt="svg icon"/>
                                <span>{info.directionText}</span>
                            </div>
                        </div>
                        <div className={Var.heart} onClick={() => setBurn(!burn)}>
                            {burn ? (<img src={info.heartGreen} alt="svg icon"/>)
                                : (<img src={info.heart} alt="svg icon"/>)}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}