import { MicroCMSListContent } from 'microcms-js-sdk'

export type Articles = Article[] | undefined

export type Article = {
  id: string
  body: string
  image: {
    height: string
    url: string
    width: string
  }
  title: string
  link?: string
} & MicroCMSListContent
