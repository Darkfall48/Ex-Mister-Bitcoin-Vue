<template>
  <article class="stats-index-charts-list-chart">
    <h1 class="stats-index-charts-list-chart-title">Average Block Size</h1>
    <Bar
      class="stats-index-charts-list-chart-container"
      v-if="avg"
      id="chart-avg-block-size"
      :options="chartOptions"
      :data="getChartData"
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
      avg: null,
      chartOptions: {
        responsive: true,
      },
    }
  },
  async created() {
    try {
      this.avg = await bitcoinService.getAvgBlockSize()
    } catch (err) {
      console.log('Cannot load chart:', err)
    }
  },
  computed: {
    getChartData() {
      return {
        labels: this.getDataLabels,
        datasets: [
          {
            label: 'Average block size (in MB)',
            backgroundColor: 'gold',
            data: this.getDatasetData,
          },
        ],
      }
    },
    getDataLabels() {
      return this.avg.values.map((value) => {
        const date = new Date(value.x * 1000)
        return `${date.getDate() + 1}.${date.getMonth() + 1}`
      })
    },
    getDatasetData() {
      return this.avg.values.map((value) => value.y)
    },
  },
}
</script>
