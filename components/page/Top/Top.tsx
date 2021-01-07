
import React from 'react'
import Head from 'next/head'

import styles from './Top.module.scss'

export const Top = () => {
  return (
    <>
      <Head>
        <title>Top</title>
      </Head>

      <main className={styles.top}>
        <div className={styles.left}>
          <h1 className={styles.title}>My Favorite Things</h1>
          <p className={styles.text}>私を形成する、私のお気に入りたち。</p>
        </div>
        <div className={styles.right}>
          <div className={styles.contener}>
            <h2 className={styles.blockTitle}>
              Place
            </h2>
            <ul className={styles.list}>
              <li>
                <span>小豆島の海</span>
                <span>1</span>
              </li>
              <li>
                <span>夙川公園</span>
                <span>2</span>
              </li>
              <li>
                <span>代々木</span>
                <span>3</span>
              </li>
              <li>
                <span>三鷹のイルミネーション</span>
                <span>4</span>
              </li>
            </ul>
          </div>
          
          <div className={styles.contener}>
            <h2 className={styles.blockTitle}>
              PLACE
            </h2>
            <ul className={styles.list}>
              <li>
                <span>小豆島の海</span>
                <span>1</span>
              </li>
              <li>
                <span>夙川公園</span>
                <span>2</span>
              </li>
              <li>
                <span>代々木</span>
                <span>3</span>
              </li>
              <li>
                <span>三鷹のイルミネーション</span>
                <span>4</span>
              </li>
            </ul>
          </div>
          <div className={styles.contener}>
            <h2 className={styles.blockTitle}>
              PLACE
            </h2>
            <ul className={styles.list}>
              <li>
                <span>小豆島の海</span>
                <span>1</span>
              </li>
              <li>
                <span>夙川公園</span>
                <span>2</span>
              </li>
              <li>
                <span>代々木</span>
                <span>3</span>
              </li>
              <li>
                <span>三鷹のイルミネーション</span>
                <span>4</span>
              </li>
            </ul>
          </div>
          <div className={styles.contener}>
            <h2 className={styles.blockTitle}>
              PLACE
            </h2>
            <ul className={styles.list}>
              <li>
                <span>小豆島の海</span>
                <span>1</span>
              </li>
              <li>
                <span>夙川公園</span>
                <span>2</span>
              </li>
              <li>
                <span>代々木</span>
                <span>3</span>
              </li>
              <li>
                <span>三鷹のイルミネーション</span>
                <span>4</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
