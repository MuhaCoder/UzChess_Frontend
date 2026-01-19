import Var from "./CartTerminal.module.css";
import {cartItem} from "../../../data/data.js";
import CartItem from "../CartItem/CartItem.jsx";
import {Link} from "react-router-dom";

export default function CartTerminal({info}){
    function formatPrice(price) {
        return new Intl.NumberFormat("uz", {minimumFractionDigits: 2})
            .format(price).replaceAll(',', '.')
    }

    return(
        <main className={Var.main}>
            <div className={Var.itemContainer}>
                {cartItem.map(info => <CartItem key={info.id} info={info}/>)}
            </div>
            <div className={Var.mainContainer}>
                <div className={Var.container}>
                    <div className={Var.priceContainer}>
                        <div className={Var.price}>
                            <span>{info.price}</span>
                            <span>{formatPrice(info.cash)} UZS</span>
                        </div>
                        <div className={Var.price}>
                            <span>{info.discount}</span>
                            <span>{formatPrice(info.disCash)} UZS</span>
                        </div>
                        <div className={Var.price}>
                            <span>{info.coupon}</span>
                            <span>{info.free} UZS</span>
                        </div>
                        <div className={Var.price}>
                            <span>{info.delivery}</span>
                            <span>{info.free} UZS</span>
                        </div>
                    </div>
                    <div className={Var.total}>
                        <p>{info.total}</p>
                        <span>{formatPrice(info.totalCash)} UZS</span>
                    </div>
                    <div className={Var.inputContainer}>
                        <span>{info.labelText}</span>
                        <label>
                            <input type="text" placeholder={info.inputText}/>
                        </label>
                    </div>
                    <Link to='/cart/details'>
                        <button className={Var.btn}>
                            <img src={info.btnIcon} alt="svg icon"/>
                            {info.btnText}
                        </button>
                    </Link>
                </div>
                <img src={info.banner} alt="pnj image"/>
            </div>
        </main>
    )
}