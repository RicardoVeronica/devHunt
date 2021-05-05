import Link from "next/link";
import styled from "@emotion/styled";

const Nav = () => {
  return (
    <Navigation>
      <Link href="/">
        <a>Inicio</a>
      </Link>

      <Link href="/populares">
        <a>Populares</a>
      </Link>

      <Link href="/nuevo-producto">
        <a>Nuevo Producto</a>
      </Link>
    </Navigation>
  );
};

const Navigation = styled.nav`
  padding-left: 2rem;

  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gray2);
    font-family: "PT Sans", sans-serif;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export default Nav;
