import React from "react";
import Buscador from "./ui/Buscador";
import Nav from "./ui/Nav";
import Button from "./ui/Button";
import Link from "next/link";
import styled from "@emotion/styled";

const Header = () => {
  const user = false;

  return (
    <MainHeader>
      <HeaderContainer>
        <Div>
          <Link href="/">
            <a>
              <Logo>D</Logo>
            </a>
          </Link>
          <Buscador />
          <Nav />
        </Div>

        <Div>
          {user ? (
            <>
              <Paragraph>Hola: Ricardo</Paragraph>
              <Button bgColor="true">Cerrar Sesion</Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button bgColor="true">
                  <a>Login</a>
                </Button>
              </Link>
              <Link href="/crear-cuenta">
                <Button>
                  <a>Crear cuenta</a>
                </Button>
              </Link>
            </>
          )}
        </Div>
      </HeaderContainer>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  border-bottom: 2px solid var(--gray3);
  padding: 1rem 0;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.p`
  color: var(--orange);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Paragraph = styled.p`
  margin-right: 2rem;
`;

export default Header;
