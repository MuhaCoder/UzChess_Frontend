import BreadcrumbHome from "../../../assets/icons/breadcrumb-home-icon-blue.svg";
import BreadcrumbIcon from "../../../assets/icons/breadcrumb-icon-gray.svg";
import CursHeadCap from "../../../assets/icons/courses-head-cap-logo.svg";
import SearchIcon from "../../../assets/icons/search-outline-gray.svg";
import Banner from "../../../assets/images/banner-image-1.png";
import BannerIcon from "../../../assets/icons/charity-icon-blue.svg";
import NothingImage from "../../../assets/images/nothing-image.svg";
import CoursesImage1 from "../../../assets/images/courses-image-1.png";
import RatingIcon from "../../../assets/icons/star-icon-little-yellow.svg";
import PiyodaIcon from "../../../assets/icons/chessgrain-outline-1.svg";
import StudentCapIcon from "../../../assets/icons/student-cap-outline.svg";
import GridIcon from "../../../assets/icons/grid-outline.svg";
import HeartIcon from "../../../assets/icons/heart-outline.svg";
import HeartIconGreen from "../../../assets/icons/heart-green.svg";
import CoursesImage2 from "../../../assets/images/courses-image-2.png";
import CoursesImage3 from "../../../assets/images/courses-image-3.png";
import FerzinIcon from "../../../assets/icons/chessgrain-outline-3.svg";
import CoursesImage4 from "../../../assets/images/courses-image-4.png";
import FilIcon from "../../../assets/icons/chessgrain-outline-2.svg";

export const cursBreadcrumb = [
    {
        id: 1,
        icon: BreadcrumbHome,
        main: 'Asosiy',
        chess: BreadcrumbIcon,
        courses: 'Kurslar',
        alt: 'svg icon'
    }
];



export const cursMain = [
    {
        id: 1,
        headIcon: CursHeadCap,
        headTitle: "Kurslar",
        inputIcon: SearchIcon,
        placeholder: "Izlash",
        btnText: "Ko‘proq",
        banner: Banner,
        bannerIcon: BannerIcon,
        bannerTitle: "Loyiha rivojiga xissa",
        bannerText: "Shaxmat rivojiga hissa qo‘shing",
        bannerBtn: "soon",
        nImage: NothingImage,
        nText: "Hech qanday ma’lumot topilmadi"
    }
];



export const courses = [
    {
        id: 1,
        cursImage: CoursesImage1,
        ratingIcon: RatingIcon,
        rating: 3.5,
        cursLang: "РУ",
        title: "Shaxmat donalari bilan tanishuv",
        master: "Robert Fisher",
        oldPrice: 205000,
        newPrice: 96000,
        free: "Bepul",
        levelIcon: PiyodaIcon,
        levelText: "Boshlang‘ich",
        sIcon: StudentCapIcon,
        sText: 5,
        directionIcon: GridIcon,
        directionText: "Strategiya",
        heart: HeartIcon,
        heartGreen: HeartIconGreen
    },
    {
        id: 2,
        cursImage: CoursesImage2,
        ratingIcon: RatingIcon,
        rating: 5.0,
        cursLang: "O'z",
        title: "Shoxga hujum qilish",
        master: "Andre Konfutsiy",
        oldPrice: 0,
        newPrice: 96000,
        free: "Bepul",
        levelIcon: PiyodaIcon,
        levelText: "Boshlang‘ich",
        sIcon: StudentCapIcon,
        sText: 8,
        directionIcon: GridIcon,
        directionText: "Hujum qilish",
        heart: HeartIcon,
        heartGreen: HeartIconGreen
    },
    {
        id: 3,
        cursImage: CoursesImage3,
        ratingIcon: RatingIcon,
        rating: 4.5,
        cursLang: "РУ",
        title: "Mot qilish",
        master: "David Harikon",
        oldPrice: 160000,
        newPrice: 107000,
        free: "Bepul",
        levelIcon: FerzinIcon,
        levelText: "Professional",
        sIcon: StudentCapIcon,
        sText: 20,
        directionIcon: GridIcon,
        directionText: "Himoyalanish",
        heart: HeartIcon,
        heartGreen: HeartIconGreen
    },
    {
        id: 4,
        cursImage: CoursesImage4,
        ratingIcon: RatingIcon,
        rating: 5.0,
        cursLang: "O'z",
        title: "Asosiy taktikalar",
        master: "Paul  Heckler",
        oldPrice: 0,
        newPrice: 0,
        free: "Bepul",
        levelIcon: FilIcon,
        levelText: "Havaskor",
        sIcon: StudentCapIcon,
        sText: 7,
        directionIcon: GridIcon,
        directionText: "Qoidalar",
        heart: HeartIcon,
        heartGreen: HeartIconGreen
    }
];