import styles from "./event.module.css";
import Layout from '../components/Layout'

const eventos = () => {
  return (
    <Layout>
      <div className={styles.container}>
            <div>
                <div className={styles.header}>
                  <div className={styles.text}>Crear Evento</div>
                  <div className={styles.underline}></div>
                </div>
            </div>
      </div>
    </Layout>
  )
}

export default listado