import styled from 'styled-components'

const HeaderDiv = styled.header`
  width: 100%;
`

const PageTitleBox = styled.div`
  width: 100%;
  margin: 0 auto;
`

const PageTitle = styled.h1`
  font-size: 24px;
  color: red;
`

export const Header = (): JSX.Element => {
  return (
    <>
      <HeaderDiv>
        <PageTitleBox>
          <PageTitle>ゆめみのフロントエンド試験にチャレンジ</PageTitle>
        </PageTitleBox>
      </HeaderDiv>
    </>
  )
}
