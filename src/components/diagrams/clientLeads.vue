<template>
  <v-card class="base--text">
    <v-card-text class="base--text">
      <v-row>
        <v-col>
          <v-card-title class="pl-0">
            Количество заявок за период
          </v-card-title>
        </v-col>
        <v-col cols="auto">
          <v-select
            v-model="selectedPeriod"
            :items="months"
            label="Период"
            filled
            background-color="white"
            flat
            outlined
            clearable
            dense
          ></v-select>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text>
      <BarsChart
        :dataSet="dataSet"
        label="Заявки"
        :aspectRatio="3/1"
      />
    </v-card-text>

  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import dayjs from '@/utils/date';

export default {
  name: 'ClientLeads',
  components: {
    BarsChart: () => import('@/components/diagrams/BarsChart.vue'),
  },
  data() {
    return {
      months: [
        {
          value: '3',
          text: 'Март',
        },
        {
          value: '4',
          text: 'Апрель',
        },
        {
          value: '5',
          text: 'Май',
        },
      ],
      selectedPeriod: '3',
    };
  },
  computed: {
    ...mapGetters('Leads', ['getCountBySource']),
    dataSet() {
      return Object.entries(this.getCountBySource).map(([date, value]) => ({ date, value }));
    },
    query() {
      return {
        dateFrom: dayjs(this.selectedPeriod, 'M', true).format('YYYY-MM-DD'),
        dateTo: dayjs(this.selectedPeriod, 'M', true).endOf('month').format('YYYY-MM-DD'),
      };
    },
  },
  watch: {
    query: {
      immediate: true,
      handler(val) {
        this.fetchCountBySource(val);
      },
    },
  },
  methods: {
    ...mapActions('Leads', ['fetchCountBySource']),
  },
};
</script>

<style>

</style>
