import React, { useEffect } from 'react';
import styled from 'styled-components'

import { GetPrefecturesAll } from '../../apis/resas'

const Box = styled.div`
`

const Heading2 = styled.h2`
  font-size: 20px;
`

const PrefecturesListDiv = styled.div`
  display: flex;
`

export const PrefecturesListBox = (): JSX.Element => {
  useEffect(() => {
    GetPrefecturesAll()
    .then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <Box>
      <Heading2>都道府県一覧</Heading2>
      <PrefecturesListDiv>

      </PrefecturesListDiv>
    </Box>
  )
}
