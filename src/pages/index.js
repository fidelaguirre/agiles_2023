import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "./components/Layout";
import { getAllBandas,eliminarBanda } from '../store/banda.js'
import { useEffect, useState } from 'react'
import { MenuItem, Menu } from "@aws-amplify/ui-react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  async function signOut() {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const [bandas, setBandas] = useState([]);

  useEffect(() => {
    getAllBandas().then(response => setBandas(response))
  }, [])


  return (
    <>
      <Head>
        <title>SoundCollab</title>
        <meta name="description" content="Conéctate con músicos, productores y más." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { 
      bandas.map((item, i) => {
        return <li>{i}, {item.name}</li>
      })
      }
      <h2>Header</h2>
          <Menu menuAlign="end">
            <MenuItem isDisabled onClick={() => alert("Perfil")}>
              Perfil
            </MenuItem>
            <MenuItem onClick={signOut}>Cerrar Sesión</MenuItem>
          </Menu>
    </>
  );
}
