import { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "./Layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
