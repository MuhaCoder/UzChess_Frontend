import {cartBreadcrumb, cartTerminal} from "../../data/data.js";
import CartBreadcrumb from "../../components/Cart/breadcrumb/CartBreadcrumb.jsx";
import CartTerminal from "../../components/Cart/CartTerminal/CartTerminal.jsx";

export default function Cart() {
    return (
        <>
            {cartBreadcrumb.map(info => <CartBreadcrumb key={info.id} info={info}/>)}
            {cartTerminal.map(info => <CartTerminal key={info.id} info={info}/>)}
        </>
    )
}