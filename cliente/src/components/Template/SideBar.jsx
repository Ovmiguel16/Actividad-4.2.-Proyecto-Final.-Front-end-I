import { useContext } from "react";
import { Link } from "react-router-dom";
import style from './Navbar.module.css'
import {
  AiOutlinePieChart,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { RiSurveyLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import logoUVM from "../../assets/img/logo.png";
import { GlobalContext } from "../../context/GlobalContext";

// componente de la barra de avegacion lateral
function SideBar({ sidebartoggle, setSidebartoggle }) {
  const { usuario, nocturno } = useContext(GlobalContext);

  return (
    <div
      className={`sidebar ${
        nocturno ? "bg-dark" : "bg-primary"
      } h-100 pt-2 d-flex flex-column align-items-center text-center animate__animated
        ${sidebartoggle ? "animate__fadeInLeft" : "animate__fadeOutLeft"}`}
    >
      <div className="w-100 text-start mt-2 align-items-center">
        <span
          onClick={() => setSidebartoggle(!sidebartoggle)}
          className={`text-decoration-none ms-5 rounded ${style.logout}`}
        >
          Cerrar Menú
        </span>
      </div>
      <div className="mt-5 ">
        <img
          src={logoUVM}
          alt={logoUVM}
          className="w-75 bg-light rounded rounded-circle"
        />
      </div>
      <div className="w-100 mt-3">
        <Link
          to="/escritorio/inicio"
          className={`w-100 btn enlances ${
            nocturno ? "btn-dark text-light" : "btn-primary text-dark"
          } text-start ps-3 py-3`}
          onClick={() => setSidebartoggle(!sidebartoggle)}
        >
          <AiOutlineHome
            className="enlances"
            style={{ fontSize: "1.5rem", transform: "translateY(-4px)" }}
          />{" "}
          <strong className="enlances">INICIO</strong>
        </Link>
      </div>
      <div className="w-100">
        <Link
          to="/escritorio/encuestas"
          className={`w-100 btn enlances ${
            nocturno ? "btn-dark text-light" : "btn-primary text-dark"
          } text-start ps-3 py-3`}
          onClick={() => setSidebartoggle(!sidebartoggle)}
        >
          <RiSurveyLine
            className="enlances"
            style={{ fontSize: "1.5rem", transform: "translateY(-4px)" }}
          />{" "}
          <strong className="enlances">ENCUESTAS</strong>
        </Link>
      </div>
      <div className="w-100">
        <Link
          to="/escritorio/resultados"
          className={`w-100 btn enlances ${
            nocturno ? "btn-dark text-light" : "btn-primary text-dark"
          } text-start ps-3 py-3`}
          onClick={() => setSidebartoggle(!sidebartoggle)}
        >
          <AiOutlinePieChart
            style={{ fontSize: "1.5rem", transform: "translateY(-4px)", color: "#fff" }}
          />{" "}
          <strong className="enlances">RESULTADOS</strong>
        </Link>
      </div>
      <div className="w-100">
        <a
          href={`/escritorio/perfil/${usuario._id}`}
          className={`w-100 btn ${
            nocturno ? "btn-dark text-light" : "btn-primary text-dark"
          } text-start ps-3 py-3`}
          onClick={() => setSidebartoggle(!sidebartoggle)}
        >
          <AiOutlineUser
            style={{ fontSize: "1.5rem", transform: "translateY(-4px)", color: "#fff" }}
          />{" "}
          <strong className="enlances">PERFIL</strong>
        </a>
      </div>

      {usuario.rol == "admin" ? (
        <div className="w-100">
          <a
            href={`/escritorio/usuarios`}
            className={`w-100 btn ${
            nocturno ? "btn-dark text-light" : "btn-primary text-dark"
          } text-start ps-3 py-3`}
            onClick={() => setSidebartoggle(!sidebartoggle)}
          >
            <HiOutlineUserGroup
              style={{ fontSize: "1.5rem", transform: "translateY(-4px)", color: "#fff" }}
            />{" "}
            <strong className="enlances">USUARIOS</strong>
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SideBar;
