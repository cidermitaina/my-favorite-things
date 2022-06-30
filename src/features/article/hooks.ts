import useSWR from 'swr'
import { MicroCMSListResponse, MicroCMSObjectContent } from 'microcms-js-sdk'
import { fetcher } from './repository'
import { Article } from './type'

export const useArticles = () => {
  const { data, error } = useSWR<MicroCMSListResponse<Article>>('article?limit=30', fetcher)
  return {
    articles: data?.contents,
    isLoading: !error && !data,
  }
}

export const useArticle = (id: string) => {
  const { data, error } = useSWR<MicroCMSObjectContent & Article>(`article/${id}`, fetcher)
  return {
    article: data,
    isLoading: !error && !data,
  }
}
