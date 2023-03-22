import { NavLink } from 'react-router-dom'
export const Navbar = () => {


  return (
    <>
      <nav className="navigation">
        <NavLink style={({ isActive }) => ({
          backgroundColor: isActive ? "rgba(230, 239, 247, 0.719)" : null,
        })} to={"/"}>Home</NavLink>


        <NavLink style={({ isActive }) => ({
          backgroundColor: isActive ? "rgba(230, 239, 247, 0.719)" : null,
        })} to={"/menu"}>Menu</NavLink>


        <NavLink style={({ isActive }) => ({
          backgroundColor: isActive ? "rgba(230, 239, 247, 0.719)" : null,
        })} to={"/about"}>About</NavLink>
      </nav>
    </>
  )
}
