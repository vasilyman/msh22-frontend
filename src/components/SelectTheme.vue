<template>
  <v-autocomplete
    v-model="theme"
    :items="items"
    label="Тематика"
    placeholder="Начните печатать"
    filled
    background-color="white"
    clearable
    flat
    outlined
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
      theme: null,
    };
  },
  computed: {
    ...mapGetters('Themes', ['getList']),
    items() {
      return this.getList;
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.theme = val;
      },
    },
    theme: {
      handler(val) {
        this.$emit('input', val);
      },
    },
  },
  methods: {
    ...mapActions('Themes', ['fetchList']),
  },
  created() {
    this.fetchList();
  },
};
</script>

<style>

</style>
