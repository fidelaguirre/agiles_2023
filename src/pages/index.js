import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Auth } from 'aws-amplify';
import { Menu, MenuItem } from "@aws-amplify/ui-react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  async function signOut() {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <>
      <Head>
        <title>SoundCollab</title>
        <meta name="description" content="Conéctate con músicos, productores y más." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <a type='button' id="MutationEventButton" onClick={createNewBlog}>Testeando ando</a>
      <p id="MutationResult">{resp ? resp.data.createBlog.name : ""}</p> */}
      <h2>Header</h2>
          <Menu menuAlign="end">
            <MenuItem isDisabled onClick={() => alert("Perfil")}>
              Perfil
            </MenuItem>
            <MenuItem onClick={signOut}>Cerrar Sesión</MenuItem>
          </Menu>
    </>
  )
}