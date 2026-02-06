import './App.css';
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import RootPage from "./features/common/pages/RootPage/RootPage.jsx";
import Dashboard from "./features/dashboard/pages/Dashboard/Dashboard.jsx";
import News from "./features/news/pages/News/News.jsx";
import Library from "./features/library/pages/Library/Library.jsx";
import Courses from "./features/courses/pages/Courses/Courses.jsx";
import Contact from "./features/contact/pages/Contact/Contact.jsx";
import ErrorPage from "./features/common/components/Error/page/ErrorPage/ErrorPage.jsx";
import LibrarySingle from "./features/library/pages/LibrarySingle/LibrarySingle.jsx";
import Cart from "./features/cart/pages/Cart/Cart.jsx";
import CartDetails from "./features/cart/pages/CartDetails/CartDetails.jsx";
import LivePage from "./features/live/page/LivePage/LivePage.jsx";
import RatingPage from "./features/dashboard/pages/RatingPage/RatingPage.jsx";
import GamePage from "./features/dashboard/pages/GamePage/GamePage.jsx";

const router = createHashRouter([
    {
        path: '/', element: <RootPage/>, children: [
            {index: true, element: <Dashboard/>},
            {path: '/rating', element: <RatingPage/>},
            {path: '/game', element: <GamePage/>},
            {path: '/news', element: <News/>},
            {path: '/library', element: <Library/>},
            {path: '/library/single', element: <LibrarySingle/>},
            {path: '/courses', element: <Courses/>},
            {path: '/contact', element: <Contact/>},
            {path: '/cart', element: <Cart/>},
            {path: '/cart/details', element: <CartDetails/>},
            {path: '/live', element: <LivePage/>},
            {path: '*', element: <ErrorPage/>}
        ]
    },
]);

export default function App() {return <RouterProvider router={router}/>}