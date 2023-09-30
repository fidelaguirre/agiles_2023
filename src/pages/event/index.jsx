import { EventoCreateForm } from '@/ui-components';
import Layout from '../components/Layout';
import styles from '@/pages/event/event.module.css'

//Theme Provider

import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from '@/aws-exports';

import "@aws-amplify/ui-react/styles.css";
import studioTheme from '@/ui-components';

Amplify.configure(awsconfig);

//Theme Provider



const event = () => {

    return(
        <Layout>
          <div className={styles.container}>
            <div>
              <div className={styles.header}>
                <div className={styles.text}>Crear Evento</div>
                <div className={styles.underline}></div>
              </div>
            </div>
            <ThemeProvider theme={studioTheme}>
            <EventoCreateForm/>
            </ThemeProvider>
          </div>

        </Layout>


    )
}

export default event 