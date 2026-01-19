import BannerBookPart from "../../components/BannerBookPart/BannerBookPart.jsx";
import {Link} from "react-router-dom";
import Var from "./BannerBook.module.css";
import {bannerBooksPart} from "../../../../../../../data/data.js";

export default function BannerBook({info}) {
    return (
        <>
            <div className={Var.container}>
                <div className={Var.textContainer}>
                    <span>{info.title}</span>
                    <div className={Var.level}>
                        <Link className={Var.all} to="/library">
                            {info.text}
                            <img src={info.icon} alt="svg icon" className={Var.arrow}/>
                        </Link>
                    </div>
                </div>
                <div className={Var.books}>
                    {bannerBooksPart.map(info => <BannerBookPart key={info.id} info={info}/>)}
                </div>
            </div>
        </>
    )
}
