import type { AppProps } from 'next/app'
import '../styles/globals.css'; 

// Apply styles to all pages
export default function App({ Component, pageProps }:AppProps) {
    return <Component {...pageProps} />;
  }