import UzChessHeader from "../assets/icons/uzchess-logo-header.svg";
import UzChessFooter from "../assets/icons/uzchess-logo-footer.svg";
import Chevron from "../assets/icons/chevron-outline-gray.svg";
import Search from "../assets/icons/search-outline-white.svg";
import Basket from "../assets/icons/basket-outline-white.svg";
import Bell from "../assets/icons/bellcot-outline-white.svg";
import LogIn from "../assets/icons/log-in-icon-outline-white.svg";
import Instagram from "../assets/icons/instagram-icon-footer.svg";
import Telegram from "../assets/icons/telegram-icon-footer.svg";
import Youtube from "../assets/icons/youtube-icon-footer.svg";
import Twitter from "../assets/icons/twitter-icon-footer.svg";
import Facebook from "../assets/icons/facebook-icon-footer.svg";
import FooterIcon from "../assets/icons/footer-icon-white.svg";
import StarGray from "../assets/icons/filter-star-black.svg";
import StarYellow from "../assets/icons/filter-star-yellow.svg";
import ChevronWhite from "../assets/icons/chevron-outline-white.svg"
import ChevronGray from "../assets/icons/chevron-outline-gray.svg";
import LibraryImage2 from "../assets/images/library-image-2.png";
import LibraryImage3 from "../assets/images/library-image-3.png";
import LibraryImage4 from "../assets/images/library-image-4.png";
import LibraryImage5 from "../assets/images/library-image-5.png";
import CharityIcon from "../assets/icons/charity-icon-blue.svg";
import BannerCurs1 from "../assets/images/courses-little-image-1.png";
import BannerCurs2 from "../assets/images/courses-little-image-2.png";
import BannerCurs3 from "../assets/images/courses-little-image-3.png";
import BannerCurs4 from "../assets/images/courses-little-image-4.png";
import StarIcon from "../assets/icons/star-icon-little-yellow.svg";
import EyeIcon from "../assets/icons/eye-outline-gray.svg";
import ErrorBoard from "../assets/images/error-board.png";
import HomeWhite from "../assets/icons/home-outline-icon-white.svg";
import BreadcrumbHome from "../assets/icons/breadcrumb-home-icon-blue.svg";
import ChessIcon from "../assets/icons/chess-breadcrumb-icon.svg";
import SearchIcon from "../assets/icons/search-outline-gray.svg";
import Cancel from "../assets/icons/cancel-icon-white.svg";

export const header = [
    {
        id: 1,
        image: UzChessHeader,
        icon: Chevron,
        alt: 'svg icon',
        main: 'Asosiy',
        news: 'Yangiliklar',
        courses: 'Kurslar',
        library: 'Kutubxona',
        contact: 'Bog‘lanish',
        search: Search,
        basket: Basket,
        bell: Bell,
        logIn: LogIn,
        logInText: "Kirish",
        cancel:Cancel,
        searchIcon:SearchIcon,
        text:"Izlash"
    }
];


export const footer = [
    {
        id: 1,
        icon: UzChessFooter,
        text1: 'Biz haqimizda',
        text2: 'Cookie fayllari siyosati',
        text3: 'Foydalanish qoidalari',
        text4: 'Cookie fayllari siyosati',
        inst: Instagram,
        tel: Telegram,
        tube: Youtube,
        twit: Twitter,
        face: Facebook,
        title: '© UzChess. All rights reserved.',
        image: FooterIcon,
        name: 'Foydalanish qoidalari',
        alt: 'svg icon'
    }
];


export const filterInfo = [
    {
        id: 1,
        filTitle: "Filter",
        filText: "Tozalash",
        filLevel: "DARAJANI TANLANG:",
        filCategory: "KATEGORIYA:",
        filLang: "DARSLIK TILI:",
        filRating: "REYTING:",
        filIcon: ChevronWhite
    }
];


export const language = [
    {
        id: 1,
        item: 'O‘zbekcha'
    },
    {
        id: 2,
        item: 'Ўзбекча'
    },
    {
        id: 3,
        item: 'Русский'
    }
];


export const rating = [
    {
        id: 1,
        icon: StarGray,
        activeIcon: StarYellow
    }
];


export const level = [
    {
        id: 1,
        item: 'Barchasi'
    },
    {
        id: 2,
        item: 'Kurslar'
    },
    {
        id: 3,
        item: 'Kitoblar'
    }
];


export const bannerBooks = [
    {
        id: 1,
        title: 'Top kitoblar',
        text: 'Barchasi',
        icon: ChevronGray
    }
];


export const bannerBooksPart = [
    {
        id: 1,
        image: LibraryImage2,
        alt: 'pnj image',
        title: 'Shaxmatdagi qobiliyatliringizga qayta baxo bering',
        name: 'J.Silman'
    },
    {
        id: 2,
        image: LibraryImage3,
        alt: 'pnj image',
        title: 'Mening tizimim',
        name: 'A.Nimzowitsch'
    },
    {
        id: 3,
        image: LibraryImage4,
        alt: 'pnj image',
        title: 'Zurixdagi shaxmat musobaqasi',
        name: 'D.Bronstein'
    },
    {
        id: 4,
        image: LibraryImage5,
        alt: 'pnj image',
        title: 'Mening esdaqolarlik o‘yinlarim',
        name: 'B.Fischer'
    }
];


export const bannerCourses = [
    {
        id: 1,
        title: 'Top kurslar',
        text: 'Barchasi',
        icon: ChevronGray
    }
];


export const bannerCoursesPart = [
    {
        id: 1,
        image: BannerCurs1,
        alt: 'pnj image',
        title: 'Shaxmat donalari bilan tanishuv',
        starIcon: StarIcon,
        rating: 3.5,
        eyeIcon: EyeIcon,
        watch:5756
    },
    {
        id: 2,
        image: BannerCurs2,
        alt: 'pnj image',
        title: 'Shoxga hujum qilish',
        starIcon: StarIcon,
        rating: 3.5,
        eyeIcon: EyeIcon,
        watch:5756
    },
    {
        id: 3,
        image: BannerCurs3,
        alt: 'pnj image',
        title: 'Mot qilish',
        starIcon: StarIcon,
        rating: 3.5,
        eyeIcon: EyeIcon,
        watch:5756
    },
    {
        id: 4,
        image: BannerCurs4,
        alt: 'pnj image',
        title: 'Asosiy taktikalar',
        starIcon: StarIcon,
        rating: 3.5,
        eyeIcon: EyeIcon,
        watch:5756
    }
]


export const charityInfo = [
    {
        id: 1,
        icon: CharityIcon,
        title: "Loyiha rivojiga xissa",
        text: "Shaxmat rivojiga hissa qo‘shing"
    }
];


export const errorElementInfo = [
    {
        id:1,
        h1:404,
        title:"Sahifa topilmadi",
        text:"Uups... Siz qidirayotgan sahifani topa olmadik :(",
        btnIcon:HomeWhite,
        btnText:"Asosiyga qaytish",
        image:ErrorBoard
    }
];


export const errorBreadcrumb = [
    {
        id:1,
        icon: BreadcrumbHome,
        main: 'Asosiy',
        chess: ChessIcon,
        error: '404 Sahifa topilmadi',
        alt: 'svg icon'
    }
];