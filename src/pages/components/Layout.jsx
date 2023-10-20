import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>SoundCollab</title>
        <meta
          name="description"
          content="Conéctate con músicos, productores y más."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>{children}</main>
    </>
  );
};

export default Layout;
