import { Inter } from "next/font/google";
import "./globals.css";
import "boxicons/css/boxicons.min.css";
import Header from "./header/sidenav";
import Footer from "./footer/Footer";

// Definimos el tipo para children
interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio",
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
