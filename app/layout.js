import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./component/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "4HD Print LLC",
  description: "4HD PRINT is an establishment that offers high-quality printing on various media, including promotional items.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>

        {children}
        <Footer/>
      </body>
    </html>
  );
}