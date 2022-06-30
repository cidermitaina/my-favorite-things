import { Top as TopComponent } from '../../../components/pages/Top'
import { useArticles } from '../../../features/article'

export const Top = () => {
  const { articles, isLoading } = useArticles()

  return <TopComponent articles={articles} isLoading={isLoading} />
}
