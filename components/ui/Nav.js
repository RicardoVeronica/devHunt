import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <a>Inicio</a>
      </Link>
      <Link href="/populares">
        <a>Populares</a>
      </Link>
      <Link href="/nuevo-producto">
        <a>Nuevo Producto</a>
      </Link>
    </nav>
  );
};

export default Nav;
