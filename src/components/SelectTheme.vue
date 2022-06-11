<template>
  <v-autocomplete
    v-model="localValue"
    :items="items"
    item-text="text"
    item-value="value"
    label="Продукт"
    placeholder="Начните печатать"
    filled
    background-color="white"
    flat
    outlined
    clearable
    dense
  ></v-autocomplete>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SelectTheme',
  props: {
    value: [String, Number],
  },
  data() {
    return {
      localValue: null,
    };
  },
  computed: {
    ...mapGetters('Product', ['getList']),
    items() {
      return this.getList;
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.localValue = val;
      },
    },
    localValue: {
      handler(val) {
        this.$emit('input', val);
      },
    },
  },
  methods: {
    ...mapActions('Product', ['fetchList']),
  },
  created() {
    this.fetchList();
  },
};
</script>

<style>

</style>
