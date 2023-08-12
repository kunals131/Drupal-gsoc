import PropsLayout from '@/components/layouts/PropsLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function App({ Component, pageProps }: AppProps) {

  return <PropsLayout pageProps={pageProps}>
    <Component {...pageProps} />
  </PropsLayout>
}
