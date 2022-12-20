import Head from "next/head";
import { ContainerGlobal } from "../../styles/globals";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

interface IpropsLayout {
  children: React.ReactNode;
}

export function Layout({ children }: IpropsLayout) {
  return (
    <>
      <Navbar />
      <ContainerGlobal>
        <main style={{ minHeight: "70vh" }}>{children}</main>
      </ContainerGlobal>
      <Footer />
    </>
  );
}
