import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  NewspaperIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "../src/pages/dashboard";
import Driver from "./pages/dashboard/driver";
import { Customer } from "./pages/dashboard/customer";
import {FeedbackTest} from "./pages/dashboard/feedbackTest"


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "account",
      //   path: "/account",
      //   element: <Tables />,
      // },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "customer",
        path: "/customer",
        element: <Customer />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "driver",
        path: "/driver",
        element: <Driver />,
      },
      // {
      //   icon: <NewspaperIcon {...icon} />,
      //   name: "feedback",
      //   path: "/feedback",
      //   element: <Feedback />,
      // },
      {
        icon: <NewspaperIcon {...icon} />,
        name: "feedback",
        path: "/feedback",
        element: <FeedbackTest />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
      // {
      //   icon: <InformationCircleIcon {...icon} />,
      //   name: "chatroom",
      //   path: "/chatroom",
      //   element: <ChatRoom />,
      // },
    ],
  },
  
];

export default routes;
