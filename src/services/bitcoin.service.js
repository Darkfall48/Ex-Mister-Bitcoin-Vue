'use strict'

//? Libraries
import axios from 'axios'
//? Services
import { utilService } from './util.service'
//? Private Variables
const rateUrl = 'https://blockchain.info/tobtc?currency=USD&value=1'
const priceHistoryUrl =
  'https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true'
const avgBlockSizeUrl =
  'https://api.blockchain.info/charts/avg-block-size?timespan=1months&format=json&cors=true'

export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
  getAvgBlockSize,
}

//? Exchanges Rate in USD to BTC
async function getRate() {
  let rate = utilService.loadFromStorage('rate')
  if (rate) return rate
  try {
    rate = await axios.get(rateUrl)
    utilService.saveToStorage('rate', rate.data)
    return rate.data
  } catch (err) {
    throw err
  }
}

//? Get Market Price History
async function getMarketPriceHistory() {
  let priceHistory = utilService.loadFromStorage('priceHistory')
  if (priceHistory) return priceHistory
  try {
    priceHistory = await axios.get(priceHistoryUrl)
    utilService.saveToStorage('priceHistory', priceHistory.data)
    return priceHistory.data
  } catch (err) {
    throw err
  }
}

//? Get Average Block Size
async function getAvgBlockSize() {
  let avgBlockSize = utilService.loadFromStorage('avgBlockSize')
  if (avgBlockSize) return avgBlockSize
  try {
    avgBlockSize = await axios.get(avgBlockSizeUrl)
    utilService.saveToStorage('avgBlockSize', avgBlockSize.data)
    return avgBlockSize.data
  } catch (err) {
    throw err
  }
}
