<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-footer
      class="elevation-1"
    >
    </v-data-table>
    <v-pagination
      v-if="pages > 1"
      v-model="pageLocal"
      circle
      :length="pages"
      class="mt-5"
    ></v-pagination>
  </div>
</template>

<script>
import $date from '@/utils/date';

export default {
  name: 'DataTable',
  props: {
    page: Number,
    pages: Number,
    list: {
      type: Array,
      default: () => ([]),
    },
    columns: {
      type: Array,
      default: () => ([]),
    },
    query: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      pageLocal: null,
    };
  },
  computed: {
    headers() {
      return this.columns.map(({ text, name }) => ({
        text,
        value: name,
        sortable: false,
        align: 'center',
      }));
    },
    items() {
      return this.list;
    },
  },
  watch: {
    page: {
      immediate: true,
      handler(val) {
        this.pageLocal = val;
      },
    },
    pageLocal(val) {
      this.$emit('update:page', val);
    },
  },
  filters: {
    toDate(val) {
      return $date(val).format('DD MMM YYYY');
    },
    toMoney(val, currency) {
      return [val, currency].join(' ');
    },
  },
};
</script>

<style>

</style>
