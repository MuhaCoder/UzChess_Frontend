import Var from "./LiveMain.module.css";
import {bannerBooks} from "../../../../data/data.js";
import BannerBook from "../../../common/components/Banner/Books/main/BannerBook/BannerBook.jsx";

export default function LiveMain({info}){
    return(
        <>
            <main className={Var.main}>
                <section className={Var.liveSection}>
                    <h1>{info.title}</h1>
                    <img src={info.image} alt="png image"/>
                </section>
                <section className={Var.bannerSection}>
                    <img src={info.banner} alt="png image"/>
                    {bannerBooks.map(info => <BannerBook key={info.id} info={info}/>)}
                </section>
            </main>
        </>
    )
}