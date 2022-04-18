import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
   
    var cursor = true;
    var speed = 450;

    setInterval(() => {
      if(cursor) {
        document.getElementById('cursor').style.opacity = 0;
        cursor = false;
      }else {
        document.getElementById('cursor').style.opacity = 1;
        cursor = true;
      }
    }, speed);
    
  })
  return (
    <div className={styles.container}>
      
      <main className={styles.main}>
        <Head>
          <title>Oi! Eu sou o Donini!</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className={styles.grid}>
          <Image src="/images/logo.png" alt="me" width="180" height="180" />
          <h3 className={styles.title}>
            Este espaço de <mark>criatividade</mark> está em construção<span id="cursor">|</span>
          </h3>
        </div>
      </main>

    </div>
  )
}
