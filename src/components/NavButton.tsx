import React from "react"
import { Link } from "react-router-dom"
import { Button } from "./Button"

type NavButtonProps = {
  children: React.ReactNode
  icon: JSX.Element
  href: string
}

export const NavButton: React.FC<NavButtonProps> = ({ children, icon, href }) => {
  return (
    <Button className="flex justify-start text-xl" icon={icon}>
      <Link to={href}>
        {children}
      </Link>
    </Button>
  )
}