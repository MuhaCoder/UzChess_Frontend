import LibraryBreadcrumb from "../../components/LibraryMain/breadcrumb/LibraryBreadcrumb.jsx";
import LibraryMain from "../../components/LibraryMain/main/LibraryMain.jsx";
import {libraryBreadcrumb, librarymainInfo} from "../../data/data.js";


export default function Library() {
    return (
        <>
            {libraryBreadcrumb.map(info => <LibraryBreadcrumb key={info.id} info={info}/>)}
            {librarymainInfo.map(info => <LibraryMain key={info.id} info={info}/>)}
        </>
    )
}