import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cool Kids Sticker Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <img className={styles.titleImage} src="/CKSC.jpg" alt="cool kids sticker club" />
        </h1>
        <a className={styles.signUp} href="https://www.artbyhaileymorgan.com/product-page/cool-kids-sticker-club">Sign Up Now!</a>
      </main>
    </div>
  )
}
