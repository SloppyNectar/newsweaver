import { HomeIcon, NewspaperIcon, UserIcon, SearchIcon } from "lucide-react";
import Home from "./pages/Home";
import NewsFeed from "./pages/NewsFeed";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Home />,
  },
  {
    title: "News Feed",
    to: "/news-feed",
    icon: <NewspaperIcon className="h-4 w-4" />,
    page: <NewsFeed />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <UserIcon className="h-4 w-4" />,
    page: <Profile />,
  },
  {
    title: "Search",
    to: "/search",
    icon: <SearchIcon className="h-4 w-4" />,
    page: <Search />,
  },
  {
    title: "Login",
    to: "/login",
    page: <Login />,
  },
  {
    title: "Sign Up",
    to: "/signup",
    page: <SignUp />,
  },
];
