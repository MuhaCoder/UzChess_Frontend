import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import {header, footer} from "../../../../data/data.js";
import Var from "./RootPage.module.css";

export default function RootPage() {
    return (
        <div className={Var.rootContainer}>
            {header.map(info => <Header key={info.id} info={info}/>)}
            <Outlet/>
            {footer.map(info => <Footer key={info.id} info={info}/>)}
        </div>
    )
}