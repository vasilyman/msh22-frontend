<template>
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
      <v-radio-group v-model="type" >
        <v-radio
          label="Похожие города"
          value="city"
        />
        <v-radio
          label="Конкуренты"
          value="competitor"
        />
      </v-radio-group>
      <SelectTheme v-model="theme" />
    </div>
    <v-spacer></v-spacer>
    <div>
      <UploadDataset />
    </div>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'regionFilters',
  components: {
    SelectTheme: () => import('@/components/SelectTheme.vue'),
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
    theme: {
      get() {
        return this.$store.getters['RegionPredict/getFilterTheme'];
      },
      set(val) {
        this.setFilterTheme(val);
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
  methods: {
    ...mapMutations('RegionPredict', ['setFilterSearch', 'setFilterTheme', 'setFilterType']),
  },
};
</script>

<style>

</style>
