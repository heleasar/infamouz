// app/layout.js (or app/layout.tsx)
import { Html, Head, Main, NextScript } from 'next/document';
import '../styles/globals.css';


export default function Layout({ children }) {
  return (
    <Html lang="en">
      <Head>
        {/* Link to Geist UI Font */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@geist-ui/react/fonts/geistsans.css" />
      </Head>
      <body>
        {children}
        <NextScript />
      </body>
    </Html>
  );
}
