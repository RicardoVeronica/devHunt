import styled from "@emotion/styled";

const Buscador = () => {
  return (
    <Form>
      <InputText type="text" placeholder="Buscar proyectos" />
      <InputSubmit type="submit">Buscar</InputSubmit>
    </Form>
  );
};

const Form = styled.form`
  position: relative;
`;

const InputText = styled.input`
  border: 1px solid var(--gray3);
  padding: 1rem;
  min-width: 300px;
`;

const InputSubmit = styled.button`
  display: block;
  height: 3rem;
  width: 3rem;
  border: none;
  background-color: #fff;
  background-image: url("/buscar.png");
  background-size: 4rem;
  background-repeat: no-repeat;
  position: absolute;
  right: 1rem;
  top: 1px;
  text-indent: -9999px;

  &:hover {
    cursor: pointer;
  }
`;

export default Buscador;
