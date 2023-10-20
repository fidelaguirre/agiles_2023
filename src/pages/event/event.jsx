import styles from "./event.module.css";
import Layout from '../components/Layout'
import { getAllEventos } from "@/store/evento";
import { useEffect, useState } from "react";

const eventos = () => {

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    getAllEventos().then(response => setEventos(response.data.listEventos.items))
  }, [])

  return (
    <>
    {
      eventos.map((item, i) => {

        return (
          <Layout>
            <div className={styles.div}>
              <li>  {i}, {item.Banda.name}</li>
              <li>  {item.name}</li>
              <li>  {item.description}</li>
              <li>  {item.date}</li>
            </div>
          </Layout>
        )
      }).sort()
    }
    <a href="/event">crear evento</a>
    </>
  )

  return <div>
    
  </div>
}

export default eventos