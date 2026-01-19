import Var from "./Filter.module.css";
import {FilterLevel} from "../../../common/components/Filter/components/FilterLevel/FilterLevel.jsx";

export default function Filter({info}){
    return(
        <>
            <div className={Var.container}>
                <div className={Var.titleContainer}>
                    <p>{info.filTitle}</p>
                    <span>{info.filText}</span>
                </div>
                <div className={Var.select}>
                    <div style={{zIndex: "2", position: "relative"}}>
                        <span>{info.text1}</span>
                        <FilterLevel info={info}/>
                    </div>
                    <div style={{zIndex: "1", position: "relative"}}>
                        <span>{info.text2}</span>
                        <FilterLevel info={info}/>
                    </div>
                </div>
            </div>
        </>
    )
}