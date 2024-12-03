import React from "react";
import NavLink from "./NavLink"; // Your NavLink component

interface SidebarProps {
  sections: {
    id: string;
    title: string;
    icon: React.ReactNode;
    element: JSX.Element;
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
  return (
    <div className="w-full p-2 bg-secondary shadow-2xl flex gap-2">
      <NavLink sections={sections} />
    </div>
  );
};

export default Sidebar;
