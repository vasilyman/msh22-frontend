<template>
  <div>
    <v-row no-gutters class="mr-n3">
      <v-btn
        v-for="(item) in items"
        class="mr-3 text-capitalize font-weight-regular"
        :key="item.name"
        :text="text"
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
  },
};
</script>

<style>

</style>
