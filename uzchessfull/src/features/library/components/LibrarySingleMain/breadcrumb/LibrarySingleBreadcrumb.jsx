import crumb from "../../../../../MainCss/Breadcrumb/Breadcrumb.module.css";
import {Link} from "react-router-dom";


export default function LibrarySingleBreadcrumb({info}) {
    return (
        <>
            <div className={crumb.container}>
                <img src={info.icon} alt={info.alt}/>
                <Link className={crumb.gray} to='/'>{info.main}</Link>
                <img src={info.chess} alt={info.alt}/>
                <Link className={crumb.gray} to='/library'>{info.library}</Link>
                <img src={info.chess} alt={info.alt}/>
                <Link className={crumb.white} to='/library/single'>{info.text}</Link>
            </div>
        </>
    )
}