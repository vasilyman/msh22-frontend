<template>
  <v-menu
    v-model="dateMenu"
    :close-on-content-click="false"
    max-width="290"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :value="dateRange | rangeToText"
        label="Период"
        append-icon="mdi-calendar"
        readonly
        outlined
        rounded
        clearable
        v-bind="attrs"
        v-on="on"
        dense
        placeholder="Выберите период"
        @click:clear="dateRange = null"
        @click:append="dateMenu = !dateMenu"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="dateRange"
      range
      @change="dateMenu = false"
    ></v-date-picker>
  </v-menu>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import RegionsModule from '@/store/modules/Regions';
import rangeToTextMixin from '@/mixins/filters/rangeToText';

export default {
  name: 'SelectPeriod',
  mixins: [rangeToTextMixin],
  props: {
    value: Array,
  },
  data() {
    return {
      dateRange: null,
      dateMenu: false,
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
        this.dateRange = val;
      },
    },
    dateRange: {
      handler(val) {
        this.$emit('input', val);
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
