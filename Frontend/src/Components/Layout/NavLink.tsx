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
  className = "~px-24/20",
  activeClassName = "text-white bg-primary font-bold text-md hover:!bg-primary hover:!bg-opacity-100",
}) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `${className} ${isActive ? activeClassName : "font-bold text-md text-white"}`
      }
    >
      {children}
    </RouterNavLink>
  )
}

export default NavLink
