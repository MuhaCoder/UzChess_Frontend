import Var from "./GamePageMain.module.css";
import {gameList, gamePageFilter} from "../../../data/data.js";
import Filter from "../../filter/Filter.jsx";
import MatchList from "./part/MatchList/MatchList.jsx";

export default function GamePageMain({info}){
    return(
        <>
            <main className={Var.main}>
                <section className={Var.headAndFil}>
                    <div className={Var.head}>
                        <img src={info.headIcon} alt="svg icon"/>
                        <h1>{info.h1Text}</h1>
                    </div>
                    <div>
                        {gamePageFilter.map(info => <Filter key={info.id} info={info}/>)}
                    </div>
                </section>
                <section className={Var.gameTable}>
                    <div className={Var.tableTitle}>
                        <div className={Var.tableNumber}>
                            <span>{info.tableNumber}</span>
                        </div>
                        <div className={Var.tableName}>
                            <span>{info.tableMatch}</span>
                        </div>
                        <div className={Var.tableRating}>
                            <span>{info.tableRating}</span>
                        </div>
                        <div className={Var.tableResult}>
                            <span>{info.tableResult}</span>
                        </div>
                        <div className={Var.tableGameType}>
                            <span>{info.tableGameType}</span>
                            <img src={info.tableIcon} alt="svg icon"/>
                        </div>
                        <div className={Var.tableGameHod}>
                            <span>{info.tableGameHod}</span>
                            <img src={info.tableIcon} alt="svg icon"/>
                        </div>
                        <div className={Var.tableGameDate}>
                            <span>{info.tableGameDate}</span>
                            <img src={info.tableIcon} alt="svg icon"/>
                        </div>
                    </div>
                    <div>
                        {gameList.map(info => <MatchList key={info.id} info={info}/>)}
                    </div>
                    <div className={Var.scroll}>
                        <div className={Var.scrollMain}>
                            <p>{info.show}</p>
                            <div className={Var.arrowDown}>
                                <div>10</div>
                                <img src={info.chevron} alt="svg icon"/>
                            </div>
                        </div>
                        <div className={Var.scrollContainer}>
                            <div className={Var.arrowLeft}><img src={info.chevron} alt="svg icon"/></div>
                            <div className={Var.blue}>1</div>
                            <div className={Var.numberContainer}>
                                <span>2</span>
                                <span>...</span>
                                <span>34</span>
                                <span>35</span>
                            </div>
                            <div className={Var.arrowRight}><img src={info.chevron} alt="svg icon"/></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}