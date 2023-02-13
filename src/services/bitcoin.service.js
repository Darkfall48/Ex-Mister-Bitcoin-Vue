'use strict'

//? Libraries
import axios from 'axios'
//? Services
import { storageService } from './connections/storage.service'
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
  let rate = storageService.load('rate')
  if (rate) return rate
  try {
    rate = await axios.get(rateUrl)
    storageService.save('rate', rate.data)
    return rate.data
  } catch (err) {
    throw err
  }
}

//? Get Market Price History
async function getMarketPriceHistory() {
  let priceHistory = storageService.load('priceHistory')
  if (priceHistory) return priceHistory
  try {
    priceHistory = await axios.get(priceHistoryUrl)
    storageService.save('priceHistory', priceHistory.data)
    return priceHistory.data
  } catch (err) {
    throw err
  }
}

//? Get Average Block Size
async function getAvgBlockSize() {
  let avgBlockSize = storageService.load('avgBlockSize')
  if (avgBlockSize) return avgBlockSize
  try {
    avgBlockSize = await axios.get(avgBlockSizeUrl)
    storageService.save('avgBlockSize', avgBlockSize.data)
    return avgBlockSize.data
  } catch (err) {
    throw err
  }
}
