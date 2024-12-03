// React imports
import React, { useState } from "react"

// ReactIcons
import { RxCross1 } from "react-icons/rx"

// Layout imports
import NavLink from "../Layout/NavLink"

interface SidebarProps {
  sections: { id: string, element: React.ReactNode, icon: React.ReactNode }[]
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const handleMouseEnter = () => setIsExpanded(true)
  const handleMouseLeave = () => setIsExpanded(false)

  return (
    <div
      className={`absolute z-40 flex flex-col justify-center items-center xl:w-16 w-2/12 h-full overflow-hidden bg-[#00A0A0]
        transition-all duration-300 ease-in-out ${isExpanded ? "hover:~w-64/72" : "xl:w-16 md:w-16" }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={`${isExpanded ? "absolute" : "hidden" } top-0 left-0 mt-4 ml-4 py-4 px-4 bg-white rounded`} onClick={ () => setIsExpanded(false) }> <RxCross1 /> </button>

      <ul className="mb-24 space-y-6">
        {sections.map((section) => (
          <li key={section.id} className="relative">
            <NavLink
              to={section.id}
              className={`flex items-center z-50 hover:bg-gray-300 hover:bg-opacity-20 hover:text-opacity-100 rounded transition-colors duration-200
                ${isExpanded ? "justify-start py-4 px-16" : "justify-center py-4 px-4"}`}
            >
              {isExpanded ? (
                <>
                  <span className="mr-4">{section.icon}</span>
                  <span>{section.id === "/" ? "Inventory" : section.id}</span>
                </>
              ) : (
                <span>{section.icon}</span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar

