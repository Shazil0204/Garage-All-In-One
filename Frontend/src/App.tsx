// React Route Dependencies
import { Route, Routes } from "react-router-dom"

// ReactIcons
import { MdOutlineInventory } from "react-icons/md"
import { FaCar } from "react-icons/fa"
import { BsFillWrenchAdjustableCircleFill } from "react-icons/bs"
import { FaFileInvoiceDollar } from "react-icons/fa"
import { FaNoteSticky } from "react-icons/fa6"
// Layout
import Sidebar from "./Components/Layout/Sidebar"

// Screens
import Inventory from "./Screens/Routes/Inventory"
import Invoice from "./Screens/Routes/Invoice"
import Issue from "./Screens/Routes/Issue"
import Note from "./Screens/Routes/Note"
import Car from "./Screens/Routes/Car"
import Login from "./Screens/Login"
import NotFound from "./Screens/NotFound"

// This way i will be able to use it in both route and sidebar
const sections = [
  { id: "/", element: <Inventory />, icon: <MdOutlineInventory/> },
  { id: "Car", element: <Car />, icon: <FaCar/> },
  { id: "Issue", element: <Issue />, icon: <BsFillWrenchAdjustableCircleFill/> },
  { id: "Invoice", element: <Invoice />, icon: <FaFileInvoiceDollar/> },
  { id: "Notes", element: <Note />, icon: <FaNoteSticky/>  },
]

const App = () => {
  return (
    <div>
      {/* <Sidebar sections={sections} /> */}
      <Routes>
        <Route path="Login" element={<Login />} />
        {sections.map((section) => (
          <Route path={section.id} key={section.id} element={section.element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
