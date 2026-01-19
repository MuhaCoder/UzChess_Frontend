import {FilterLevel} from "../../components/FilterLevel/FilterLevel.jsx";
import {rating} from "../../../../../../data/data.js";
import FilterRating from "../../components/FilterRating/FilterRating.jsx";
import styled from "styled-components";


export default function Filter({info}){
    return(
        <>
            <FilterContainer>
                <FilterText>
                    <p>{info.filTitle}</p>
                    <span>{info.filText}</span>
                </FilterText>
                <div style={{zIndex: "4", position: "relative"}}>
                    <SpanCover>{info.filLevel}</SpanCover>
                    <FilterLevel info={info}/>
                </div>
                <div style={{zIndex: "3", position: "relative"}}>
                    <SpanCover>{info.filCategory}</SpanCover>
                    <FilterLevel info={info}/>
                </div>
                <div style={{zIndex: "2", position: "relative"}}>
                    <SpanCover>{info.filLang}</SpanCover>
                    <FilterLevel info={info}/>
                </div>
                <div style={{zIndex: "1", position: "relative"}}>
                    <SpanCover>{info.filRating}</SpanCover>
                    {rating.map(item => <FilterRating key={item.id} item={item}/>)}
                </div>
            </FilterContainer>
        </>
    )
}



const FilterContainer = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    width: 334px;
    height: 520px;
    border-radius: 8px;
    border: 1px solid #1F272A;
    background-color: #1A1D1F;
    padding: 20px;
`;
const FilterText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    p {
        font-family: poppins, sans-serif;
        font-weight: 500;
        font-size: 18px;
        color: #FCFCFC;
    }

    span {
        font-family: poppins, sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #1C92E0;
        cursor: pointer;
    }
`;
const SpanCover = styled.span`
    font-family: poppins, sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: rgba(247, 249, 250, 0.6);
`;