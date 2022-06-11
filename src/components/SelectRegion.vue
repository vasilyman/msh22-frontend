<template>
  <v-autocomplete
    v-model="region"
    :items="items"
    item-text="region"
    item-value="id_region"
    label="Регион"
    placeholder="Начните печатать"
    outlined
    rounded
    dense
    clearable
  ></v-autocomplete>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import RegionsModule from '@/store/modules/Regions';

export default {
  name: 'SelectRegion',
  props: {
    value: [String, Number],
  },
  data() {
    return {
      region: null,
    };
  },
  computed: {
    ...mapGetters('Regions', ['getList']),
    items() {
      return this.getList;
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.region = val;
      },
    },
    region: {
      handler(region) {
        this.$emit('input', region);
      },
    },
  },
  methods: {
    ...mapActions('Regions', ['fetchList']),
  },
  created() {
    this.fetchList();
  },
  beforeCreate() {
    if (!this.$store.hasModule('Regions')) this.$store.registerModule('Regions', RegionsModule);
  },
  destroyed() {
    if (this.$store.hasModule('Regions')) this.$store.unregisterModule('Regions');
  },
};
</script>

<style>

</style>
