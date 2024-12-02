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
  { id: "Login", element: <Login /> },
  { id: "/", element: <Inventory /> },
  { id: "Car", element: <Car /> },
  { id: "Issue", element: <Issue /> },
  { id: "Invoice", element: <Invoice /> },
  { id: "Notes", element: <Note /> },
  { id: "*", element: <NotFound /> },
];

const App = () => {
  return (
    <div>
      <Sidebar sections={sections} />
      <Routes>
        {sections.map((section) => (
          <Route path={section.id} element={section.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
