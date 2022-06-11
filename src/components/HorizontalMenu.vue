<template>
  <div>
    <v-row no-gutters class="mr-n3">
      <v-btn
        v-for="(item) in items"
        :dark="dark"
        class="mr-3 text-capitalize font-weight-regular"
        :key="item.name"
        :text="text"
        @click="onClick(item.name)"
      >
        <span>{{ item.text }}</span>
      </v-btn>
    </v-row>
  </div>

</template>

<script>
export default {
  name: 'HorizontalMenu',
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
    text: Boolean,
    value: String,
    dark: Boolean,
  },
  methods: {
    onClick(name) {
      this.$emit('input', name);
    },
  },
};
</script>

<style>

</style>
