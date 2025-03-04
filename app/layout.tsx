import { CartProvider } from 'components/cart/cart-context';
import { Navbar } from 'components/layout/navbar';
import { GeistSans } from 'geist/font/sans';
import { getCart } from 'lib/shopify';
import { baseUrl } from 'lib/utils';
import { ReactNode } from 'react';
import './globals.css';

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  }
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="flex min-h-screen flex-col bg-gradient-to-br from-green-400 via-green-200 to-green-900">
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <footer className="bg-black text-white p-4 text-center">
            © {new Date().getFullYear()} Famouz Inc. All rights reserved.
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
