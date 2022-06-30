import { useParams } from 'react-router-dom'
import { Article as ArticleComponent } from '../../../components/pages/Article'
import { useArticle } from '../../../features/article'

export const Article = () => {
  const { id } = useParams<{ id: string }>()
  const { article, isLoading } = useArticle(id!)

  return <ArticleComponent article={article} isLoading={isLoading} />
}
