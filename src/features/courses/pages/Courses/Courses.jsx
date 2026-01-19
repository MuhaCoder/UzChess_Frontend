import {cursBreadcrumb, cursMain} from "../../data/data.js";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb.jsx";
import CursMain from "../../components/main/CursMain/CursMain.jsx";

export default function Courses(){
    return(
        <>
            {cursBreadcrumb.map(info => <Breadcrumb key={info.id} info={info}/>)}
            {cursMain.map(info => <CursMain key={info.id} info={info}/>)}
        </>
    )
}
