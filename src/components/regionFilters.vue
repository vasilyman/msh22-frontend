<template>
  <AppSidebar v-model="drawer">
    <v-container class="base--text d-flex flex-column" style="height:100%;">
      <div>
        <v-toolbar-title class="my-5">Фильтр</v-toolbar-title>
        <v-text-field
          v-model="search"
          label="Поиск"
          append-icon="mdi-magnify"
          filled
          background-color="white"
          flat
          outlined
          clearable
          dense
        ></v-text-field>
        Метод расчета
        <v-radio-group v-model="type" disabled >
          <v-radio
            label="Похожие города"
            value="city"
          />
          <v-radio
            label="Конкуренты"
            value="competitor"
          />
        </v-radio-group>
        <SelectProduct v-model="product" />
      </div>
      <v-spacer></v-spacer>
      <div>
        <UploadDataset />
      </div>
    </v-container>
  </AppSidebar>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'regionFilters',
  props: {
    value: Boolean,
  },
  components: {
    AppSidebar: () => import('@/components/appSidebar.vue'),
    SelectProduct: () => import('@/components/SelectProduct.vue'),
    UploadDataset: () => import('@/components/uploadDataset.vue'),
  },
  computed: {
    search: {
      get() {
        return this.$store.getters['RegionPredict/getFilterSearch'];
      },
      set(val) {
        this.setFilterSearch(val);
      },
    },
    product: {
      get() {
        return this.$store.getters['RegionPredict/getFilterProduct'];
      },
      set(val) {
        this.setFilterProduct(val);
      },
    },
    type: {
      get() {
        return this.$store.getters['RegionPredict/getFilterType'];
      },
      set(val) {
        this.setFilterType(val);
      },
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.drawer = val;
      },
    },
    drawer: {
      handler(val) {
        this.$emit('input', val);
      },
    },
  },
  methods: {
    ...mapMutations('RegionPredict', ['setFilterSearch', 'setFilterProduct', 'setFilterType']),
  },
};
</script>

<style>

</style>
