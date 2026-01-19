import crumb from "../../../../../../MainCss/Breadcrumb/Breadcrumb.module.css";
import {Link} from "react-router-dom";


export default function ErrorBreadcrumb({info}){
    return(
        <>
            <div className={crumb.container} key={info.id}>
                <img src={info.icon} alt={info.alt}/>
                <Link className={crumb.gray} to='/'>{info.main}</Link>
                <img src={info.chess} alt={info.alt}/>
                <span className={crumb.white}>{info.error}</span>
            </div>
        </>
    )
}