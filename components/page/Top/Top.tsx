
import React from 'react'
import Head from 'next/head'

import styles from './Top.module.scss'
import Link from 'next/link'

export const Top = ({categorizedData}) => {
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
            {categorizedData.map((lists) => (
              <div key ={lists.category}>
                <h2 className={styles.blockTitle} >
                  {lists.category}
                </h2>
                {lists.data.map(({id, title}, index:number) => (
                  <ul className={styles.list} key={index}>
                    <li>
                      <Link href={`/article/${lists.category}/${id}`}>
                        <a>{title}</a>
                      </Link>
                      <span>{index+1}</span>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
