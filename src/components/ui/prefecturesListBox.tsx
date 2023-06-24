import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

import { GetPrefecturesAll } from '../../apis/resas'

type RePrefecture = {
  message: null,
  result: object
}

const Box = styled.div`
`

const Heading2 = styled.h2`
  font-size: 20px;
`

const PrefecturesListDiv = styled.div`
  display: flex;
`

const PrefectureCheckBoxDiv = styled.div`

`

const PrefectureCheckBox = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <input type='checkbox'/>
      <label>aaa</label>
    </>
  )
}

export const PrefecturesListBox = (): JSX.Element => {
  const [prefectures, setPrefectures] = useState<RePrefecture[]>([]);

  useEffect(() => {
    GetPrefecturesAll()
    .then((data) =>
      setPrefectures(data)
      // console.log(data)
    )
  }, [])

  useEffect(() => {
    console.log(prefectures);
  }, [prefectures]);

  return (
    <Box>
      <Heading2>都道府県一覧</Heading2>
      <PrefecturesListDiv>
        {prefectures.result.map((key) => (
          <PrefectureCheckBox></PrefectureCheckBox>
        ))}
      </PrefecturesListDiv>
    </Box>
  )
}
