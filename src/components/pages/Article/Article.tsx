import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { RiArrowLeftFill, RiLinksFill } from 'react-icons/ri'
import { Article as ArticleType } from '../../../features/article'

type Props = {
  article: ArticleType | undefined
  isLoading: boolean
}

export const Article: FC<Props> = ({ article, isLoading }) => {
  if (isLoading) return <Loading>Loading...</Loading>
  return (
    <>
      {article && (
        <>
          <BackLink to={'/'}>
            <RiArrowLeftFill />
            back
          </BackLink>
          <Wrapper>
            <ImageWrapper>
              <img src={article.image.url} alt="画像" />
            </ImageWrapper>
            <Content>
              <Title>{article.title}</Title>
              <TextWrapper dangerouslySetInnerHTML={{ __html: article.body }}></TextWrapper>
              {article.link && (
                <ItemLink href={article.link} target="_blank" rel="noopener noreferrer">
                  <RiLinksFill />
                  {article.title}
                </ItemLink>
              )}
            </Content>
          </Wrapper>
        </>
      )}
    </>
  )
}
const Loading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`
const Wrapper = styled.div`
  display: flex;
  margin-top: 64px;
  padding: 32px;

  @media (max-width: 739px) {
    flex-direction: column;
    margin-top: 16px;
  }
`

const ImageWrapper = styled.div`
  width: 50%;
  padding: 10px;
  margin-right: 16px;
  aspect-ratio: 2016 / 1512;
  background-color: #ddd;
  border-radius: 63% 37% 30% 70%/50% 45% 55% 50%;

  @media (max-width: 739px) {
    width: 100%;
    margin-top: 16px;
    margin-right: 0;
    padding: 0;
  }

  > img {
    width: 100%;
    aspect-ratio: 2016 / 1512;
    border-radius: 63% 37% 30% 70%/50% 45% 55% 50%;
  }
`
const BackLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin-top: 16px;
  margin-left: 16px;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }

  > svg {
    margin-right: 8px;
  }
`
const Content = styled.div`
  margin-left: 16px;
  width: 50%;

  @media (max-width: 739px) {
    margin-left: 0;
    width: auto;
  }
`
const Title = styled.h2`
  font-size: 24px;
  font-weight: Bold;
  line-height: 1.4;

  @media (max-width: 739px) {
    margin-top: 64px;
  }
`
const TextWrapper = styled.div`
  margin-top: 64px;
  line-height: 1.4;

  @media (max-width: 739px) {
    margin-top: 32px;
  }
`
const ItemLink = styled.a`
  margin-top: 64px;
  display: inline-block;
  text-decoration: none;
  color: #000;

  @media (max-width: 739px) {
    margin-top: 32px;
  }

  &:hover {
    text-decoration: underline;
  }

  > svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`
