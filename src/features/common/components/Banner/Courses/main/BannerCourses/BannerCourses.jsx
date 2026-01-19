import Var from "./BannerCourses.module.css";
import {Link} from "react-router-dom";
import {bannerCoursesPart} from "../../../../../../../data/data.js";
import BannerCoursesPart from "../../components/BannerCoursesPart/BannerCoursesPart.jsx";

export default function BannerCourses({info}){
    return(
        <>
            <div className={Var.container}>
                <div className={Var.textContainer}>
                    <span>{info.title}</span>
                    <div className={Var.asd}>
                        <Link className={Var.all} to="/courses">
                            {info.text}
                            <img src={info.icon} alt="svg icon" className={Var.arrow}/>
                        </Link>
                    </div>
                </div>
                <div className={Var.courses}>
                    {bannerCoursesPart.map(info => <BannerCoursesPart key={info.id} info={info}/>)}
                </div>
            </div>
        </>
    )
}