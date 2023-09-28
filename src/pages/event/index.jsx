import Image from "next/image";
import Link from "next/link";
import styles from "./event.module.css";
import Layout from '../components/Layout'

const event = () => {
    return(
       
        <Layout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.text}>Nuevo Evento</div>
                </div>
                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <input type="text" placeholder="Nombre"/>
                    </div>
                    <div className={styles.input}>
                        <input type="datetime-local" placeholder="Fecha"/>
                    </div>
                    <div className={styles.input}>
                        <input type="text" placeholder="Ubicación"/>
                    </div>
                    <div className={styles.input}>
                        <input type="text" placeholder="Descripción"/>
                    </div>
                    
                </div>
            
                <div className={styles.submitcontainer}>
                    <div className={styles.submit}>Crear Evento</div>
                 </div>

            </div>
        </Layout>
        
    )
}

export default event