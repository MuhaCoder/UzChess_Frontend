import {ratingPageBread, ratingPageMain} from "../../data/data.js";
import RatingPageBread from "../../components/breadcrumb/RatingPageBread/RatingPageBread.jsx";
import RatingPageMain from "../../components/main/RatingPageMain/RatingPageMain.jsx";


export default function RatingPage(){
    return(
        <>
            {ratingPageBread.map(info => <RatingPageBread key={info.id} info={info}/>)}
            {ratingPageMain.map(info => <RatingPageMain key={info.id} info={info}/>)}
        </>
    )
}