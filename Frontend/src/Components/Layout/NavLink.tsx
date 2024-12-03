import { NavLink as Links } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";

interface NavLinkProps {
  sections: {
    id: string;
    title: string;
    icon: React.ReactNode;
    element: JSX.Element;
  }[];
}

const NavLink: React.FC<NavLinkProps> = ({ sections }) => {
  const location = useLocation();

  return (
    <div className="flex justify-between w-full text-white">
      <span className="flex gap-2">
        {sections.map((section) => (
          <Links
            to={section.id}
            key={section.id}
            className={`flex gap-2 w-12 lg:w-24 justify-center text-white p-2 lg:hover:scale-105 lg:hover:bg-primary duration-300 rounded-md ${
              location.pathname === section.id ? "bg-primary shadow-xl" : ""
            }`}
          >
            <span className="mt-1">{section.icon}</span>
            <span className="hidden lg:block">{section.title}</span>
          </Links>
        ))}
      </span>
      <Links
        to="Profile"
        className={`flex gap-2 w-12 lg:w-24 justify-center text-white p-2 lg:hover:scale-105 lg:hover:bg-primary duration-300 rounded-md ${
          location.pathname === "/Profile" ? "bg-primary" : ""
        }`}
      >
        <div className="text-white flex gap-2">
          <FaUser className="mt-1"></FaUser>
          <span className="hidden lg:block">User</span>
        </div>
      </Links>
    </div>
  );
};

export default NavLink;
