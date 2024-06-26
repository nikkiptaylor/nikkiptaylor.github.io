import type { AppProps } from "next/app";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Apply styles to all pages
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
