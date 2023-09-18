import '@/styles/globals.css'

// -----------
import { Amplify } from 'aws-amplify';

import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
// -----------


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
