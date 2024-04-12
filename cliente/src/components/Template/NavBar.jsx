import { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { GlobalContext } from "../../context/GlobalContext";
import style from './Navbar.module.css'

// componente de la barra de navegacion superior
function NavBar({ sidebartoggle, setSidebartoggle }) {
  const { cerrarSesion, nocturno, modoNocturno } = useContext(GlobalContext);

  const logOut = () => {
    cerrarSesion();
  };

  return (
    <Navbar
      style={{background: '#145cd4', color: '#fff'}}
      className="w-100"
      onClick={() => setSidebartoggle(false)}
    >
      <Container className="d-flex justify-content-between">       
        <div>
          <span
            className={`text-decoration-none rounded ${style.logout}`}
            onClick={(e) => {setSidebartoggle(true); e.stopPropagation()}}
          >
            Abrir Menú
          </span>

          {nocturno ? (
            <BsFillSunFill
              className="tema-icon tema-sol ms-4 rounded p-1"
              onClick={modoNocturno}
            />
          ) : (
            <BsFillMoonFill
              className="tema-icon ms-4 rounded p-1"
              onClick={modoNocturno}
            />
          )}
        </div>

        <h4>Sistema de Encuetas UVM</h4>

        <span
          onClick={logOut}
          className={`text-decoration-none rounded ${style.logout}`}
        >
          Cerrar Sesión
        </span>
      </Container>
    </Navbar>
  );
}

export default NavBar;
