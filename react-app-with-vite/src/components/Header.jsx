import { NavLink } from 'react-router-dom'
import { Navbar } from "./Navbar"


export const Header = () => {
  return (
      <div className="header">
          <h1><NavLink className="logo" to={"/"}>Pizza Lab</NavLink></h1>
          <Navbar />
      </div>
  )
}
