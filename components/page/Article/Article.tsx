
import React from 'react'
import Head from 'next/head'
import styles from './Article.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export const Article = () => {
  return (
    <>
      <Head>
        <title>Top</title>
      </Head>

      <main className={styles.wrapper}>
        <Link href="/" >
          <a className={styles.leftLink}></a>
        </Link>

        <article className={styles.article}>
          <div className={styles.left}>
            <div className={styles.titleArea}>
              <h1 className={styles.title}>Aesopのルームスプレー</h1>
            </div>
            <div className={styles.mv}>
              <Image
                src="/images/aesop.jpg"
                alt="Picture of the author"
                width={640}
                height={480}
              />
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.contener}>
              aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。aesopのルームスプレーは本当におすすめです。
            </p>
          </div>
        </article>
        <div className={styles.arrowLinkArea}>
          <a href="" className={styles.leftLink}></a>
          <p className={styles.number}>1</p>
          <a href="" className={styles.rightLink}></a>
        </div>
      </main>
    </>
  )
}
