import Var from "./Header.module.css";
import {useRef, useState} from "react";
import {language} from "../../../../data/data.js";
import {Link, NavLink} from "react-router-dom";
import SearchBox from "./part/SearchBox.jsx";

export default function Header({info}) {
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState("O'zbekcha");
    const [isOpen, setIsOpen] = useState(false);
    const [click, setClick] = useState(false);
    const dialogRef = useRef(null);
    const closeDialog = () => {
        dialogRef.current?.close();
    };

    return (
        <>
            <header className={Var.header}>
                <div className={Var.headerLogo}>
                    <img className={Var.image} src={info.image} alt={info.alt}/>
                    <div className={Var.lineContainer}>
                        <div className={Var.line}></div>
                        <section>
                            <div className={Var.langSelect}>
                                <button className={Var.langBtn} onClick={() => {
                                    setOpen(!open);
                                    setIsOpen(!isOpen)
                                }}>
                                    {lang}
                                    <img src={info.icon} alt={info.alt}
                                         className={`${Var.arrow} ${isOpen ? Var.arrowUp : ""}`}/>
                                </button>
                                {open &&
                                    <div className={Var.langDropdown}>
                                        {language.map(({item, id}) => (
                                            <div key={id} className={Var.langItem}
                                                 onClick={() => {
                                                     setLang(item);
                                                     setOpen(false)
                                                 }}>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        </section>
                    </div>
                </div>
                <section>
                    <nav className={Var.navbar}>
                        <NavLink to="/" className={({isActive}) => `${Var.bottomLine} ${isActive ? Var.active : ""}`}>
                            <span className={Var.a}>{info.main}</span>
                        </NavLink>
                        <NavLink to="/news" className={({isActive}) => `${Var.bottomLine} ${isActive ? Var.active : ""}`}>
                            <span className={Var.a}>{info.news}</span>
                        </NavLink>
                        <NavLink to="/courses" className={({isActive}) => `${Var.bottomLine} ${isActive ? Var.active : ""}`}>
                            <span className={Var.a}>{info.courses}</span>
                        </NavLink>
                        <NavLink to="/library" className={({isActive}) => `${Var.bottomLine} ${isActive ? Var.active : ""}`}>
                            <span className={Var.a}>{info.library}</span>
                        </NavLink>
                        <NavLink to="/contact" className={({isActive}) => `${Var.bottomLine} ${isActive ? Var.active : ""}`}>
                            <span className={Var.a}>{info.contact}</span>
                        </NavLink>
                    </nav>
                </section>
                <section>
                    <div className={Var.signUp}>
                        <div className={Var.logoContainer}>
                            <SearchBox key={info.id} info={info} click={click}/>
                            <div onClick={() => setClick(!click)}>
                                {click ? (<img className={Var.cancel} src={info.cancel} alt="svg icon"/>)
                                    : (<img src={info.search} alt={info.alt}/>)}
                            </div>
                            <Link to='/cart'>
                                <img src={info.basket} alt={info.alt}/>
                            </Link>
                            <img src={info.bell} alt={info.alt}/>
                        </div>
                        <div className={Var.line}></div>
                        {}
                        <div className={Var.signIn} onClick={() => dialogRef.current.showModal()}>
                            {info.logInText}
                            <img src={info.logIn} alt={info.alt}/>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}