<template>
  <component :is="horizontal ? 'HorBars' : 'Bars'"
    ref="bar"
    style="position:relative;"
    :options="options"
    :chartData="chartData"
    :loading="loading"
    class=""
  />
</template>
<script>
import Bars from '@/components/charts/Bars.vue';
import HorBars from '@/components/charts/HorBars.vue';

export default {
  components: {
    Bars,
    HorBars,
  },
  props: {
    method: Number,
    horizontal: Boolean,
    dataSet: {
      type: Array,
      default: () => ([]),
    },
    label: String,
    aspectRatio: {
      type: Number,
      default: 16 / 9,
    },
  },
  data() {
    return {
      loading: false,
      options: {
        aspectRatio: this.aspectRatio,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };
  },
  computed: {
    chartData() {
      return {
        labels: (this.dataSet || []).map((el) => el.date),
        datasets: [
          {
            label: this.label,
            backgroundColor: this.$vuetify.theme.themes.light.primary,
            data: (this.dataSet || []).map((el) => el.value),
            type: this.horizontal ? 'horizontalBar' : 'bar',
          },
        ],
      };
    },
  },
};
</script>
