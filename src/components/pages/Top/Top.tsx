import { FC } from 'react'
import styled from 'styled-components'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Article, Articles } from '../../../features/article'
import { format } from '../../../libs/time'

type Props = {
  articles: Articles
  isLoading: boolean
}

export const Top: FC<Props> = ({ articles, isLoading }) => {
  if (isLoading) return <Loading>Loading...</Loading>
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>My Favorite Things</Title>
        <TextWrapper>
          <p>When I'm feeling sad </p>
          <p>I simply remember my favorite things</p>
          <p>And then I don’t feel so bad</p>
        </TextWrapper>
        <SnsButtonWrapper>
          <SnsLink href="https://twitter.com/cidermitaina" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
          </SnsLink>
          <SnsLink href="https://github.com/cidermitaina" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </SnsLink>
        </SnsButtonWrapper>
      </TitleWrapper>
      <ItemWrapper>
        <Items>
          {articles?.map((article: Article) => (
            <li key={article.id}>
              <ItemLink to={`article/${article.id}`}>
                <Time>{format(article.createdAt, 'YYYY-MM-DD')}</Time>
                <ArticleTitle>{article.title}</ArticleTitle>
              </ItemLink>
            </li>
          ))}
        </Items>
      </ItemWrapper>
    </Wrapper>
  )
}

const Loading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`
const Wrapper = styled.div`
  display: flex;

  @media (max-width: 739px) {
    flex-direction: column;
    margin-top: 100px;
  }
`
const TitleWrapper = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    width: 1px;
    background-color: #ddd;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
`
const Title = styled.h1`
  font-size: 26px;
  text-align: center;
  font-weight: bold;
`
const TextWrapper = styled.div`
  text-align: center;
  line-height: 1.4;
  margin-top: 32px;
`
const SnsButtonWrapper = styled.div`
  margin-top: 40px;
  text-align: center;
  display: flex;
  gap: 0 16px;
  justify-content: center;
`
const SnsLink = styled.a`
  border-radius: 50px;
  background: #f5f5f5;
  box-shadow: 8px 8px 16px #d0d0d0, -8px -8px 16px #ffffff;
  padding: 10px;
  display: inline-block;
  color: #000;

  &:hover {
    background: linear-gradient(145deg, #dddddd, #ffffff);
  }
`
const ItemWrapper = styled.div`
  padding: 48px 0 48px 40px;
  height: 100vh;
  overflow-y: scroll;
  box-sizing: border-box;
  flex-grow: 1;

  @media (max-width: 739px) {
    height: auto;
    margin-top: 72px;
    padding: 0 16px;
  }
`

const Items = styled.ul`
  > li {
    padding: 16px 8px;
  }
`
const ItemLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`
const ArticleTitle = styled.p`
  font-size: 18px;
  line-height: 1.4;
`
const Time = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
  margin-right: 14px;
  flex-shrink: 0;
`
