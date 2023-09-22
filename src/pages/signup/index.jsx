import styles from "./signup.module.css";
import Image from "next/image";

import user_icon from '/public/img/person.png';
import email_icon from '/public/img/email.png';
import password_icon from '/public/img/password.png';
import { useState } from "react";

const Login = () => {

    const [action, setAction] = useState("Regístrate");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text}>{action}</div>
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
                alt='User Icon'
            />
            <input type="email" placeholder="Correo" />
          </div>
          <div className={styles.input}>
            <Image
                src={password_icon}
                alt='User Icon'
            />
            <input type="password" placeholder="Contraseña" />
          </div>
        </div>
        <div className={styles.forgotpassword}>
          Ya tienes cuenta? <span>Iniciar Sesión</span>
        </div>
        <div className={styles.submitcontainer}>
          <div className={styles.submit}>Regístrate</div>
        </div>
      </div>
    </>
  );
};

export default Login;
