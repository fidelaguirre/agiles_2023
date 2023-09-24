import styles from "./login.module.css";
import Image from "next/image";
import Link from "next/link";

import email_icon from '/public/img/email.png';
import password_icon from '/public/img/password.png';

const Login = () => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text}>Iniciar Sesión</div>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.inputs}>
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
          No tienes cuenta? <Link href='/signup'><span>Regístrate</span></Link>
        </div>
        <div className={styles.submitcontainer}>
          <div className={styles.submit}>Iniciar Sesión</div>
        </div>
      </div>
    </>
  );
};

export default Login;