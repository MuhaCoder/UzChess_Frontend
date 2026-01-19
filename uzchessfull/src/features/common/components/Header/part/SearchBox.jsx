import Var from "./SearchBox.module.css";

export default function SearchBox({info, click}){
    if (!click) return null;

    return(
        <>
            <div className={Var.main}>
                <div className={Var.search}>
                    <img src={info.searchIcon} alt="svg icon"/>
                    <input type="search" placeholder={info.text}/>
                </div>
            </div>
        </>
    )
}