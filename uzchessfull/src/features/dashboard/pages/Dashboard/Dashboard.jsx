import {dashMainInfo} from "../../data/data.js";
import DashMain from "../../components/main/DashMain/DashMain.jsx";

export default function Dashboard(){
    return (
        <>
            {dashMainInfo.map(info => <DashMain key={info.id} info={info}/>)}
        </>
    )
}