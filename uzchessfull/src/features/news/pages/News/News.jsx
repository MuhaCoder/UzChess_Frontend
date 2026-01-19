import {newsBreadcrumb, newsMainInfo} from "../../data/data.js";
import NewsBreadcrumb from "../../components/Breadcrumb/NewsBreadcrumb.jsx";
import NewsMain from "../../components/Main/NewsMain/NewsMain.jsx";

export default function News() {
    return (
        <>
            {newsBreadcrumb.map(info => <NewsBreadcrumb key={info.id} info={info}/>)}
            {newsMainInfo.map(info => <NewsMain key={info.id} info={info}/>)}
        </>
    )
}
