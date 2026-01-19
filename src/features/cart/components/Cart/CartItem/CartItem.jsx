import Var from "./CartItem.module.css";
import {useState} from "react";

export default function CartItem({info}) {
    const [count, setCount] = useState(0)

    function formatPrice(price) {
        return new Intl.NumberFormat("uz", {minimumFractionDigits: 2})
            .format(price).replaceAll(',', '.')
    }

    const increment = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <div className={Var.mainContainer}>
                <section className={Var.imageSection}>
                    <img className={Var.back} src={info.image} alt="pnj image"/>
                    <img className={Var.front} src={info.image} alt="pnj image"/>
                </section>
                <section className={Var.infoSection}>
                    <p>{info.title}</p>
                    <div className={Var.price}>
                        <span className={Var.newPrice}>{formatPrice(info.newPrice)} uzs</span>
                        <span className={Var.oldPrice}>{formatPrice(info.oldPrice)} uzs</span>
                    </div>
                </section>
                <section className={Var.redAndRep}>
                    <button className={`${Var.minus} ${count === 0 ? Var.dec : ""}`} onClick={decrement}>
                        <img src={info.minus} alt="svg icon"/>
                    </button>
                    <button className={Var.count}>{count}</button>
                    <button className={`${Var.plus} ${count === 10 ? Var.inc : ""}`} onClick={increment}>
                        <img src={info.plus} alt="svg icon"/>
                    </button>
                </section>
                <button className={Var.cancel}>
                    <img src={info.cancel} alt="svg icon"/>
                </button>
            </div>
        </>
    )
}