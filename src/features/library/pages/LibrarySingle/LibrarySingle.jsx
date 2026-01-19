import {librarySingleBreadcrumb, librarySingleInfo} from "../../data/data.js";
import LibrarySingleBreadcrumb from "../../components/LibrarySingleMain/breadcrumb/LibrarySingleBreadcrumb.jsx";
import LibrarySingleMain from "../../components/LibrarySingleMain/main/LibrarySingleMain/LibrarySingleMain.jsx";

export default function LibrarySingle() {
    return (
        <>
            {librarySingleBreadcrumb.map(info => <LibrarySingleBreadcrumb key={info.id} info={info}/>)}
            {librarySingleInfo.map(info => <LibrarySingleMain key={info.id} info={info}/>)}
        </>
    )
}