
import React from 'react'
import Head from 'next/head'
import styles from './Article.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export const Article = ({ postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <main className={styles.wrapper}>
        <Link href="/" >
          <a className={styles.leftLink}></a>
        </Link>

        <article className={styles.article}>
          <div className={styles.left}>
            <div className={styles.titleArea}>
              <h1 className={styles.title}>{postData.title}</h1>
            </div>
            <div className={styles.mv}>
              <Image
                src={`/images/${postData.id}.jpg`}
                alt="Picture of the author"
                width={640}
                height={480}
              />
            </div>
            <ul className={styles.list}>
              <li>
                category: {postData.category}
              </li>
              <li>
                link: <a href={postData.linkUrl}>{postData.linkName}</a>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.contener}>
              <div  dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>
          </div>
        </article>
        <div className={styles.arrowLinkArea}>
          {postData.prev && 
            <Link href={postData.prev} >
              <a href="" className={styles.leftLink}></a>
            </Link>
          }
          {postData.next && 
            <Link href={postData.next} >
            <a href="" className={styles.rightLink}></a>
          </Link>
          }
          
        </div>
      </main>
    </>
  )
}
