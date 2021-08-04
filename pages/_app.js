import 'tailwindcss/tailwind.css'
import "../styles/globals.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <link rel="shortcut icon" href="logo.JPG"/>
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
