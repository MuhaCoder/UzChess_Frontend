import {errorBreadcrumb, errorElementInfo} from "../../../../../../data/data.js";
import ErrorBreadcrumb from "../../components/breadcrumb/ErrorBreadcrumb.jsx";
import ErrorElement from "../../components/main/ErrorElement/ErrorElement.jsx";

export default function ErrorPage(){
    return(
        <>
            {errorBreadcrumb.map(info => <ErrorBreadcrumb key={info.id} info={info}/>)}
            {errorElementInfo.map(info => <ErrorElement key={info.id} info={info}/>)}
        </>
    )
}