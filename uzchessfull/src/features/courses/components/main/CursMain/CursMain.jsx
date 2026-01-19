import Var from "./CursMain.module.css";
import styled from "styled-components";
import {charityInfo, filterInfo} from "../../../../../data/data.js";
import {courses} from "../../../data/data.js";
import {useState} from "react";
import {useRef} from "react";
import {useEffect} from "react";
import Curs from "../part/Curs/Curs.jsx";
import Filter from "../../../../common/components/Filter/Main/Filter/Filter.jsx";
import Charity from "../../../../common/components/Banner/Charity/Charity.jsx";

function CursMain({info}) {
    const [query, setQuery] = useState("")
    const filter = courses.filter((info) => info.title.toLowerCase().includes(query.trim().toLowerCase()))
    const [act, setAct] = useState(false)
    const searchRef = useRef(null);

    useEffect(() => {
        function outClick(props) {
            if (searchRef.current && !searchRef.current.contains(props.target)) {
                setAct(false)
            }
        }

        document.addEventListener("mousedown", outClick);
        return () => document.removeEventListener("mousedown", outClick)
    }, [])

    return (
        <>
            <Main>
                <HeadAndFilter>
                    <Head>
                        <HeadIcon src={info.headIcon} alt="svg icon"/>
                        <HeadText>{info.headTitle}</HeadText>
                    </Head>
                    <div>
                        {filterInfo.map(info => <Filter key={info.id} info={info}/>)}
                    </div>
                </HeadAndFilter>
                <SearchAndCurs>
                    <div className={`${Var.searchContainer} ${act ? Var.searchActive : ""}`}
                         onClick={() => setAct(true)} ref={searchRef}>
                        <img src={info.inputIcon} alt={info.alt}/>
                        <input value={query} type="search" placeholder={info.placeholder}
                               onChange={(event) => setQuery(event.target.value)}/>
                    </div>
                    <div className={Var.bookContainer}>
                        {filter.length === 0 ? (
                            <div className={Var.nothing}>
                                <img src={info.nImage} alt="svg icon"/>
                                <NText>{info.nText}</NText>
                            </div>
                        ) : (filter.map(info => <Curs key={info.id} info={info}/>))}
                    </div>
                    {query.length === 0 ? <Btn>{info.btnText}</Btn> : null}
                </SearchAndCurs>
                <Banner>
                    <img src={info.banner} alt="pnj image"/>
                    <div>
                        {charityInfo.map(info => <Charity key={info.id} info={info}/>)}
                    </div>
                </Banner>
            </Main>
        </>
    )
}

export default CursMain

const NText = styled.p`
    font-family: poppins, sans-serif;
    font-weight: 700;
    font-size: 28px;
    color: #F7F9FA;
`;
const Main = styled.div`
    margin-top: 21px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
const HeadAndFilter = styled.div`
    display: flex;
    flex-direction: column;
`;
const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 12px;
    width: 326px;
    height: 100px;
    border-radius: 8px;
    border: 1px solid #232627;
    background-color: #1A1D1F;
    cursor: pointer;

    &:active {
        transform: scale(98%);
    }
`;
const HeadIcon = styled.img`
    filter: drop-shadow(0 0 30px #1C92E0);
`;
const HeadText = styled.h1`
    font-family: poppins, sans-serif;
    font-weight: 700;
    font-size: 32px;
    color: #F7F9FA;
`;
const SearchAndCurs = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    margin-left: 17px;
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
const Banner = styled.div`
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    width: 326px;
    height: 298px;
`;