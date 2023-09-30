import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

// -----------
import { Amplify, I18n } from "aws-amplify";

import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

import { Authenticator, View, Image, useTheme, Footer, useAuthenticator, Button, translations} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
// -----------

export default function App() {
  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image alt="SoundCollab logo" src="/img/logo.svg" />
        </View>
      );
    },

    SignIn: {
      Footer() {
        const { toResetPassword } = useAuthenticator();
  
        return (
          <View textAlign="center">
            <Button
              fontWeight="normal"
              onClick={toResetPassword}
              size="medium"
              variation="link"
            >
              Olvidé mi contraseña
            </Button>
          </View>
        );
      },
    },
  };

  const formFields = {
    signIn: {
      username: {
        label: 'Email',
        placeholder: 'Ingresa tu correo:',
      },
      password: {
        label: 'Contraseña',
        placeholder: 'Ingresa tu contraseña:',
      },
    },
    signUp: {
      name: {
        label: 'Nombre',
        placeholder: 'Ingresa tu nombre:',
        order: 1,
      },
      email: {
        label: 'Email',
        placeholder: 'Ingresa tu correo:',
        order: 2,
      },
      password: {
        label: 'Contraseña:',
        placeholder: 'Ingresa tu contraseña:',
        isRequired: false,
        order: 3,
      },
      confirm_password: {
        label: 'Confirmar contraseña:',
        placeholder: 'Confirma tu contraseña:',
        order: 4,
      },
    },
    resetPassword: {
      username: {
        placeholder: 'Ingresa tu correo:',
      },
    },
  }

  return (
    <Authenticator signUpAttributes={["name"]} components={components} formFields={formFields}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.name}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
