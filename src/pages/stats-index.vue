<template>
  <section class="stats-index">
    <h1 class="stats-index-title">Statistics</h1>
    <section class="stats-index-charts-list">
      <ChartAvgBlockSize />
      <ChartMarketHistory />
    </section>
  </section>
</template>

<script>
import ChartAvgBlockSize from '@/cmps/stats/chart-avg-block-size.vue'
import ChartMarketHistory from '@/cmps/stats/chart-market-history.vue'

export default { components: { ChartAvgBlockSize, ChartMarketHistory } }
</script>
