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

        <h2>What a Cool Kid Gets</h2>
        <ul className={styles.list}>
          <li>6 months of stickers shipped to a Cool Kid's door!</li>
          <li>12 Stickers all together</li>
          <li>Bonus Suprises</li>
          <li>Choose your own adventure with your sticker collection
            <ul>
              <li>total surprise</li>
              <li>complete control</li>
              <li>a little of both</li>
            </ul>
          </li>
        </ul>
        <p className={styles.listDescription}>All sticker designs are original watercolor and ink art created by Hailey Morgan. Vinyl stickers feature a premium coating that protects them from exposure to wind, rain and sunlight. You can even put them through the dishwasher or on cars! Stickers are 3-4" max length.</p>

       <h2>Here's how it works</h2>
       <ol className={styles.list}>
       	<li>You sign yourself up to be a Cool Kid! OR You Sign someone else up to be a Cool Kid!</li>
        <li>Sign-er Up-er picks the first two stickers OR Artist's choice</li>
        <li>New Cool Kid gets a welcome letter with future access information (sign-er up-er can wrap can print and wrap this or cool kid can get it in the mail or through email)</li>
        <li>New Cool Kid gets mailed the first 2 stickers</li>
        <li>ool kid starts signing up for their own sticker selection starting 12/25. Cool Kid has until the 25th to select their next sticker set. If the cool kid didn’t get around to selecting their sticker- it goes to Artist’s choice for selection (don’t worry, she has pretty good taste)</li>
        <li>Starting in February, Stickers get shipped on the 1st. Sign up before 12/25 will get sent as they are received</li>
        <li>Repeat step 4-5</li>
       </ol>
        <a className={styles.signUp} href="https://www.artbyhaileymorgan.com/product-page/cool-kids-sticker-club">Sign Up Now!</a>
      </main>
    </div>
  )
}
