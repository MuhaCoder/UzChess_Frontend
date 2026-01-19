import Var from "./DashMain.module.css"
import {dashDialog, dashNews, dashRatingTable, match} from "../../../data/data.js";
import DashRatingTable from "./part/DashRatingTable/DashRatingTable.jsx";
import MatchTable from "./part/MatchTable/MatchTable.jsx";
import DashNews from "./part/DashNews/DashNews.jsx";
import {Link} from "react-router-dom";
import {bannerBooks, bannerCourses, charityInfo} from "../../../../../data/data.js";
import Charity from "../../../../common/components/Banner/Charity/Charity.jsx";
import BannerCourses from "../../../../common/components/Banner/Courses/main/BannerCourses/BannerCourses.jsx";
import BannerBook from "../../../../common/components/Banner/Books/main/BannerBook/BannerBook.jsx";
import {useRef} from "react";
import DashDialog from "./dialog/DashDialog.jsx";

export default function DashMain({info}) {
    const dialogRef = useRef(null);
    const closeDialog = () => {
        dialogRef.current?.close();
    };

    return (
        <>
            <main className={Var.main}>
                <section className={Var.videoAndRating}>
                    <div className={Var.videoContainer}>
                        <div className={Var.videoTitle}>
                            <p>{info.dayGame}</p>
                            <Link to='/live'>
                                <div className={Var.chevron}>
                                    <span>{info.dayText}</span>
                                    <img src={info.chevron} alt="svg icon"/>
                                </div>
                            </Link>
                        </div>
                        <Link to='/live'>
                            <img src={info.dayImage} alt="pnj image"/>
                        </Link>
                        <div className={Var.battleLike}>
                            <div className={Var.gamerLike}>
                                <div className={Var.like}>
                                    <img src={info.likeIcon} alt="svg icon"/>
                                </div>
                                <p>{info.gamerName1}</p>
                            </div>
                            <img src={info.battleIcon} alt="svg icon"/>
                            <div className={Var.gamerDisLike}>
                                <p>{info.gamerName2}</p>
                                <div className={Var.disLike}>
                                    <img src={info.disLikeIcon} alt="svg icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Var.ratingContainer}>
                        <div className={Var.ratingTitle}>
                            <p>{info.ratingTitle}</p>
                            <Link to='/rating'>
                                <div className={Var.chevron}>
                                    <span>{info.chevronText}</span>
                                    <img src={info.chevron} alt="svg icon"/>
                                </div>
                            </Link>
                        </div>
                        <div>
                            {dashRatingTable.map(info => <DashRatingTable key={info.id} info={info}/>)}
                        </div>
                    </div>
                </section>
                <section className={Var.matchAndNews}>
                    <div className={Var.headContainer}>
                        <Link to="/courses" className={Var.head}>
                            <div className={Var.little}>
                                <img src={info.cursHeadIcon} alt="svg icon"/>
                                <span>{info.cursHeadText}</span>
                            </div>
                            <img className={Var.big} src={info.cursCapBig} alt="svg icon"/>
                        </Link>
                        <Link to="/library" className={Var.head}>
                            <div className={Var.little}>
                                <img src={info.libraryHeadIcon} alt="svg icon"/>
                                <span>{info.libraryHeadText}</span>
                            </div>
                            <img className={Var.big} src={info.libraryBig} alt="svg icon"/>
                        </Link>
                    </div>
                    <div className={Var.matchTable}>
                        <div className={Var.matchTitle}>
                            <p>{info.tableTitle}</p>
                            <Link to='/game'>
                                <div className={Var.chevron}>
                                    <span>{info.chevronText}</span>
                                    <img src={info.chevron} alt="svg icon"/>
                                </div>
                            </Link>
                        </div>
                        <div className={Var.tableNav}>
                            <span>{info.gamer}</span>
                            <span className={Var.gameResult}>{info.result}</span>
                            <span>{info.gameType}</span>
                            <span className={Var.gameHod}>{info.hod}</span>
                            <span>{info.gameData}</span>
                        </div>
                        {match.map(info => <MatchTable key={info.id} info={info}/>)}
                    </div>
                    <div className={Var.liveContainer}>
                        <img className={Var.mainImage} src={info.liveImage} alt="pnj image"/>
                        <div className={Var.liveCover}>
                            {dashDialog.map(info => <DashDialog
                                key={info.id} info={info} dialogRef={dialogRef} closeDialog={closeDialog}/>)}
                            <button className={Var.btn} onClick={() => dialogRef.current.showModal()}>{info.liveImageText}</button>
                        </div>
                    </div>
                    <div className={Var.newsSection}>
                        <div className={Var.newsTitle}>
                            <p>{info.newsTitle}</p>
                            <Link to="/news" className={Var.chevron}>
                                <span>{info.chevronText}</span>
                                <img src={info.chevron} alt="svg icon"/>
                            </Link>
                        </div>
                        {dashNews.map(info => <DashNews key={info.id} info={info}/>)}
                        <button className={Var.newsBtn}>{info.newsBtnText}</button>
                    </div>
                </section>
                <section className={Var.bannerSection}>
                    <div>
                        {charityInfo.map(info => <Charity key={info.id} info={info}/>)}
                    </div>
                    <img src={info.banner} alt="pnj image"/>
                    <div>
                        {bannerCourses.map(info => <BannerCourses key={info.id} info={info}/>)}
                    </div>
                    <div>
                        {bannerBooks.map(info => <BannerBook key={info.id} info={info}/>)}
                    </div>
                </section>
            </main>
        </>
    )
}