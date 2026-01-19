import {liveBreadcrumb, liveMainInfo} from "../../data/data.js";
import LiveBreadcrumb from "../../components/breadcrumb/LiveBreadcrumb.jsx";
import LiveMain from "../../components/main/LiveMain.jsx";


export default function LivePage(){
    return(
        <>
            {liveBreadcrumb.map(info => <LiveBreadcrumb key={info.id} info={info}/>)}
            {liveMainInfo.map(info => <LiveMain key={info.id} info={info}/>)}
        </>
    )
}