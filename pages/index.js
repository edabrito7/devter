import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (

    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a className={styles.link} href="https://nextjs.org">Devter</a>
      </h1>
      <nav>
        <Link href='/timeline'>
          <a>Timeline</a>
        </Link>
      </nav>
    </main>
  )
}
