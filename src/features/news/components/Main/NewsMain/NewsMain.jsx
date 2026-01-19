import {useEffect, useRef, useState} from "react";
import NewsItem from "../part/NewsItem/NewsItem.jsx";
import BannerBook from "../../../../common/components/Banner/Books/main/BannerBook/BannerBook.jsx";
import {news} from "../../../data/data.js";
import {bannerBooks} from "../../../../../data/data.js";
import {styled} from "styled-components";
import Var from "./NewsMain.module.css";

export default function NewsMain({info}) {
    const [stretch, setStretch] = useState(false)
    const searchRef = useRef(null);
    const [query, setQuery] = useState("")
    const filter = news.filter((info) => info.text.toLowerCase().includes(query.trim().toLowerCase()))

    useEffect(() => {
        function outClick(props) {
            if (searchRef.current && !searchRef.current.contains(props.target)) {
                setStretch(false)
            }
        }

        document.addEventListener("mousedown", outClick);
        return () => document.removeEventListener("mousedown", outClick)
    }, [])

    return (
        <div className={Var.mainContainer}>
            <div>
                <div className={Var.container}>
                    <h1>{info.h1}</h1>
                    <div className={`${Var.search} ${stretch ? Var.active : ""}`}
                         onClick={() => setStretch(true)} ref={searchRef}>
                        <img src={info.icon} alt={info.alt}/>
                        <input value={query} type="search" placeholder={info.placeholder}
                               onChange={(event) => setQuery(event.target.value)}/>
                    </div>
                </div>
                <div className={Var.buttonCover}>
                    <div className={Var.section}>
                        {filter.length === 0 ? (
                            <div className={Var.nothing}>
                                <img src={info.nImage} alt="svg icon"/>
                                <NText>{info.nText}</NText>
                            </div>
                        ) : (filter.map(info => <NewsItem key={info.id} info={info}/>))}
                    </div>
                    {query.length === 0 ? <button>{info.btnText}</button> : null}
                </div>
            </div>
            <div className={Var.bannerContainer}>
                <div>
                    <img src={info.BImage} alt={info.alt}/>
                </div>
                {bannerBooks.map(info => <BannerBook key={info.id} info={info}/>)}
            </div>
        </div>
    );

}
const NText = styled.p`
    font-family: poppins, sans-serif;
    font-weight: 700;
    font-size: 28px;
    color: #F7F9FA;
`;