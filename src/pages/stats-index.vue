<template>
  <section>
    <h1>Stats Page</h1>
    <ChartAvgBlockSize />
    <ChartMarketHistory />
  </section>
</template>

<script>
import ChartAvgBlockSize from '@/cmps/stats/chart-avg-block-size.vue'
import ChartMarketHistory from '@/cmps/stats/chart-market-history.vue'

export default { components: { ChartAvgBlockSize, ChartMarketHistory } }
</script>

<style lang="sass" scoped></style>
