import {cartDetailsBreadcrumb, cartDetailsMainInfo} from "../../data/data.js";
import CartDetailsBreadcrumb from "../../components/Cart_Details/breadcrumb/CartDetailsBreadcrumb.jsx";
import CartDetailsMain from "../../components/Cart_Details/CartDetailsMain/CartDetailsMain.jsx";

export default function CartDetails(){
    return(
        <>
            {cartDetailsBreadcrumb.map(info => <CartDetailsBreadcrumb key={info.id} info={info}/>)},
            {cartDetailsMainInfo.map(info => <CartDetailsMain key={info.id} info={info}/>)}
        </>
    )
}