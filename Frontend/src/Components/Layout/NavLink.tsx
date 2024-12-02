import React from "react"
import { NavLink as RouterNavLink } from "react-router-dom"

interface NavLinkProps {
  to: string
  children: React.ReactNode 
  className?: string
  activeClassName?: string 
}

const NavLink: React.FC<NavLinkProps> = ({
  to,
  children,
  className = "",
  activeClassName = "text-blue-500 font-bold",
}) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `${className} ${isActive ? activeClassName : ""}`.trim()
      }
    >
      {children}
    </RouterNavLink>
  )
}

export default NavLink
