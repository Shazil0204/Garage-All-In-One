// React Route Dependencies
import { Route, Routes } from "react-router-dom";

// ReactIcons
import { MdOutlineInventory } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { BsFillWrenchAdjustableCircleFill } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
// Layout
import Sidebar from "./Components/Layout/Navbar";

// Screens
import Inventory from "./Screens/Routes/Inventory";
import Invoice from "./Screens/Routes/Invoice";
import Issue from "./Screens/Routes/Issue";
import Note from "./Screens/Routes/Note";
import Car from "./Screens/Routes/Car";
import Login from "./Screens/Login";
import NotFound from "./Screens/NotFound";
import Profile from "./Screens/Routes/Profile";
import { useLocation } from "react-router-dom";

// This way i will be able to use it in both route and sidebar
const sections = [
  {
    id: "/",
    title: "Home",
    element: <Inventory />,
    icon: <MdOutlineInventory />,
  },
  { id: "/car", title: "Car", element: <Car />, icon: <FaCar /> },
  {
    id: "/issue",
    title: "Issue",
    element: <Issue />,
    icon: <BsFillWrenchAdjustableCircleFill />,
  },
  {
    id: "/invoice",
    title: "Invoice",
    element: <Invoice />,
    icon: <FaFileInvoiceDollar />,
  },
  { id: "/notes", title: "Note", element: <Note />, icon: <FaNoteSticky /> },
];

const App = () => {
  const location = useLocation();
  return (
    <div>
      {
        location.pathname !== "/login" && (

          <Sidebar sections={sections} />
        )
      }
      <Routes>
        <Route path="Login" element={<Login />} />
        {sections.map((section) => (
          <Route path={section.id} key={section.id} element={section.element} />
        ))}
        <Route path="Profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
