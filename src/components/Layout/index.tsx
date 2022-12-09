import Head from "next/head";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

interface IpropsLayout {
  children: React.ReactNode;
}

export function Layout({ children }: IpropsLayout) {
  return (
    <>
      <Head>
        <title>Pokemon Next</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
