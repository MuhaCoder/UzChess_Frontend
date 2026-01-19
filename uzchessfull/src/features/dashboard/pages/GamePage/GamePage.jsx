import {gamePageBread, gamePageMain} from "../../data/data.js";
import GamePageBread from "../../components/breadcrumb/GamePageBread/GamePageBread.jsx";
import GamePageMain from "../../components/main/GamePageMain/GamePageMain.jsx";


export default function GamePage(){
    return(
        <>
            {gamePageBread.map(info => <GamePageBread key={info.id} info={info}/>)}
            {gamePageMain.map(info => <GamePageMain key={info.id} info={info}/>)}
        </>
    )
}