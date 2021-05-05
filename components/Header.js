import Buscador from "./ui/Buscador";
import Nav from "./ui/Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>devHunt</p>

          <Buscador />

          <Nav />
        </div>

        <div>
          <p>Hola: Ricardo</p>

          <button>Cerrar Sesion</button>

          <Link href="/login">
            <a>Login</a>
          </Link>
          <Link href="/crear-cuenta">
            <a>Crear cuenta</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
