<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :hide-default-footer="pages"
      :search="search"
      :class="[$style['bordered']]"
    >
    </v-data-table>
    <v-pagination
      v-if="pages && pages > 1"
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
    filter: {
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
      return this.columns.map(({ text, name, sortable }) => ({
        text,
        value: name,
        sortable,
        align: 'center',
      }));
    },
    items() {
      return this.list.filter((item) => {
        let result = true;
        Object.entries(this.filter).forEach(([key, val]) => {
          result = result && (!item[key] || item[key] === val);
        });
        return result;
      });
    },
    search() {
      return this.filter?.search;
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

<style lang="scss" module>
.bordered {
  border: 1px solid #C8D0DD;
}
</style>
