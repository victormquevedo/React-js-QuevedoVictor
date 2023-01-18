import "./Navbar.css";
import CartWidget from "./CartWidget";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <h2>Indumentaria Academica</h2>
      <button className="buttons">Conjuntos</button>
      <button className="buttons">Guardapolvos</button>
      <button className="buttons">Articulos Sublimados</button>
      <CartWidget />
    </div>
  );
};

export default Navbar;
