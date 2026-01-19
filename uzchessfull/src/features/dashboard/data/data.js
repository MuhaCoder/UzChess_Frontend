import Chevron from "../../../assets/icons/chevron-outline-gray.svg";
import DayImage from "../../../assets/images/day-image.png";
import LikeIcon from "../../../assets/icons/like-icon-white.svg";
import BattleIcon from "../../../assets/icons/battle-icon-blue.svg";
import DisLikeIcon from "../../../assets/icons/dislike-icon-red.svg";
import CursIcon from "../../../assets/icons/courses-head-cap-logo.svg";
import LibraryIcon from "../../../assets/icons/library-head-logo.svg";
import LiveImage from "../../../assets/images/banner-live-game-image.png";
import Banner from "../../../assets/images/banner-image-1.png";
import BannerIcon from "../../../assets/icons/charity-icon-blue.svg";
import Crown from "../../../assets/icons/crown-icon-yellow.svg";
import ArrowUp from "../../../assets/icons/arrow-up-green.svg";
import ArrowDown from "../../../assets/icons/arrow-down-red.svg";
import ArrowRight from "../../../assets/icons/arrow-right-blue.svg";
import ArrowMinus from "../../../assets/icons/arrow-minus-icon.svg";
import CursCapBig from "../../../assets/images/curs-student-cap-big.svg";
import LibraryBig from "../../../assets/images/library-head-big.svg";
import Win from "../../../assets/icons/trophy-icon-yellow.svg";
import Lost from "../../../assets/icons/trophy-icon-grey.svg";
import Rabbit from "../../../assets/icons/running-rabbit-red.svg";
import Rocket from "../../../assets/icons/rocket-icon-green.svg";
import Lighting from "../../../assets/icons/lighting-icon-yellow.svg";
import NewsImage1 from "../../../assets/images/dash-news-image-1.png";
import NewsImage2 from "../../../assets/images/dash-news-image-2.png";
import NewsImage3 from "../../../assets/images/dash-news-image-3.png";
import NewsImage4 from "../../../assets/images/dash-news-image-4.png";
import Home from "../../../assets/icons/breadcrumb-home-icon-blue.svg";
import Chess from "../../../assets/icons/breadcrumb-icon-gray.svg";
import Head from "../../../assets/icons/rating-head-icon-blue.svg";
import UpDown from "../../../assets/icons/down-and-up-icon-white.svg";
import Up from "../../../assets/icons/arrow-up-icon-white.svg";
import CrownIcon from "../../../assets/icons/crown-icon-white.svg";
import Magnus from "../../../assets/icons/magnus-icon.svg";
import Ding from "../../../assets/icons/ding-icon.svg";
import Ian from "../../../assets/icons/ian-icon.svg";
import Alireza from "../../../assets/icons/alireza-icon.svg";
import Flag1 from "../../../assets/icons/flag-1.svg";
import Flag2 from "../../../assets/icons/flag-2.svg";
import Flag3 from "../../../assets/icons/flag-3.svg";
import Flag4 from "../../../assets/icons/flag-4.svg";
import ChevronWhite from "../../../assets/icons/chevron-outline-white.svg";
import Minus from "../../../assets/icons/minus.svg";
import HeadIcon from "../../../assets/icons/game-head-icon-blue.svg";
import Flag01 from "../../../assets/icons/game-page-flag-1.svg";
import Flag02 from "../../../assets/icons/game-page-flag-2.svg";
import Flag03 from "../../../assets/icons/game-page-flag-3.svg";
import Flag04 from "../../../assets/icons/game-page-flag-4.svg";
import Flag05 from "../../../assets/icons/game-page-flag-5.svg";
import Flag06 from "../../../assets/icons/game-page-flag-6.svg";
import Flag07 from "../../../assets/icons/game-page-flag-7.svg";
import Flag08 from "../../../assets/icons/game-page-flag-8.svg";
import FooterLogo from "../../../assets/icons/uzchess-logo-footer.svg";
import AuthLogo from "../../../assets/images/auth-logo-image.png";
import AuthImage from "../../../assets/images/auth-image.png";
import CancelGray from "../../../assets/icons/cancel-icon-gray.svg";
import CancelWhite from "../../../assets/icons/cancel-icon-white.svg";

export const dashDialog = [
    {
        id:1,
        logo:FooterLogo,
        icon:AuthLogo,
        image:AuthImage,
        title:"UzChess platformasidan to‘liq foydalanish uchun tizimga kiring",
        text:"Platformaning barcha imkoniyatlaridan foydalanish uchun tizimga kirishingiz kerak",
        btnText1:"Kirish",
        btnText2:"Ro‘yxatdan o‘tish",
        cancelGray:CancelGray,
        cancelWhite:CancelWhite
    }
];


export const gamePageBread = [
    {
        id: 1,
        icon: Home,
        main: 'Asosiy',
        chess: Chess,
        game: 'Yakunlangan o‘yinlar',
        alt: 'svg icon',
    }
];


export const gamePageFilter = [
    {
        id: 1,
        filTitle: "Filter",
        filText: "Tozalash",
        text1: "MAMLAKATNI TANLANG:",
        text2: "YOSH:",
        filIcon: ChevronWhite,
    }
];


export const gamePageMain = [
    {
        id: 1,
        headIcon: HeadIcon,
        h1Text: "O'yinlar",
        tableNumber: "№",
        tableMatch: "O'YINCHILAR VA NATIJA",
        tableRating: "REYTING",
        tableResult: "NATIJA",
        tableGameType: "O'YIN TURI",
        tableGameHod: "YURISHLAR",
        tableGameDate: "O'YIN SANASI",
        tableIcon: UpDown,
        show: "Показать",
        chevron: ChevronWhite,
    }
];


export const gameList = [
    {
        id: 1,
        number: 1,
        win: Win,
        lost: Lost,
        drow: false,
        player1: "Jasurbek Pulatov",
        player2: "Nikaru Hakamura",
        flag1: Flag01,
        flag2: Flag02,
        points1: 2896,
        points2: 2291,
        result1: 2,
        result2: 0,
        typeIcon: Rabbit,
        gameType: "Rapid",
        gameHod: 56,
        dataDay: 23,
        dataMonth: "Yanvar",
        dataYear: 2022
    },
    {
        id: 2,
        number: 2,
        win: Win,
        lost: Lost,
        drow: false,
        player1: "Abdusattorov Nodirbek",
        player2: "Magnus Karlsen",
        flag1: Flag01,
        flag2: Flag03,
        points1: 3581,
        points2: 3405,
        result1: 2,
        result2: 0,
        typeIcon: Lighting,
        gameType: "Blitz",
        gameHod: 15,
        dataDay: 22,
        dataMonth: "Yanvar",
        dataYear: 2022
    },
    {
        id: 3,
        number: 3,
        win: Win,
        lost: Lost,
        drow: false,
        player1: "Aronian Levon",
        player2: "Sindarov Javokhir",
        flag1: Flag04,
        flag2: Flag01,
        points1: 3581,
        points2: 3405,
        result1: 1,
        result2: 2,
        typeIcon: Rocket,
        gameType: "Bullet",
        gameHod: 25,
        dataDay: 21,
        dataMonth: "Yanvar",
        dataYear: 2022
    },
    {
        id: 4,
        number: 4,
        win: Win,
        lost: Lost,
        drow: true,
        player1: "Yakubboev Nodirbek",
        player2: "Rapport Richard",
        flag1: Flag01,
        flag2: Flag05,
        points1: 4256,
        points2: 1250,
        result1: 1,
        result2: 1,
        typeIcon: Rocket,
        gameType: "Bullet",
        gameHod: 15,
        dataDay: 20,
        dataMonth: "Yanvar",
        dataYear: 2022
    },
    {
        id: 5,
        number: 5,
        win: Win,
        lost: Lost,
        drow: false,
        player1: "Jasurbek Pulatov",
        player2: "Nikaru Hakamura",
        flag1: Flag01,
        flag2: Flag02,
        points1: 2896,
        points2: 2291,
        result1: 2,
        result2: 0,
        typeIcon: Rabbit,
        gameType: "Rapid",
        gameHod: 56,
        dataDay: 19,
        dataMonth: "Yanvar",
        dataYear: 2022
    },
    {
        id: 6,
        number: 6,
        win: Win,
        lost: Lost,
        drow: true,
        player1: "Vanderreyx Shrilanka",
        player2: "Hakuna Matata",
        flag1: Flag06,
        flag2: Flag07,
        points1: 4256,
        points2: 1250,
        result1: 1,
        result2: 1,
        typeIcon: Lighting,
        gameType: "Blitz",
        gameHod: 15,
        dataDay: 18,
        dataMonth: "Yanvar",
        dataYear: 2022
    },
    {
        id: 7,
        number: 7,
        win: Win,
        lost: Lost,
        drow: false,
        player1: "Manor Subkrekor",
        player2: "Matatabi Farizaku",
        flag1: Flag06,
        flag2: Flag08,
        points1: 919,
        points2: 1358,
        result1: 1,
        result2: 1,
        typeIcon: Lighting,
        gameType: "Blitz",
        gameHod: 42,
        dataDay: 17,
        dataMonth: "Yanvar",
        dataYear: 2022
    },
    {
        id: 8,
        number: 8,
        win: Win,
        lost: Lost,
        drow: false,
        player1: "Abdusattorov Nodirbek",
        player2: "Magnus Karlsen",
        flag1: Flag01,
        flag2: Flag02,
        points1: 3581,
        points2: 3405,
        result1: 2,
        result2: 0,
        typeIcon: Lighting,
        gameType: "Blitz",
        gameHod: 15,
        dataDay: 22,
        dataMonth: "Yanvar",
        dataYear: 2022
    },
    {
        id: 9,
        number: 9,
        win: Win,
        lost: Lost,
        drow: false,
        player1: "Manor Subkrekor",
        player2: "Matatabi Farizaku",
        flag1: Flag06,
        flag2: Flag08,
        points1: 919,
        points2: 1358,
        result1: 1,
        result2: 1,
        typeIcon: Lighting,
        gameType: "Blitz",
        gameHod: 42,
        dataDay: 17,
        dataMonth: "Yanvar",
        dataYear: 2022
    },
    {
        id: 10,
        number: 10,
        win: Win,
        lost: Lost,
        drow: false,
        player1: "Manor Subkrekor",
        player2: "Matatabi Farizaku",
        flag1: Flag06,
        flag2: Flag08,
        points1: 919,
        points2: 1358,
        result1: 1,
        result2: 1,
        typeIcon: Lighting,
        gameType: "Blitz",
        gameHod: 42,
        dataDay: 17,
        dataMonth: "Yanvar",
        dataYear: 2022
    },
];


export const ratingPageBread = [
    {
        id: 1,
        icon: Home,
        main: 'Asosiy',
        chess: Chess,
        rating: 'Reyting',
        alt: 'svg icon',
    }
];


export const ratingPageMain = [
    {
        id: 1,
        headIcon: Head,
        h1Text: "Reyting",
        tableN: "№",
        tableName: "ISM FAMILIYA",
        tableType: "KLASSIKA",
        tableRap: "RAPID",
        tableBlitz: "BLITZ",
        tableIcon: UpDown,
        show: "Показать",
        chevron: ChevronWhite,
    }
];


export const ratingTable = [
    {
        id: 1,
        number: 1,
        upIcon: Up,
        upPoints: 3,
        firstIcon: CrownIcon,
        playerIcon: Magnus,
        name: "Magnus Carlsen",
        flagIcon: Flag1,
        points1: 2859,
        plus: 102,
        points2: 2861,
        points3: 2830
    },
    {
        id: 2,
        number: 2,
        upIcon: Minus,
        upPoints: 3,
        firstIcon: CrownIcon,
        playerIcon: Ding,
        name: "Ding Liren",
        flagIcon: Flag2,
        points1: 2811,
        plus: 0,
        points2: 2829,
        points3: 2788
    },
    {
        id: 3,
        number: 3,
        upIcon: Minus,
        upPoints: 3,
        firstIcon: CrownIcon,
        playerIcon: Ian,
        name: "Ian Nepomniachtchi",
        flagIcon: Flag3,
        points1: 2793,
        plus: 1,
        points2: 2766,
        points3: 2781
    },
    {
        id: 4,
        number: 4,
        upIcon: Minus,
        upPoints: 3,
        firstIcon: CrownIcon,
        playerIcon: Alireza,
        name: "Alireza Firouzja",
        flagIcon: Flag4,
        points1: 2811,
        plus: 0,
        points2: 2829,
        points3: 2788
    },
    {
        id: 5,
        number: 5,
        upIcon: Minus,
        upPoints: 3,
        firstIcon: CrownIcon,
        playerIcon: Magnus,
        name: "Ian Nepomniachtchi",
        flagIcon: Flag3,
        points1: 2793,
        plus: 1,
        points2: 2766,
        points3: 2781
    },
    {
        id: 6,
        number: 6,
        upIcon: Minus,
        upPoints: 3,
        firstIcon: CrownIcon,
        playerIcon: Magnus,
        name: "Alireza Firouzja",
        flagIcon: Flag4,
        points1: 2811,
        plus: 0,
        points2: 2829,
        points3: 2788
    },
    {
        id: 7,
        number: 7,
        upIcon: Minus,
        upPoints: 3,
        firstIcon: CrownIcon,
        playerIcon: Magnus,
        name: "Ian Nepomniachtchi",
        flagIcon: Flag3,
        points1: 2793,
        plus: 1,
        points2: 2766,
        points3: 2781
    },
    {
        id: 8,
        number: 8,
        upIcon: Minus,
        upPoints: 3,
        firstIcon: CrownIcon,
        playerIcon: Magnus,
        name: "Alireza Firouzja",
        flagIcon: Flag4,
        points1: 2811,
        plus: 0,
        points2: 2829,
        points3: 2788
    },
    {
        id: 9,
        number: 9,
        upIcon: Minus,
        upPoints: 3,
        firstIcon: CrownIcon,
        playerIcon: Magnus,
        name: "Ian Nepomniachtchi",
        flagIcon: Flag3,
        points1: 2793,
        plus: 1,
        points2: 2766,
        points3: 2781
    },
    {
        id: 10,
        number: 10,
        upIcon: Minus,
        upPoints: 3,
        firstIcon: CrownIcon,
        playerIcon: Magnus,
        name: "Alireza Firouzja",
        flagIcon: Flag4,
        points1: 2811,
        plus: 0,
        points2: 2829,
        points3: 2788
    }
];


export const dashFilterInfo = [
    {
        id: 1,
        filTitle: "Filter",
        filText: "Tozalash",
        text1: "MAMLAKATNI TANLANG:",
        text2: "TOIFA:",
        filIcon: ChevronWhite,
    }
];


export const dashMainInfo = [
    {
        id: 1,
        dayGame: "Kun o‘yini",
        dayText: "Ko‘rish",
        chevron: Chevron,
        dayImage: DayImage,
        likeIcon: LikeIcon,
        gamerName1: "Abdusattorov Nodirbek",
        battleIcon: BattleIcon,
        gamerName2: "Magnus Carlsen",
        disLikeIcon: DisLikeIcon,
        ratingTitle: "Reyting",
        chevronText: "Barchasi",
        cursHeadIcon: CursIcon,
        cursHeadText: "Kurslar",
        cursCapBig: CursCapBig,
        libraryHeadIcon: LibraryIcon,
        libraryHeadText: "Kutubxona",
        libraryBig: LibraryBig,
        tableTitle: "Yakunlangan o‘yinlar",
        gamer: "O‘YINCHILAR",
        result: "NATIJA",
        gameType: "O'YIN TURI",
        hod: "YURISHLAR",
        gameData: "SANA",
        liveImage: LiveImage,
        liveImageText: "Ko‘rish",
        newsTitle: "Yangiliklar",
        newsBtnText: "Ko‘proq",
        banner: Banner,
        bannerIcon: BannerIcon,
        bannerTitle: "Loyiha rivojiga xissa",
        bannerText: "Shaxmat rivojiga hissa qo‘shing",
        bannerBtn: "soon",
        topCursTitle: "Top kurslar",
        topBooksTitle: "Top kitoblar"
    }
];


export const dashRatingTable = [
    {
        id: 1,
        titleIcon: Crown,
        titleNumber: 0,
        title: "Magnus Carlsen",
        points: 2861,
        arrowUp: ArrowUp,
        arrowDown: 0,
        arrowMinus: ArrowMinus,
        arrowNumber: 12,
        plusPoints: 102
    },
    {
        id: 2,
        titleIcon: 0,
        titleNumber: 2,
        title: "Nikaru Hakamura",
        points: 2850,
        arrowUp: 0,
        arrowDown: ArrowDown,
        arrowMinus: ArrowMinus,
        arrowNumber: 12,
        plusPoints: -11
    },
    {
        id: 3,
        titleIcon: 0,
        titleNumber: 3,
        title: "Abdusattorov Nodirbek",
        points: 2842,
        arrowUp: ArrowUp,
        arrowDown: 0,
        arrowMinus: ArrowMinus,
        arrowNumber: 27,
        plusPoints: 18
    },
    {
        id: 4,
        titleIcon: 0,
        titleNumber: 4,
        title: "Sindarov Javokhir",
        points: 2839,
        arrowUp: 0,
        arrowDown: 0,
        arrowMinus: ArrowMinus,
        arrowNumber: 0,
        plusPoints: 41
    },
    {
        id: 5,
        titleIcon: 0,
        titleNumber: 5,
        title: "Yakubboev Nodirbek",
        points: 2839,
        arrowUp: ArrowUp,
        arrowDown: 0,
        arrowMinus: ArrowMinus,
        arrowNumber: 5,
        plusPoints: 19
    }
];


export const match = [
    {
        id: 1,
        win: Win,
        lost: Lost,
        drow: false,
        player1: "Shohrukh Bakhtiyarov",
        player2: "Nikaru Hakamura",
        points1: 2861,
        points2: 2768,
        result1: 2,
        result2: 0,
        typeIcon: Rabbit,
        gameType: "Rapid",
        gameHod: 56,
        dataDay: 12,
        dataMonth: "Dekabr"
    },
    {
        id: 2,
        win: Win,
        lost: Lost,
        drow: false,
        player1: "Abdusattorov Nodirbek",
        player2: "Ding Liren",
        points1: 2604,
        points2: 2312,
        result1: 1,
        result2: 0,
        typeIcon: Rocket,
        gameType: "Bullet",
        gameHod: 20,
        dataDay: 21,
        dataMonth: "Noyabr"
    },
    {
        id: 3,
        win: Win,
        lost: Lost,
        drow: true,
        player1: "Aronian Levon",
        player2: "Sindarov Javokhir",
        points1: 2402,
        points2: 2641,
        result1: 0,
        result2: 2,
        typeIcon: Lighting,
        gameType: "Blitz",
        gameHod: 19,
        dataDay: 19,
        dataMonth: "Oktabr"
    },
    {
        id: 4,
        win: Win,
        lost: Lost,
        drow: false,
        player1: "Caruana Fabiano",
        player2: "Rapport Richard",
        points1: 2402,
        points2: 2641,
        result1: 1,
        result2: 1,
        typeIcon: Lighting,
        gameType: "Blitz",
        gameHod: 56,
        dataDay: 2,
        dataMonth: "Sentabr"
    },
    {
        id: 5,
        win: Win,
        lost: Lost,
        drow: false,
        player1: "Yakubboev Nodirbek",
        player2: "Gelfand Boris",
        points1: 2861,
        points2: 2768,
        result1: 4,
        result2: 1,
        typeIcon: Rocket,
        gameType: "Bullet",
        gameHod: 56,
        dataDay: 2,
        dataMonth: "Sentabr"
    }
];


export const dashNews = [
    {
        id: 1,
        image: NewsImage1,
        dataDay: 7,
        dataYears: 2022,
        dataMonth: "Sentabr",
        text: "Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi",
        pText: "O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reyting...",
        icon: ArrowRight
    },
    {
        id: 2,
        image: NewsImage2,
        dataDay: 7,
        dataYears: 2022,
        dataMonth: "Sentabr",
        text: "“Qo‘shnilarning buyuk jasorati”: Rossiyalik grossmeyster o‘zbek shaxmatining g‘alabas...",
        pText: "Rossiyalik grossmeyster va shaxmat bo‘yicha murabbiy Sergey Shipov O‘zbekiston terma jamoasining Hindistondagi shaxmat olimpiadasidagi...",
        icon: ArrowRight
    },
    {
        id: 3,
        image: NewsImage3,
        dataDay: 7,
        dataYears: 2022,
        dataMonth: "Sentabr",
        text: "Xalqaro shaxmat musobaqalari g‘oliblariga nima beriladi?",
        pText: "O‘zbekiston Prezidenti Shavkat Mirziyoyevning “Shaxmatni yanada ommalashtirish va rivojlantirishga doir qo‘shimcha chora-tadbirlar to‘g‘...",
        icon: ArrowRight
    },
    {
        id: 4,
        image: NewsImage4,
        dataDay: 7,
        dataYears: 2022,
        dataMonth: "Sentabr",
        text: "O‘zbekiston shaxmatchilari olimpiadada Armanistonlik raqiblarini mag‘lub etishdi",
        pText: "Ikki davlat jamoalari o‘rtasidagi bahs 3:1 hisobida O‘zbekiston foydasiga hal bo‘ldi. Shu tariqa, hech qachon mag‘lubiyatga uchramagan respub...",
        icon: ArrowRight
    },
];