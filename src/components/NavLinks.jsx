import { NavLink } from "react-router";

export function NavLinks() {
  return (
    <nav style={{display: 'flex', justifyContent: 'center', gap: '15px'}}>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about" end>
        About
      </NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/account">Account</NavLink>
    </nav>
  );
}
