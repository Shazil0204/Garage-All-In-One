import React from "react";

interface SidebarProps {
  sections: { id: string; element: JSX.Element }[];
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
  return (
    <div>
      {sections.map((section) => (
        <div key={section.id}>{section.element}</div>
      ))}
    </div>
  );
};

export default Sidebar;
