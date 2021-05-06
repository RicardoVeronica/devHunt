import { Form, Div, InputSubmit } from "../components/ui/Form";
import Layout from "../components/layout";
import styled from "@emotion/styled";

export default function CrearCuenta() {
  return (
    <Layout>
      <Heading>Crear Cuenta</Heading>

      <Form>
        <Div>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            name="nombre"
          />
        </Div>
        <Div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Tu Email" name="email" />
        </Div>
        <Div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Tu Password"
            name="password"
          />
        </Div>
        <InputSubmit type="submit" value="Crear cuenta" />
      </Form>
    </Layout>
  );
}

const Heading = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;
