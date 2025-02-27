
import NavbarBottom from "./components/NavbarDown";
import "./globals.css";
import Head from "next/head";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
        <Head>  
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />  
    </Head> 
      <body>
        <NavbarBottom/>
        {children}
      </body>
    </html>
  );
}
