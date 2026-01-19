import BreadcrumbHome from "../../../assets/icons/breadcrumb-home-icon-blue.svg";
import BreadcrumbIcon from "../../../assets/icons/breadcrumb-icon-gray.svg";
import BookImage1 from "../../../assets/images/cart-book-image-3.png";
import BookImage2 from "../../../assets/images/cart-book-image-1.png";
import BookImage3 from"../../../assets/images/cart-book-image-2.png";
import Minus from "../../../assets/icons/cart-minus-icon.svg";
import Plus from "../../../assets/icons/cart-plus-icon.svg";
import Cash from "../../../assets/icons/cash-icon-white.svg";
import Banner from "../../../assets/images/banner-image-1.png";
import Cancel from "../../../assets/icons/cancel-icon-white.svg";
import Info from "../../../assets/icons/info-icon-white.svg";
import ChackMark from "../../../assets/icons/checkmark-green.svg";
import CopyIcon from "../../../assets/icons/copy-outline-icon-white.svg";
import CancelWhite from "../../../assets/icons/cancel-icon-white.svg";
import CancelGray from "../../../assets/icons/cancel-icon-gray.svg";

export const cartBreadcrumb = [
    {
        id:1,
        icon: BreadcrumbHome,
        main: 'Asosiy',
        chess: BreadcrumbIcon,
        cart: 'Savatcha',
        alt: 'svg icon'
    }
];


export const cartItem = [
    {
        id:1,
        image:BookImage1,
        title:"Bobbi Fisher shaxmatni o‘ynashni o‘rgataning va barchani",
        newPrice:155000,
        oldPrice:205000,
        minus:Minus,
        cancel:Cancel,
        plus:Plus
    },
    {
        id:2,
        image:BookImage2,
        title:"Shaxmatchilar klubi nishoni",
        newPrice:2000000,
        oldPrice:2500000,
        minus:Minus,
        cancel:Cancel,
        plus:Plus
    },
    {
        id:3,
        image:BookImage3,
        title:"“Shox”lar uchun shox donasi ko‘rinishidagi nishon",
        newPrice:525250,
        oldPrice:600000,
        minus:Minus,
        cancel:Cancel,
        plus:Plus
    },
];


export const cartTerminal = [
    {
        id:1,
        price:"To'lov narxi:",
        cash:1560000,
        discount:"Chegirma:",
        disCash:156000,
        coupon:"Kupon:",
        delivery:"Yetkazib berish",
        free:0,
        total:"Jami:",
        totalCash:1404000,
        labelText:"Kupon",
        inputText:"Kupondagi kodni kiriting",
        btnIcon:Cash,
        btnText:"Rasmiylashtirish",
        banner:Banner
    }
];


export const cartDetailsBreadcrumb = [
    {
        id:1,
        icon: BreadcrumbHome,
        main: 'Asosiy',
        chess: BreadcrumbIcon,
        cart: 'Savatcha',
        cartDetails:"Rasmiylashtirish",
        alt: 'svg icon'
    }
];


export const cartDetailsMainInfo = [
    {
        id:1,
        h1:"Ma’lumotlaringizni kiriting",
        input:"To‘liq ismingiz",
        inputText:"To‘liq ismingizni kiriting",
        telInput:"Telefon raqamingiz",
        telInputText:"__ ___ __ __",
        telInputLabel:998,
        emailInput:"Elektron pochta",
        emailInputText:"Misol: j.pulatov@uic.group",
        btnCancel:"Bekor qilish",
        btnAgree:"Buyurtma berish",
        total:"Jami:",
        totalCash:1404000,
        delivery:"Yetkazib berish:",
        deliveryCash:"Yetkazib berish narxi:",
        pay:"To‘lov narxi:",
        payCash:1560000,
        uzs:"UZS",
        free:"-",
        discount:"Chegirma:",
        discountCash:156000,
        cashPercent:10,
        coupon:"Kupon:",
        couponCode:"FR33PRDCT",
        payCashType:"To‘lov usuli:",
        infoIcon:Info,
        infoText:"Yetkazishda borishda yo‘l tufayli muammo tug‘ilatigan xolatlarda, qo‘shimcha xaq talab qilinishi mumkin."
    }
];


export const cartDialog = [
    {
        id:1,
        image:ChackMark,
        title:"Buyurtma rasmiylashtirildi",
        text:"Tez orada siz bilan aloqaga chiqishadi va keyingi qadamlar haqida ma‘lumot beriladi.",
        codeText:"Buyurtma raqami",
        code:24542312123,
        icon:CopyIcon,
        btnText:"Asosiyga qaytish",
        cancelWhite:CancelWhite,
        cancelGray:CancelGray
    }
];