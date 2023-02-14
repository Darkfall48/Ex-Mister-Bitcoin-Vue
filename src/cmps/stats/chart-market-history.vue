<template>
  <article class="stats-index-charts-list-chart">
    <h1 class="stats-index-charts-list-chart-title">Market Price History</h1>
    <Bar
      class="stats-index-charts-list-chart-container"
      v-if="chartData.labels"
      id="chart-market-price-history"
      :options="chartOptions"
      :data="chartData"
    />
  </article>
</template>

<script>
import { bitcoinService } from '@/services/bitcoin.service'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: null,
        datasets: [
          {
            label: 'Value (USD)',
            backgroundColor: 'gold',

            data: null,
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    }
  },
  async created() {
    try {
      this.prices = await bitcoinService.getMarketPriceHistory()
      this.chartData.labels = this.prices.values.map((value) => {
        const date = new Date(value.x * 1000)
        return `${date.getDate() + 1}.${date.getMonth() + 1}`
      })
      this.chartData.datasets[0].data = this.prices.values.map(
        (value) => value.y
      )
    } catch (err) {
      console.log('Cannot load chart:', err)
    }
  },
}
</script>

<style lang="sass" scoped></style>
