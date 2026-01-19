import crumb from "../../../../MainCss/Breadcrumb/Breadcrumb.module.css";
import {Link} from "react-router-dom";


export default function ContactBreadcrumb({info}){
    return(
        <>
            <div className={crumb.container}>
                <img src={info.icon} alt={info.alt}/>
                <Link className={crumb.gray} to='/'>{info.main}</Link>
                <img src={info.chess} alt={info.alt}/>
                <Link className={crumb.white} to='/contact'>{info.contact}</Link>
            </div>
        </>
    )
}