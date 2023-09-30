import styles from "./event.module.css";
import Layout from '../components/Layout'

const event = () => {
    return(
    
      <Layout>
          <div className={styles.container}>
            <div className={styles.header}>
            <div className={styles.text}>Evento</div>
          </div>
              
          <div className={styles.body}>
            
          </div>

          </div>
      </Layout>
        
    )
}

export default event