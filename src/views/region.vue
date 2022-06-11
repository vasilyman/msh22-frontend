<template>
  <div class="pa-5">
  <v-card rounded="lg">
    <v-card-text>
      <v-row>
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
            <span class=" accent--text text-decoration-underline">Экспортировать в Excel</span>
            <v-icon small class="accent--text ml-1">
              mdi-content-save-outline
            </v-icon>
          </a>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <DataTable
            :page.sync="page"
            :limit="getLimit"
            :pages="getPages"
            :list="getList"
            :columns="getColumns"
            :query="query"
            :filter="getFilter"
          ></DataTable>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SocketClient from '@/sereviecs/socketClient';

export default {
  name: 'RegionPage',
  components: {
    DataTable: () => import('@/components/DataTable.vue'),
  },
  data() {
    return {
      page: 1,
      wsCilent: null,
    };
  },
  computed: {
    ...mapGetters(
      'RegionPredict',
      [
        'getList', 'getColumns', 'getExportLink',
        'getSubtitle', 'getTitle', 'getCount', 'getLimit', 'getPages', 'getFilter'],
    ),
    query() {
      const query = {
        p: this.page,
      };
      return query;
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
    ...mapActions('RegionPredict', ['fetchList']),
    async fetchData(query) {
      await this.fetchList(query);
    },
    async connectWs() {
      const ws = new SocketClient();
      await ws.connect();
      this.wsCilent = ws.client;
    },
  },
  created() {
    this.connectWs();
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
