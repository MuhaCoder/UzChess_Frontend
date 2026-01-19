import Var from "./RatingPageMain.module.css";
import {dashFilterInfo, ratingTable} from "../../../data/data.js";
import TableList from "./part/TableList/TableList.jsx";
import Filter from "../../filter/Filter.jsx";

export default function RatingPageMain({info}) {
    return (
        <>
            <main className={Var.main}>
                <section className={Var.headAndFilter}>
                    <div className={Var.head}>
                        <img src={info.headIcon} alt="svg icon"/>
                        <h1>{info.h1Text}</h1>
                    </div>
                    <div>
                        {dashFilterInfo.map(info => <Filter key={info.id} info={info}/>)}
                    </div>
                </section>
                <section className={Var.tableSection}>
                    <div className={Var.titleContainer}>
                        <span>{info.tableN}</span>
                        <span style={{marginLeft: '46px'}}>{info.tableName}</span>
                        <div style={{marginLeft: '373px'}} className={Var.iconCover}>
                            <span>{info.tableType}</span>
                            <img src={info.tableIcon} alt="svg icon"/>
                        </div>
                        <div style={{marginLeft: '90px'}} className={Var.iconCover}>
                            <span>{info.tableRap}</span>
                            <img src={info.tableIcon} alt="svg icon"/>
                        </div>
                        <div style={{marginLeft: '98px'}} className={Var.iconCover}>
                            <span>{info.tableBlitz}</span>
                            <img src={info.tableIcon} alt="svg icon"/>
                        </div>
                    </div>
                    <div>
                        {ratingTable.map(info => <TableList key={info.id} info={info}/>)}
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