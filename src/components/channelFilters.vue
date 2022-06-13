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
        <SelectTheme v-model="theme" />
        <v-subheader>Аудитория</v-subheader>
        <v-row>
          <v-col>
            <v-text-field
              readonly
              label="От"
              filled
              background-color="white"
              flat
              outlined
              dense
              :value="nSubscribers[0]"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              readonly
              label="До"
              filled
              background-color="white"
              flat
              outlined
              dense
              :value="nSubscribers[1]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-range-slider
          :value="nSubscribers"
          :min="getMinMaxSub[0]"
          :max="getMinMaxSub[1]"
          @change="(v) => nSubscribers = v"
        ></v-range-slider>
      </div>
      <v-spacer></v-spacer>
    </v-container>
  </AppSidebar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'channelFilters',
  props: {
    value: Boolean,
  },
  components: {
    AppSidebar: () => import('@/components/appSidebar.vue'),
    SelectTheme: () => import('@/components/SelectTheme.vue'),
  },
  computed: {
    ...mapGetters('Channels', ['getMinMaxSub']),
    search: {
      get() {
        return this.$store.getters['Channels/getFilterSearch'];
      },
      set(val) {
        this.setFilterSearch(val);
      },
    },
    theme: {
      get() {
        return this.$store.getters['Channels/getFilterTheme'];
      },
      set(val) {
        this.setFilterTheme(val);
      },
    },
    nSubscribers: {
      get() {
        return this.$store.getters['Channels/getFilterSubscribers'];
      },
      set(val) {
        this.setFilterSubscribers(val);
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
    getMinMaxSub: {
      immediate: true,
      handler(val) {
        if (val) {
          this.nSubscribers = [val[0], val[1]];
        }
      },
    },
  },
  methods: {
    ...mapMutations('Channels', ['setFilterSearch', 'setFilterTheme', 'setFilterSubscribers']),
  },
};
</script>

<style>

</style>
