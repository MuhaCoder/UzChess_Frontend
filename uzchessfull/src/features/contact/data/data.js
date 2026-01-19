import BreadcrumbHome from "../../../assets/icons/breadcrumb-home-icon-blue.svg";
import BreadcrumbIcon from "../../../assets/icons/breadcrumb-icon-gray.svg";
import MarkIcon from "../../../assets/icons/mark-icon-green.svg";
import MapImage from "../../../assets/images/contact-map-image.png";
import MapBtnIcon from "../../../assets/icons/contact-map-button-icon.svg";
import MapRedIcon from "../../../assets/icons/map-red-icon-blue.svg";
import MapMinusIcon from "../../../assets/icons/map-minus-icon-blue.svg";
import MapTargetIcon from "../../../assets/icons/map-target-icon-blue.svg";
import BannerImage1 from "../../../assets/images/banner-image-1.png";
import BannerImage2 from "../../../assets/images/banner-image-2.png";
import Calendar from "../../../assets/icons/contact-calendar-icon-blue.svg";
import Email from "../../../assets/icons/contact-gmail-icon-blue.svg";
import Phone from "../../../assets/icons/contact-phone-icon-blue.svg";
import Train from "../../../assets/icons/contact-train-outline-icon-blue.svg";
import CheckMark from "../../../assets/icons/checkmark-circle-sharp-green.svg";
import CancelWhite from "../../../assets/icons/cancel-icon-white.svg";
import CancelGray from "../../../assets/icons/cancel-icon-gray.svg";

export const contactBreadcrumb = [
    {
        id: 1,
        icon: BreadcrumbHome,
        main: 'Asosiy',
        chess: BreadcrumbIcon,
        contact: 'Bog‘lanish',
        alt: 'svg icon'
    }
];


export const contactInfo = [
    {
        id: 1,
        h1: "Bog‘lanish",
        nameText: "Siz bilan bog‘lanish",
        nameInput: "Ism familiyangizni kiriting",
        telText: "Telefon raqamingiz",
        telInput: 998,
        telPlaceholder: "__ ___ __ __",
        text: "Shikoyat",
        textInput: "Matnni yozing...",
        use: "Foydalanish",
        blueWord1: "shartlari",
        and: "va",
        blueWord2: "qoidalarini",
        agree: "qabul qilaman",
        mark: MarkIcon,
        btnText: "Yuborish",
        map: MapImage,
        mapBtnIcon: MapBtnIcon,
        mapBtnText: "Qanday borish?",
        mapRed: MapRedIcon,
        mapMinus: MapMinusIcon,
        mapTarget: MapTargetIcon,
        banner1: BannerImage1,
        banner2: BannerImage2
    }
];


export const contactComponent = [
    {
        id: 1,
        icon: Calendar,
        title: "Ish vaqti",
        text: "Dushanba-Juma 9:00-18:00"
    },
    {
        id: 2,
        icon: Email,
        title: "E-mail",
        text: "info@chessnation.uz"
    },
    {
        id: 3,
        icon: Phone,
        title: "Telefon",
        text: "+998 (71) 203 55 11"
    },
    {
        id: 4,
        icon: Train,
        title: "Yaqin metro",
        text: "Mingo‘rik"
    }
];


export const contactDialog = [
    {
        id:1,
        icon:CheckMark,
        cancelWhite:CancelWhite,
        cancelGray:CancelGray,
        title:"Muvaffaqiyatli yuborildi",
        text:"Shikoyatingiz muvoffaqiyatli yuborildi",
        btnText:"Kursni ko‘rish"
    }
];