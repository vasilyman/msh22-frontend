<template>
  <div class="pa-5">
  <v-card rounded="lg">
    <v-card-text>
      <v-row justify="center">
        <v-col :class="[$style['card-header'], 'base--text', 'text-start']">
          <h3 class="text-h4">
            {{ getTitle }}
          </h3>
          <p class="">
            {{ getSubtitle }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h3 class="my-3">Отчет</h3>
        </v-col>
        <v-col cols="auto">
          <a :href="getExportLink" class="text-decoration-none">
            <span class="accent--text text-decoration-underline">Экспортировать в Excel</span>
            <v-icon small class="accent--text ml-1">
              mdi-content-save-outline
            </v-icon>
          </a>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <DataTable
            :list="getList"
            :columns="getColumns"
            :query="query"
            :filter="getFilter"
            @click:row="onClickRow"
          ></DataTable>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ChannelsPage',
  components: {
    DataTable: () => import('@/components/DataTable.vue'),
  },
  data() {
    return {
      page: 1,
      region: null,
      searchValue: null,
      dateRange: ['2022-04-01', '2022-04-30'],
    };
  },
  computed: {
    ...mapGetters(
      'Channels',
      [
        'getList', 'getColumns', 'getExportLink',
        'getSubtitle', 'getTitle', 'getFilter'],
    ),
    query() {
      const query = {
        p: this.page,
        'f.region': this.region,
      };
      return query;
    },
    drawerRight: {
      get() {
        return this.$store.getters['App/getDrawerRight'];
      },
      set(val) {
        this.$store.commit('App/setDrawerRight', val);
      },
    },
  },
  watch: {
    query: {
      immediate: true,
      deep: true,
      handler(query) {
        this.fetchData(query);
      },
    },
  },
  methods: {
    ...mapActions('Channels', ['fetchList']),
    async fetchData(query) {
      await this.fetchList(query);
    },
    onClickRow(row) {
      this.$store.commit('App/setDrawerRightComponent', 'ChannelDetails');
      this.drawerRight = true;
      this.$store.commit('App/setDrawerRightProps', row);
    },
  },
};
</script>

<style lang="scss" module>
.card-header {
  text-align: center;
  width: 850px;
  max-width: 100%;
}
</style>
