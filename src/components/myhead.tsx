import type { NextPage } from 'next'
import Head from 'next/head'


interface MyHeadProps {
  title?: string
  thumbnailUrl?: string
  description?: string
}

const MyHead: NextPage<MyHeadProps> = ({title, thumbnailUrl, description}) => {
  const siteName = "ゆめみ試験チャレンジ"
  if (title === undefined) {
    title = siteName
  } else {
    title = `${title} - ${siteName}`
  }

  // if (thumbnailUrl === undefined) {
  //   thumbnailUrl = 'https://hoge/fuga.png';
  // }

  // if (description === undefined) {
  //   description = "ふがふがふが"
  // }

  return (
    <Head>
      <title>{title}</title>
      {/* <meta property="og:title" content={title}/>
      <meta property="og:image" content={thumbnailUrl}/>
      <meta property="og:description" content={description}/> */}
      <link rel="icon" href="../../public/favicon.ico" />
    </Head>
  )
}

export default MyHead
