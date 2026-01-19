import Home from "../../../assets/icons/breadcrumb-home-icon-blue.svg";
import Chess from "../../../assets/icons/breadcrumb-icon-gray.svg";
import H1Icon from '../../../assets/icons/courses-head-cap-logo.svg';
import SearchOpacity from "../../../assets/icons/search-outline-gray.svg";
import BobbyFisherBook from "../../../assets/images/library-image-1.png";
import JonatanDezBook from "../../../assets/images/library-image-2.png";
import AndreMiladzeBook from "../../../assets/images/library-image-3.png";
import DavidBronsteinBook from "../../../assets/images/library-image-4.png";
import MikhailLitvinBook from "../../../assets/images/library-image-5.png";
import RatingIcon from "../../../assets/icons/star-icon-little-yellow.svg";
import ChessGrain1 from "../../../assets/icons/chessgrain-outline-1.svg";
import GridIcon from "../../../assets/icons/grid-outline.svg";
import UserIcon from "../../../assets/icons/user-icon-outline.svg";
import ChessGrain2 from "../../../assets/icons/chessgrain-outline-2.svg";
import ChessGrain3 from "../../../assets/icons/chessgrain-outline-3.svg";
import Basket from "../../../assets/icons/book-basket-outline.svg";
import BasketActive from "../../../assets/icons/book-basket-outline-add.svg";
import Heart from "../../../assets/icons/heart-outline.svg";
import HeartGreen from "../../../assets/icons/heart-green.svg";
import NothingImage from "../../../assets/images/nothing-image.svg";
import Banner from "../../../assets/images/banner-image-1.png";
import BannerImage from "../../../assets/images/banner-image-2.png";
import MoneyIcon from "../../../assets/icons/cash-outline-blue.svg";
import ShareIcon from "../../../assets/icons/share-outline-icon.svg";
import BookIcon from "../../../assets/icons/book-circle-outline.svg";
import CalendarIcon from "../../../assets/icons/calendar-circle-outline.svg";

export const libraryBreadcrumb = [
    {
        id: 1,
        icon: Home,
        main: 'Asosiy',
        chess: Chess,
        library: 'Kutubxona',
        alt: 'svg icon'
    }
];


export const librarymainInfo = [
    {
        id: 1,
        h1Icon: H1Icon,
        h1: 'Kutubxona',
        icon: SearchOpacity,
        placeholder: 'Izlash',
        nImage: NothingImage,
        nText: "Hech qanday ma’lumot topilmadi",
        banner: Banner,
        bannerImage: BannerImage,
        btnText: "Ko‘proq"
    }
];


export const books = [
    {
        id: 1,
        bookImage: BobbyFisherBook,
        ratingIcon: RatingIcon,
        rating: 3.5,
        bookLang: "РУ",
        title: "Bobbi Fisher shaxmatni o‘ynashni o‘rganing",
        oldPrice: 205000,
        newPrice: 155000,
        free: "Bepul",
        levelIcon: ChessGrain1,
        levelText: "Boshlang‘ich",
        directionIcon: GridIcon,
        directionText: "Tarix",
        userIcon: UserIcon,
        userName: "Robert Fisher",
        basket: Basket,
        basketActive: BasketActive,
        basketText: "Savatchaga",
        heart: Heart,
        heartGreen: HeartGreen
    },
    {
        id: 2,
        bookImage: JonatanDezBook,
        ratingIcon: RatingIcon,
        rating: 3.5,
        bookLang: "O'z",
        title: "Bobbi Fisher shaxmatni o‘ynashni o‘rganing",
        oldPrice: 0,
        newPrice: 180000,
        free: "Bepul",
        levelIcon: ChessGrain2,
        levelText: "Havaskor",
        directionIcon: GridIcon,
        directionText: "Adabiyot",
        userIcon: UserIcon,
        userName: "Jonatan Dez",
        basket: Basket,
        basketActive: BasketActive,
        basketText: "Savatchaga",
        heart: Heart,
        heartGreen: HeartGreen
    },
    {
        id: 3,
        bookImage: AndreMiladzeBook,
        ratingIcon: RatingIcon,
        rating: 3.5,
        bookLang: "РУ",
        title: "Mening tizimim",
        oldPrice: 0,
        newPrice: 0,
        free: "Bepul",
        levelIcon: ChessGrain2,
        levelText: "Havaskor",
        directionIcon: GridIcon,
        directionText: "Matematika",
        userIcon: UserIcon,
        userName: "Andre Miladze",
        basket: Basket,
        basketActive: BasketActive,
        basketText: "Savatchaga",
        heart: Heart,
        heartGreen: HeartGreen
    },
    {
        id: 4,
        bookImage: DavidBronsteinBook,
        ratingIcon: RatingIcon,
        rating: 5.0,
        bookLang: "O'z",
        title: "Zurixdagi shaxmat musobaqasi",
        oldPrice: 0,
        newPrice: 120000,
        free: "Bepul",
        levelIcon: ChessGrain3,
        levelText: "Professional",
        directionIcon: GridIcon,
        directionText: "Tarix",
        userIcon: UserIcon,
        userName: "David Bronstein",
        basket: Basket,
        basketActive: BasketActive,
        basketText: "Savatchaga",
        heart: Heart,
        heartGreen: HeartGreen
    },
    {
        id: 5,
        bookImage: MikhailLitvinBook,
        ratingIcon: RatingIcon,
        rating: 4.5,
        bookLang: "РУ",
        title: "Mening esdaqolarlik o‘yinlarim",
        oldPrice: 209000,
        newPrice: 189000,
        free: "Bepul",
        levelIcon: ChessGrain1,
        levelText: "Boshlang‘ich",
        directionIcon: GridIcon,
        directionText: "Matematika",
        userIcon: UserIcon,
        userName: "Mikhail Litvin",
        basket: Basket,
        basketActive: BasketActive,
        basketText: "Savatchaga",
        heart: Heart,
        heartGreen: HeartGreen
    }

];


export const librarySingleBreadcrumb = [
    {
        id: 1,
        icon: Home,
        main: 'Asosiy',
        chess: Chess,
        library: 'Kutubxona',
        alt: 'svg icon',
        text:"Shaxmatdagi qobiliyatliringizga qayta baxo bering"
    }
];


export const librarySingleInfo = [
    {
        id:1,
        image:JonatanDezBook,
        title:"Shaxmatdagi qobiliyatlaringizga qayta baxo bering",
        cashIcon:MoneyIcon,
        newPrice:55000,
        oldPrice:160000,
        chess:ChessGrain1,
        level:"Daraja",
        levelText:"Boshlang'ich",
        userIcon:UserIcon,
        writer:"Muallif",
        writerText:"Jeremy Silmon",
        bookIcon:BookIcon,
        pageNumber:"Sahifa soni",
        number:231,
        calendar:CalendarIcon,
        date:"Chop etilgan sana",
        dateText:2002,
        basket:Basket,
        basketAdd:BasketActive,
        basketText:"Savatchaga",
        heart:Heart,
        heartAdd:HeartGreen,
        share:ShareIcon,
        banner:Banner,
        textTitle:"Kitob haqida",
        text:"Shaxmatni qanday qayta baholash kerak, uzoq vaqtdan beri zamonaviy klassika hisoblangan. Ushbu 4-nashr Silmanning nomutanosiblik haqidagi innovatsion kontseptsiyasini butunlay yangi darajaga olib chiqadi." +
            " 1400 dan 2100 gacha bo'lgan reyting oralig'idagi o'yinchilar va shaxmat bo'yicha tayyor o'quv dasturini qidirayotgan o'qituvchilar uchun mo'ljallangan muallif o'quvchini nomutanosiblik asoslari orqali olib boradigan," +
            " barcha nomutanosibliklarning har bir tafsiloti o'zlashtirilishini ta'minlaydigan aqlni kengaytiruvchi sayohatni baham ko'radi." +
            " va shaxmat o'yinchisini/sevuvchisini har doim xohlagan, lekin erisha olishiga ishonmagan narsasi bilan qoldiradi: usta darajasidagi pozitsion poydevor."
    }
]