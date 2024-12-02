// React Route Dependencies
import { Route, Routes } from "react-router-dom";

// Layout
import Sidebar from "./Components/Layout/Sidebar";

// Screens
import Inventory from "./Screens/Routes/Inventory";
import Invoice from "./Screens/Routes/Invoice";
import Issue from "./Screens/Routes/Issue";
import Note from "./Screens/Routes/Note";
import Car from "./Screens/Routes/Car";
import Login from "./Screens/Login";
import NotFound from "./Screens/NotFound";

// This way i will be able to use it in both route and sidebar
const sections = [
  { id: "/", element: <Inventory /> },
  { id: "Car", element: <Car /> },
  { id: "Issue", element: <Issue /> },
  { id: "Invoice", element: <Invoice /> },
  { id: "Notes", element: <Note /> },
];

const App = () => {
  return (
    <div>
      <Sidebar sections={sections} />
      <Routes>
        <Route path="Login" element={<Login />} />
        {sections.map((section) => (
          <Route path={section.id} element={section.element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
