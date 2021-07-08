import '../styles/globals.css'
import Link from "next/link";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return(
<>

  <nav>
    <div className={styles.topnav}>

      <Link href="/">
        <a>
          Home
        </a>

      </Link>

      <Link href="/">
        <a>
          Home
        </a>

      </Link>

      <Link href="/">
        <a>
          Home
        </a>

      </Link>

      <Link href="/">
        <a>
          Home
        </a>

      </Link>
    </div>

  </nav>

  <main>

  <Component {...pageProps} />

  </main>
</>
  )
}

export default MyApp
