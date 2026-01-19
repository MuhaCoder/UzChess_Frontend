import Var from "./LibrarySingleMain.module.css";
import {bannerBooks} from "../../../../../../data/data.js";
import BannerBook from "../../../../../common/components/Banner/Books/main/BannerBook/BannerBook.jsx";
import {useState} from "react";
import Bar from "../../../LibraryMain/part/Book/Book.module.css";

export default function LibrarySingleMain({info}) {
    const [buy, setBuy] = useState(false)
    const [burn, setBurn] = useState(false)

    function formatPrice(price) {
        return new Intl.NumberFormat("uz", {minimumFractionDigits: 2})
            .format(price).replaceAll(',', '.')
    }

    return (
        <>
            <main className={Var.main}>
                <div className={Var.mainContainer}>
                    <section className={Var.infoSection}>
                        <div className={Var.imageCover}>
                            <img className={Var.back} src={info.image} alt="pnj image"/>
                            <img className={Var.front} src={info.image} alt="pnj image"/>
                        </div>
                        <div className={Var.infoCover}>
                            <h1>{info.title}</h1>
                            <div className={Var.price}>
                                <div className={Var.priceContainer}>
                                    <img src={info.cashIcon} alt="svg icon"/>
                                    <span className={Var.newPrice}>{formatPrice(info.newPrice)} UZS</span>
                                </div>
                                <span className={Var.oldPrice}>{formatPrice(info.oldPrice)} uzs</span>
                            </div>
                            <div className={Var.bookNav}>
                                <div className={Var.nav}>
                                    <div className={Var.navCover}>
                                        <img src={info.chess} alt="svg icon"/>
                                        <span>{info.level}</span>
                                    </div>
                                    <p>{info.levelText}</p>
                                </div>
                                <div className={Var.nav}>
                                    <div className={Var.navCover}>
                                        <img src={info.userIcon} alt="svg icon"/>
                                        <span>{info.writer}</span>
                                    </div>
                                    <p>{info.writerText}</p>
                                </div>
                                <div className={Var.nav}>
                                    <div className={Var.navCover}>
                                        <img src={info.bookIcon} alt="svg icon"/>
                                        <span>{info.pageNumber}</span>
                                    </div>
                                    <p>{info.number}</p>
                                </div>
                                <div className={Var.nav}>
                                    <div className={Var.navCover}>
                                        <img src={info.calendar} alt="svg icon"/>
                                        <span>{info.date}</span>
                                    </div>
                                    <p>{info.dateText}</p>
                                </div>
                            </div>
                            <div className={Var.buttonContainer}>
                                <button className={`${Var.basket} ${buy ? Var.basketActive : ""}`} onClick={() => setBuy(!buy)}>
                                    {buy ? (<img src={info.basketAdd} alt="svg icon"/>)
                                        : (<img src={info.basket} alt="svg icon"/>)}
                                    {info.basketText}
                                </button>
                                <button className={Var.cover} onClick={() => setBurn(!burn)}>
                                    <div className={Var.heart}>
                                        {burn ? (<img src={info.heartAdd} alt="svg icon"/>)
                                            : (<img src={info.heart} alt="svg icon"/>)}
                                    </div>
                                </button>
                                <button className={Var.cover}>
                                    <img src={info.share} alt="svg icon"/>
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className={Var.textSection}>
                        <h2>{info.textTitle}</h2>
                        <p>{info.text}</p>
                    </section>
                </div>
                <section className={Var.bannerSection}>
                    <img src={info.banner} alt="pnj image"/>
                    <div>
                        {bannerBooks.map(info => <BannerBook key={info.id} info={info}/>)}
                    </div>
                </section>
            </main>
        </>
    )
}