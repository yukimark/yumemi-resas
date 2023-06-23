// import { Inter } from 'next/font/google'
import styled from 'styled-components'
import MyHead from '@/components/myhead'
import { PrefecturesListBox } from '@/components/ui/prefecturesListBox'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MyHead />
      <PrefecturesListBox />
    </>
  )
}
