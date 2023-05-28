import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <><Component {...pageProps} /><footer id="footer"><p>This is the footer</p></footer></>
}

export default MyApp
