import axios from 'axios';
import { prefectures } from '../urls/index'

const Config = { headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEYS } }

export const GetPrefecturesAll = () => {
  return axios.get(prefectures, Config)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
