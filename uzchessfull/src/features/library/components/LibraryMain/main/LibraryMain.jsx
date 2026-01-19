import {useState} from "react";
import {useEffect} from "react";
import {useRef} from "react";
import styled from "styled-components";
import Var from "./LibraryMain.module.css"
import {books} from "../../../data/data.js";
import {filterInfo} from "../../../../../data/data.js";
import Filter from "../../../../common/components/Filter/Main/Filter/Filter.jsx";
import Book from "../part/Book/Book.jsx";

export default function LibraryMain({info}) {
    const [query, setQuery] = useState("")
    const filter = books.filter((info) => info.title.toLowerCase().includes(query.trim().toLowerCase()))
    const [active, setActive] = useState(false)
    const searchRef = useRef(null);

    useEffect(() => {
        function outClick(props) {
            if (searchRef.current && !searchRef.current.contains(props.target)) {
                setActive(false)
            }
        }

        document.addEventListener("mousedown", outClick);
        return () => document.removeEventListener("mousedown", outClick)
    }, [])

    return (
        <>
            <main className={Var.main}>
                <section>
                    <div className={Var.container}>
                        <img src={info.h1Icon} alt={info.alt}/>
                        <h1>{info.h1}</h1>
                    </div>
                    <div>
                        {filterInfo.map(info => <Filter key={info.id} info={info}/>)}
                    </div>
                </section>
                <section className={Var.searchAndBooks}>
                    <div className={`${Var.searchContainer} ${active ? Var.searchActive : ""}`}
                         onClick={() => setActive(!active)} ref={searchRef}>
                        <img src={info.icon} alt={info.alt}/>
                        <input value={query} type="search" placeholder={info.placeholder}
                               onChange={(event) => setQuery(event.target.value)}/>
                    </div>
                    <div className={Var.bookContainer}>
                        {filter.length === 0 ? (
                            <div className={Var.nothing}>
                                <img src={info.nImage} alt="svg icon"/>
                                <NText>{info.nText}</NText>
                            </div>
                        ) : (filter.map(info => <Book key={info.id} info={info}/>))}
                    </div>
                    {query.length === 0 ? <Btn>{info.btnText}</Btn> : ""}
                </section>
                <section className={Var.banner}>
                    <img src={info.banner} alt="pnj image"/>
                    <img className={Var.bannerImage} src={info.bannerImage} alt="pnj image"/>
                </section>
            </main>
        </>
    )
}

const NText = styled.p`
    font-family: poppins, sans-serif;
    font-weight: 700;
    font-size: 28px;
    color: #F7F9FA;
`;
const Btn = styled.button`
    margin: 0 auto;
    width: 144px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid rgba(247, 249, 250, 0.3);
    background-color: rgba(247, 249, 250, 0.1);
    font-family: poppins, sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #F7F9FA;
    line-height: 130%;

    &:hover {
        background-color: #1C92E0;
        cursor: pointer;
    }

    &:active {
        transform: scale(98%);
    }
`;
