import React, { useState } from "react"
import NavLink from "../Layout/NavLink"

interface SidebarProps {
  sections: { id: string, element: React.ReactNode}[]
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
  const [isExpanded] = useState(false)

  return (
    <div
      className={`absolute z-40 flex flex-col items-center w-16 h-full overflow-hidden text-gray-700 bg-[#00A0A0]
        transition-all duration-300 ease-in-out group hover:w-64 hover:overflow-visible`}
    >
      <ul className="mt-4 space-y-2">
        {sections.map((section) => (
          <li key={section.id} className="relative group">
            <NavLink
              to={section.id}
              className={`flex items-center px-4 py-2 z-50 bg-gray-200 rounded transition-colors duration-200
                ${isExpanded ? "justify-start" : "justify-center"} `}
            >
              <span className="mr-4">{section.icon}</span>
              { isExpanded ? '' : <span>{section.id} </span> }
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar

