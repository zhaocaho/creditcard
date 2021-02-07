import axios from '@/utils/axios'
import { RequestEnum } from '@/enums/httpEnums'
import { API } from '@/enums/API'

interface creditcardParams {
  bankName: string
  billData?: number
  repayData?: number
  date?: Date
  money?: number
}

/**
 * 添加信用卡信息
 *
 * @param {bankName:string, billData:number,repayData:number} data  billData账单日，repayData还款日
 */
export function creditcardAdd(data: creditcardParams) {
  return axios({
    url: API.CREDITCARDADD,
    method: RequestEnum.POST,
    data
  })
}
/**
 * 删除信用卡信息
 *
 * @param {bankName:string} data
 */
export function creditcardDelete(data: creditcardParams) {
  return axios({
    url: API.CREDITCARDDELETE,
    method: RequestEnum.POST,
    data
  })
}
/**
 * 查询当前信用卡信息
 */
export function creditcardFind() {
  return axios(API.CREDITCARDFIND)
}
/**
 * 修改当前用户信用卡信息
 *
 * @param {bankName:string,billData:[number],repayData:[number]} data   []中的是选填
 */
export function creditcardUpdate(data: creditcardParams) {
  return axios({
    url: API.CREDITCARDUPDATE,
    method: RequestEnum.POST,
    data
  })
}
/**
 *添加信用卡历史还款信息

 * @param {  bankName:string,date:new Date(), money:number,} data  date中需传入日期
 */
export function addHistory(data: creditcardParams) {
  return axios({
    url: API.HISTORYADD,
    method: RequestEnum.POST,
    data
  })
}
/**
 * 删除历史还款记录
 *
 * @param {bankName:string,idList:string[]} params  //idList这里面传的是历史记录的_id数组
 */
export function deleteHistory(params: {
  bankName: creditcardParams
  idList?: string[]
}) {
  return axios({
    url: API.HISTORYDELETE,
    method: RequestEnum.GET,
    params
  })
}
