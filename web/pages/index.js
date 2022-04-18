import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <main className={styles.main}>
      <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className={styles.grid}>
          <Image src="/images/logo.png" alt="me" width="180" height="180" />
          <h3 className={styles.title}>
            Este espaço de <span>criatividade</span> está em construção <span>:)</span>
          </h3>
        </div>
      </main>

    </div>
  )
}
