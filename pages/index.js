import styles from "@emotion/styled";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Heading>Hello world</Heading>
    </Layout>
  );
}

const Heading = styles.h1`
  color: red;
`;
