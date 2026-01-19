import Bar from "./Book.module.css";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Book({info}) {
    const [buy, setBuy] = useState(false)
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
            <div className={Bar.book}>
                <Link to='/library/single'>
                    <div className={Bar.bookCover}>
                        <img className={Bar.image} src={info.bookImage} alt=""/>
                        <div className={Bar.rating}>
                            <img src={info.ratingIcon} alt="svg icon"/>
                            <span>{formatRating(info.rating)}</span>
                        </div>
                        <div className={Bar.bookLang}>{info.bookLang}</div>
                    </div>
                </Link>
                <section className={Bar.infoSection}>
                    <h2>{info.title}</h2>
                    <div className={Bar.price}>
                        {!info.oldPrice && !info.newPrice ? (
                            <span className={Bar.free}>{info.free}</span>
                        ) : info.oldPrice && !info.newPrice ? (
                            <span className={Bar.oldPrice}>{formatPrice(info.oldPrice)} uzs</span>
                        ) : !info.oldPrice && info.newPrice ? (
                            <span className={Bar.newPrice}>{formatPrice(info.newPrice)} uzs</span>
                        ) : (<>
                            <span className={Bar.oldPrice}>{formatPrice(info.oldPrice)} uzs</span>
                            <span className={Bar.newPrice}>{formatPrice(info.newPrice)} uzs</span>
                        </>)}
                    </div>
                    <div className={Bar.bookNav}>
                        <div className={Bar.navItem}>
                            <img src={info.levelIcon} alt="sbg icon"/>
                            <span>{info.levelText}</span>
                        </div>
                        <div className={Bar.line}></div>
                        <div className={Bar.navItem}>
                            <img src={info.directionIcon} alt="sbg icon"/>
                            <span>{info.directionText}</span>
                        </div>
                        <div className={Bar.line}></div>
                        <div className={Bar.navItem}>
                            <img src={info.userIcon} alt="sbg icon"/>
                            <span>{info.userName}</span>
                        </div>
                    </div>
                    <div className={Bar.basketAndHeart}>
                        <div className={`${Bar.basket} ${buy ? Bar.basketActive : ""}`} onClick={() => setBuy(!buy)}>
                            {buy ? (<img src={info.basketActive} alt="svg icon"/>)
                                : (<img src={info.basket} alt="svg icon"/>)}
                            <span>{info.basketText}</span>
                        </div>
                        <div className={Bar.heart} onClick={() => setBurn(!burn)}>
                            {burn ? (<img src={info.heartGreen} alt="svg icon"/>)
                                : (<img src={info.heart} alt="svg icon"/>)}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}