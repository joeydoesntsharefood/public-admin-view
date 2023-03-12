import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../source/components/UriInput/styleCss.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
