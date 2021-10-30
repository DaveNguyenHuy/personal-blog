import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import "bootstrap/dist/css/bootstrap.css";
import "styles/global.style.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
