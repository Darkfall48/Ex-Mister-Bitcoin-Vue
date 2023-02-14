<template>
  <section class="stats-index">
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
