import Image from "next/image";
import Link from "next/link";
import styles from "./signup.module.css";
import Layout from "../components/Layout";

import user_icon from '/public/img/person.png';
import email_icon from '/public/img/email.png';
import password_icon from '/public/img/password.png';

const Signup = () => {

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text}>Regístrate</div>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <Image
                src={user_icon}
                alt='User Icon'
            />
            <input type="text" placeholder="Nombre" />
          </div>
          <div className={styles.input}>
            <Image
                src={email_icon}
                alt='Email Icon'
            />
            <input type="email" placeholder="Correo" />
          </div>
          <div className={styles.input}>
            <Image
                src={password_icon}
                alt='Password Icon'
            />
            <input type="password" placeholder="Contraseña" />
          </div>
        </div>
        <div className={styles.forgotpassword}>
          Ya tienes cuenta? <Link href='/login'><span>Iniciar Sesión</span></Link>
        </div>
        <div className={styles.submitcontainer}>
          <div className={styles.submit}>Regístrate</div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
