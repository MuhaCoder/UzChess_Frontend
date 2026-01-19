import Var from "./FilterLevel.module.css";
import {useState} from "react";
import {level} from "../../../../../../data/data.js";

export function FilterLevel({info}) {
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState("Barchasi");

    return (
        <>
            <div className={Var.filterSelect1}>
                <button className={Var.dropdownBtn} onClick={() => setOpen(!open)}>
                    {lang}
                    <img className={`${Var.arrow} ${open ? Var.active : ""}`} src={info.filIcon} alt="svg icon"/>
                </button>
                {open && (
                    <div className={Var.filterDropdown}>
                        {level.map(({item, id}) => (
                            <div key={id} className={Var.filterItem} onClick={() => {
                                setLang(item);
                                setOpen(false);
                            }}>
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}