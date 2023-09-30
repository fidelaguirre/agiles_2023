import styles from "./event.module.css";
import Layout from '../components/Layout';
import createNewEvento from "@/store/evento";

const event = () => {

let resp = null

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

            <a type='button' id="QueryEventButton" onClick={createNewEvento}>Testeando ando</a>
            <p id="QueryResult">{resp ? resp.data.listEventos[0].name : ""}</p>
            
            
        </Layout>

    )
}

export default event 