import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "./components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        {/* <a type='button' id="MutationEventButton" onClick={createNewBlog}>Testeando ando</a>
      <p id="MutationResult">{resp ? resp.data.createBlog.name : ""}</p> */}
        <body>body</body>
      </Layout>
    </>
  );
}
