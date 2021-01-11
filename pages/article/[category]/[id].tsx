
import React from 'react'
import { getAllPostIds, getPostData } from '../../../lib/posts'
import { Article as ArticleComponent } from '../../../components/page/Article'

export default function Article({ postData }) {
  return (
    <ArticleComponent postData={postData} />
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, params.category)
  return {
    props: {
      postData,
    }
  }
}

export async function getStaticPaths() {
  // id としてとりうる値のリストを返す
  const paths = getAllPostIds()
  console.log(paths);
  
  return {
    paths,
    fallback: false
  }
}

