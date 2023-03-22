import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="footer">
        <h2>Footer</h2>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/menu"}>Menu</NavLink>
        <NavLink to={"/about"}>About</NavLink>
    </div>
  )
}
